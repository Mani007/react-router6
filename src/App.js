
import './App.css';
import { Route,Routes,Link, useRoutes, NavLink, useLocation } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Notfound from './pages/Notfound';
import Marklayout from './pages/Marklayout';
import Markroutes from './pages/Markroutes';

function App() {
  let elements = useRoutes([
    {
      path:"/",
      index: true,
      element: <Home/>,
    },
    {
      path:"about",
      element: <About/>,
    },
    {
      path:"profile",
      element: <Profile/>,
    },
    {
      path:"*",
      element: <Notfound/>,
    },
  ])
  const location = useLocation()
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink style={({isActive}) => {return isActive ? {color: "blue"} : {}}} to="/" >
          {({isActive}) => {return isActive ? "Active Home":"Home"}}</NavLink>
        </li>
        <li>
          <NavLink to="/about" state="Hi about state">About</NavLink>
        </li>
        {/* <li>
          <Link to="/martketplace">Marketplace</Link>
        </li> */}
        <li>
          <Link to="/profile" state="Hi Profile state">Profile</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
    {elements}
    {location.state}
    <Routes>
      {/* <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} /> */}
      {/* <Route path='/martketplace' element={<Marketplace/>}/> */}
      {/* <Route path='/profile' element={<Profile/>}/> */}
      {/* <Route path='/product/:id' element={<Product/>}/> */}
      <Route path='/product/*' element={<Markroutes/>}>  
        
      </Route>

      {/* <Route path='*' element={<Notfound/>}/> */}
    </Routes>
    </>
  );
}

export default App;
    

