import './App.css';
import GameBar from './components/GameBar';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import {Routes, Route} from 'react-router-dom'; 
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getgames } from './js/gameSlice/gameSlice';

function App() {
    
     const dispatch=useDispatch();
     const [ping, setping] = useState(false); 
    useEffect(() => {
          dispatch(getgames())
    }, [ping]);
    

  return (
    <div className="App">
      
      <GameBar />
      
      <Routes>
        <Route   path='/'  element={<Home/> }/> 
        <Route   path='/games'  element={<GameList   ping={ping} setping={setping}/> }/> 
        <Route   path='/add'  element={<AddGame ping={ping} setping={setping}/> }/> 

      </Routes>
    </div>
  );
}

export default App;
