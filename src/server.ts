import express from "express";
import cors from "cors"
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRouter from './Routes/auth.routes.ts'




app.use("/auth", authRouter);








const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});