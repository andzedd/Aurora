import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Database connection error'))
db.once("open", () => {
    console.log('Connected to the database');
});

const app = express();

app.use(express.json());

export default app;