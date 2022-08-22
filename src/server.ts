import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const portApplication = 3333;

const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);


app.listen(portApplication, ()=> console.log("Server is running!"));