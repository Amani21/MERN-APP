import React, { useState } from 'react'
import { addgame } from '../js/gameSlice/gameSlice';
import {useDispatch} from 'react-redux'; 
import { useNavigate } from 'react-router-dom';


function AddGame({ping, setping}) {
    const dispatch = useDispatch();
    const navigate=useNavigate(); 
    const [game, setgame] = useState({
      
      name:'',
      img:'',
      category:'',
      rate:'',
      release_date:'',


    })

  return (
    <div className='add'>
      
        <p>Name :</p>
         <input type="text" onChange={(e)=> setgame({...game,name : e.target.value}) }/>
         <p>Category :</p>
         <select onChange={(e)=> setgame({...game,category : e.target.value}) }>

            <option value='moba'>moba </option> 
            <option value='fps'>fps</option>
            <option value='tps'>tps</option> 
            <option value='rpg'>rpg</option>
            <option value='arcade'>arcade</option> 
         </select>
         <p>Date :</p>
         <input type="date" onChange={(e)=> setgame({...game,release_date : e.target.value}) }/>
         <p>Image  :</p>
         <input type="text" onChange={(e)=> setgame({...game,img : e.target.value}) } />
         <button onClick={()=> {
          
          dispatch(addgame(game));

          setping(!ping);
          navigate("/games"); 
        
        } }>  Add New Game </button>

      </div>
  )
}

export default AddGame