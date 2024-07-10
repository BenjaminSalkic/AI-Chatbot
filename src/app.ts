import express from 'express'
import {config} from 'dotenv';
import morgan from 'morgan';
import router from './Routes/index.js';

config();
const app = express();

//Middleware
app.use(express.json());

//remove in production
app.use(morgan('dev'));

app.use('/api',router);

export default app;
