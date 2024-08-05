import { Router } from 'express';
import { getAllUsers, userLogin, userSignup, verifyUser } from '../Controllers/user-controller.js';
import { loginValidator, signupValidator,validate } from '../Utils/validators.js';
import { verifyToken } from '../Utils/token-manager.js';


const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator), userSignup);
userRouter.post('/login', validate(loginValidator), userLogin);
userRouter.get('/auth-status',verifyToken, verifyUser);

export default userRouter; 