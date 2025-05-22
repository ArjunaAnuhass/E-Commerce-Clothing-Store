import express from 'express'
import connectDb from './config/mongoDb.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth/auth-routes.js'
import adminProductRoutes from './routes/admin/admin.products-routes.js';


dotenv.config();

//App Config

const app = express();
const port = process.env.PORT;
connectDb();

//Middlewares

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)
app.use(cookieParser());

//api Endpoints

app.use('/api/auth', authRouter)
app.get('/testing', (req, res) => {
    res.send('Api working successfully');
})
app.use('/api/admin/products', adminProductRoutes);


app.listen(port, () => {
    console.log(`Server started at: ${port}`);
})