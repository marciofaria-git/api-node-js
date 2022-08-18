import express from 'express';

const portApplication = 3333

const app = express();

app.listen(portApplication, ()=> console.log("Server is running!"));