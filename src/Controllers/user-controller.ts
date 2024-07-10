import User from "../Models/User.js";
import {Request, Response, NextFunction} from 'express';

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json({message: "OK",users});

    } catch (error) {
        console.log(error);
        return res.status(404).json({message: "ERROR", cause: error.message});        
    }
};