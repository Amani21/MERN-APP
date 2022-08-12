import React from 'react'; 
import {Link} from 'react-router-dom'; 
import '../App.css';


function GameBar() {
  return (
    <div className='navbar'>
     
        <ul>
        <li><Link to ='/'>Home</Link></li>    
        <li><Link to ='/games'>Games</Link></li>
        <li><Link to ='/add'>Add new game</Link></li>
        </ul>

    </div>
  )
}

export default GameBar