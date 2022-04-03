import BalanceModel from "../models/BalanceModel.js";

export const createBalance = async (req, res) => {
    const { amount, type } = req.body;

    try {   
        const { sessionId } = req.cookies;

        const newBalance = new BalanceModel({
            amount,
            type,
            userId: sessionId,
        });
        await newBalance.save();

        res.status(201).json({ message: "Balance updated successfully" });
    } catch(error) {
        res.status(error.status || 409).json({ message: error.message });
    }
}

export const getBalances = async (req, res) => {
    const { sessionId }  = req.cookies;

    try {
        const count = await BalanceModel.count({ userId: sessionId });
        const balances = await BalanceModel.find({
            userId: sessionId,
        });

        const [ balance, deposits, withdrawals ] = balances.reduce((acc, item) => {

            return item.type === "Deposit" ? 
            [acc[0] + item.amount, acc[1] + item.amount, acc[2]] : 
            [acc[0] - item.amount, acc[1], acc[2] - item.amount];

        }, [0, 0, 0]);

        const data = {
            items: balances,
            quantity: count,
            balance,
            deposits,
            withdrawals
        }

        res.status(200).json(data);
    } catch(error) {
        res.status(404).json({ message:error.message });
    }
}

export const findBalance = async (req, res) => {

}

export const deleteBalance = async (req, res) => {
    
}

export const updateBalance = async (req, res) => {
    
}