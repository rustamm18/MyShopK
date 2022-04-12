import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.json({'msg': 'Hello World'})
})

app.use('/api/products', productRoutes)
app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
