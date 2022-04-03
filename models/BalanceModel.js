import { mongoose } from "mongoose";

const BalanceSchema = new mongoose.Schema({
    amount: {
      type: Number,
      required: true,
    },
    type: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    expenseId: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const BalanceModel = mongoose.model("Balance", BalanceSchema);

export default BalanceModel;
