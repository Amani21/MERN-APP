import React from 'react'
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

function GameList({ping, setping}) {

const games = useSelector (state=>state.game.games); 
console.log(games)
  return (
    <div className='list'>
      {games? games.map(el=> <GameCard ping={ping} setping={setping} game={el} /> ) : <img src='https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif' alt='' />}

    </div>
  )
}

export default GameList