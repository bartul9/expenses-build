import UserModel from "../models/UserModel.js";
import SessionModel from "../models/SessionModel.js";

export const createUser = async (req, res) => {
    const data = req.body;

    try {
        const newUser = new UserModel(data);
        await newUser.save();

        const newSession = new SessionModel({ userId: newUser.userId});
        await newSession.save();
        res.cookie('sessionId', newSession.userId);
        
        res.status(201).json({ message: "User created successfully" });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => { 
    const { sessionId } = req.cookies;
    const data = req.body;

    try {
        await UserModel.findOneAndUpdate({ userId: sessionId }, data);

        res.status(201).json({ message: "User updated succesfully" });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    const { sessionId } = req.cookies;

    try {   
        if (sessionId){
            const user = await UserModel.findOne({ userId: sessionId });

            res.status(201).json(user);
        } else {
            throw { message: "There is no active user", status: 401 }
        }
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            res.status(401);
            throw { message: "Please enter valid email", status: 401 }
        }

        if (user && (user.password !== password)){
            res.status(401);
            throw { message: "Please enter valid password", status: 401 }
        }

        const newSession = new SessionModel({ userId: user.userId});
        await newSession.save();

        res.cookie('sessionId', newSession.userId);
        res.status(201).json(user);
    } catch(error) {
        console.log(error)
        res.status(error.status || 409).json({ message: error.message });
    }
}

export const logoutUser = async (req, res) => {
    const { sessionId } = req.cookies;

    try {        
        await SessionModel.findOneAndDelete({ userId: sessionId });
        res.clearCookie("sessionId");

        res.status(201).json({ message: "User logged out succesfully" });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}