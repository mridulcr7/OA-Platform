import express from "express";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    return res.send("hello world !! ^_^");
});

app.listen(PORT, () =>
    console.log(`🚀Server is running on http://localhost:${PORT}`)
);
