import express from "express";
const app = express();
import mainRouter from './routes/index.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);

app.listen(3000, () => console.log("Server is running on port: 3000"));



