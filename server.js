import express from "express";
import dotenv from "dotenv";

dotenv.config();

import categoryRouters from "./routes/categoryRoutes.js";
import productRouters from "./routes/productsRouters.js";
import userRouters from "./routes/userRouters.js";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/categories", categoryRouters);
app.use("/products", productRouters);
app.use("/users", userRouters);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});