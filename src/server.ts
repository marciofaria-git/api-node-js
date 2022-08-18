import express from 'express';

const portApplication = 3333

const app = express();

app.get("/",(request, response)=>{
  return response.json({message:"Hellow World!"})
})

app.listen(portApplication, ()=> console.log("Server is running!"));