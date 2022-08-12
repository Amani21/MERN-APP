 const express=require('express');
 const app= express();
 const cors=require('cors'); 


const DBconnect=require('./DB_connect');
app.use(express.json()); 
app.use(cors());
require("dotenv").config();

DBconnect();

app.use("/game", require("./routes/gameRouter")); 

 app.listen(process.env.PORT, (err)=> {err ? console.log(err) : console.log('server is runnig ')}); 
