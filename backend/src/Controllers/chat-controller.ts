import { NextFunction,Request,Response } from "express"
import User from "../Models/User.js";
import { configureOpenAI } from "../Config/openai-config.js";
import {ChatCompletionRequestMessage, OpenAIApi} from "openai";

export const generateChatCompletion = async (req:Request, res:Response, next:NextFunction) => {
    const {message} = req.body;
    try {
            
        const user = await User.findById(res.locals.jwtData.id);
        if(!user){
            return res.status(401).json({message:'User not found'});
        }

        //get chats from user
        const chats = user.chats.map(({role,content})=>({role,content})) as ChatCompletionRequestMessage[];
        chats.push({content:message,role:'user'});
        user.chats.push({content:message,role:'user'});
        
        //send chats to OpenAI for context 
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        
        //get res 
        const chatRespose = await openai.createChatCompletion({model:'gpt-3.5-turbo',messages:chats});
        user.chats.push(chatRespose.data.choices[0].message);
        await user.save();
        return res.status(200).json({chats : user.chats});


    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong", cause: error.message});      
    }
    
};