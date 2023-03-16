
import './App.css';
import { Route,Routes,Link } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/martketplace">Marketplace</Link>
        </li> */}
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      {/* <Route path='/martketplace' element={<Marketplace/>}/> */}
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/product/:id' element={<Product/>}/> */}
      <Route path='/product'>
        <Route index element={<Marketplace/>}/>
        <Route path=":id" element={<Product/>}/>
      </Route>

      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  );
}

export default App;
    

