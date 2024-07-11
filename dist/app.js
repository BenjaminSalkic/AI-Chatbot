import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import router from './Routes/index.js';
import cookieParser from 'cookie-parser';
config();
const app = express();
//Middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove in production
app.use(morgan('dev'));
app.use('/api', router);
export default app;
//# sourceMappingURL=app.js.map