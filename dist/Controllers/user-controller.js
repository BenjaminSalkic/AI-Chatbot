import { COOKIE_NAME } from "../Utils/constants.js";
import User from "../Models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../Utils/token-manager.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).send("User does not exist");
        }
        const isPasswordCorrect = await compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Invalid password");
        }
        res.clearCookie(COOKIE_NAME, { httpOnly: true, domain: "localhost", signed: true, path: "/" });
        const token = createToken(existingUser._id.toString(), existingUser.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires: expires, httpOnly: true, signed: true });
        return res.status(200).json({ message: "OK", id: existingUser._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send("User already exists");
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.clearCookie(COOKIE_NAME, { httpOnly: true, domain: "localhost", signed: true, path: "/" });
        const token = createToken(existingUser._id.toString(), existingUser.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires: expires, httpOnly: true, signed: true });
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map