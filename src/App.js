
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import RickMorty from './RickMorty'


function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rickmorty' element={<RickMorty/>}/>

      
    </Routes>
   </div>
  );
}

export default App;
