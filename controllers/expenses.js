import ExpenseModel from "../models/ExpenseModel.js";
import BalanceModel from "../models/BalanceModel.js";

// Add querying on server side and query utiliy on client for querying results
export const getExpenses = async (req, res) => {
    const { sessionId }  = req.cookies;
    const { from, to, orderBy = "createdAt", order = "asc", rpp, page } = req.query;

    try {
        const count = await ExpenseModel.count({ userId: sessionId });
        const expenses = await ExpenseModel.find({
            userId: sessionId,
            createdAt: { $gte: new Date(from) ,$lt: new Date(to)}

        }).sort({ [orderBy]: order === "asc" ? 1 : -1 }).skip(page * rpp).limit(rpp)
        
        const data = {
            items: expenses,
            quantity: count
        }

        res.status(200).json(data);
    } catch(error) {
        res.status(404).json({ message:error.message })
    }
}

export const getChartData = async (req, res) => {
    const { sessionId }  = req.cookies;
    const { from, to } = req.query;

    try {
        const expenses = await ExpenseModel.find({
            userId: sessionId,
            createdAt: { $gte: new Date(from), $lt: new Date(to) }

        });

        const [ totalCost, highestExpense ] = expenses.reduce((acc, item) => {
            return [acc[0] += item.cost, item.cost > acc[1] ? item.cost : acc[1]];
        }, [0, 0]);
        
        
        const data = {
            items: expenses,
            totalCost,
            highestExpense,
        }

        res.status(200).json(data);
    } catch(error) {
        res.status(404).json({ message:error.message })
    }
}

export const findExpense = async (req, res) => {
    const { id }  = req.params;

    try {
        const expenses = await ExpenseModel.findById(id);
        res.status(200).json(expenses);
    } catch(error) {
        res.status(404).json({ message:error.message })
    }
}

export const createExpense = async (req, res) => {
    const expense = req.body;

    try {   
        const { sessionId } = req.cookies;
        
        const balances = await BalanceModel.find({ userId: sessionId });

        const totalBalance = balances.reduce((acc, item) => {
            return acc += item.type === "Deposit" ? item.amount : -item.amount;
        }, 0);

        if (totalBalance >= expense.cost) {
            const newExpense = new ExpenseModel({ ...expense, balance: totalBalance - expense.cost });
            await newExpense.save();

            const balanceChange = new BalanceModel({
                type: "Withdrawal",
                userId: sessionId,
                amount: expense.cost,
                expenseId: newExpense.id
            });

            await balanceChange.save();
        } else {
            throw { message: "Not enough balance", status: 403 }
        }

        res.status(201).json({ message: "Expense created successfully" });
    } catch(error) {
        res.status(error.status || 409).json({ message: error.message });
    }
}

export const deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        await ExpenseModel.findOneAndDelete({ id });
        await BalanceModel.findOneAndDelete({ expenseId: id });

        res.status(200).json({ message: "Deleted successfully" });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateExpense = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const expense = await ExpenseModel.findById(id)

        let costDifference;
    
        if (body.cost != expense.cost) {
            costDifference = body.cost > expense.cost ? -(body.cost - expense.cost) : (expense.cost - body.cost);

            await BalanceModel.findOneAndUpdate({ expenseId: id }, { amount: body.cost });
        }

        await expense.updateOne({ ...body, balance: costDifference != null ? expense.balance + costDifference : expense.balance });
        
        res.status(200).json({ message: "Updated successfully" });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}