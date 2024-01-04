import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/HomeComponents/Home';
import Adopt from './Components/Adopt/Adopt';
import City from './Components/City/City';
import Pet from './Components/Pet/Pet';
import Donate from './Components/Donate/Donate';
import Aboutus from './Components/Aboutus/Aboutus';
import User from './Components/User/User';
import Final from './Components/Final/Final';
// import Landingpage from './Components/Landingpage/Landingpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Landingpage/>}/> */}
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/City' element={<City/>}/>
      <Route path='/Adopt' element={<Adopt/>}/>
      <Route path='/Pet' element={<Pet/>}/>
      <Route path='/Donate' element={<Donate/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Final' element={<Final/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
