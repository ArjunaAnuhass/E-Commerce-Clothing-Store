import express from 'express'
import connectDb from './config/mongoDb.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth/auth-routes.js'


dotenv.config();

//App Config

const app = express();
const port = process.env.PORT || 5000;
connectDb();

//Middlewares

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

//api Endpoints

app.use('/api/auth/', authRouter)

app.use(cookieParser());

app.listen(port, () => {
    console.log('Server started at: ', port);
})