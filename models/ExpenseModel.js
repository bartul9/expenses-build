import { mongoose } from "mongoose";


const ExpenseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    cost: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    priority: {
        type: String,
        required: true,
        default: "Medium"
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);

export default ExpenseModel;