import { mongoose } from "mongoose";
import { v4 as uuid } from 'uuid';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: "String",
        required: true,
        default: uuid()
    },
    currency: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;

