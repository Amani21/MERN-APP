const mongoose=require('mongoose');  

const gameSchema= new mongoose.Schema({

   name : String,
   img : String, 
   rate : {type : Number, default :0 }, 
   category : String, 
   release_date : String, 

})

const Game=mongoose.model('Game', gameSchema);

module.exports=Game; 