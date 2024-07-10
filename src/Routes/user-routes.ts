import { Router } from 'express';
import { getAllUsers } from '../Controllers/user-controller.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);

export default userRouter;