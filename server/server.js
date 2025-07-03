import express from 'express'
import connectDb from './config/mongoDb.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth/auth-routes.js'
import adminProductRoutes from './routes/admin/admin.products-routes.js';
import shopProductRoutes from './routes/shop/shop.products-routes.js';
import cartRoutes from './routes/shop/shop.cart-routes.js';
import addressRoutes from './routes/shop/shop.address-routes.js';
import orderRouter from './routes/shop/shop.order-routes.js';


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
app.use('/api/shop/products', shopProductRoutes);
app.use('/api/shop/cart', cartRoutes);
app.use('/api/shop/address', addressRoutes)
app.use('/api/shop/order', orderRouter)


app.listen(port, () => {
    console.log(`Server started at: ${port}`);
})