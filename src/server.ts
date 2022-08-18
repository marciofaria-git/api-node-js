import express from 'express';

const portApplication = 3333

const app = express();

app.use(express.json())

app.get("/",(request, response)=>{
  return response.json({message:"Hellow World!"})
})

app.post("/todo",(request, response)=>{
  const {item} = request.body;
  return response.json({item});
})

app.listen(portApplication, ()=> console.log("Server is running!"));