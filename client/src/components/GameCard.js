import React from 'react';
import { useDispatch } from 'react-redux';

import '../App.css';
import { deletegame } from '../js/gameSlice/gameSlice';
import GameUpdate from './GameUpdate';

function GameCard({game, ping , setping}) {

     const dispatch=useDispatch(); 


  return (
    <div className='card'>
      <img  src={game.img}  alt={game.name} /> 
      <div className='card-content'> 
        <h1>{game.name} </h1>
        <p>{game.release_date}</p>
        <p>{game.rate}</p> 
        <button onClick={()=> {
          
          dispatch(deletegame(game._id));
          setping(!ping);  

        }
        
        }>Delete</button>
        <GameUpdate    ping={ping} setping={setping} id={game._id}/> 
      </div> 

    </div>
  )
}

export default GameCard