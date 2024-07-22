import express from 'express'
import {config} from 'dotenv';
import morgan from 'morgan';
import router from './Routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config();
const app = express();

//Middleware
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove in production
app.use(morgan('dev'));

app.use('/api',router);

export default app;
