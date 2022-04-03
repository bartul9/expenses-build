import { mongoose } from "mongoose";

const SessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const SessionModel = mongoose.model("Session", SessionSchema);

export default SessionModel;