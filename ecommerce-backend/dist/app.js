import express from 'express';
import { connectDB } from './utils/features.js';
// Importing Routes
import userRoute from './routes/user.js';
const app = express();
const PORT = 4000;
connectDB();
app.use(express.json());
// app.use(e)
// Using Routes
app.use('/api/v1/user', userRoute);
app.get('/', async (req, res) => {
    res.send("Welcome to E-Commerce Platform");
});
app.listen(PORT, () => {
    console.log(`Server is Listening on PORT: ${PORT}`);
});
