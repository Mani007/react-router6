import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/martketplace' element={<Marketplace/>}/>
    </Routes>
  );
}

export default App;
    

