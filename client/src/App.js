import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import Detail from './components/Detail/Detail';

function App() {
  return (
 
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/:id' element={<Detail/>}/>
      <Route path='/pokemon' element={<PokemonCreate/>}/>
    </Routes>
    </div>

  );
}

export default App;
