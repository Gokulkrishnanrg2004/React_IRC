import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/HomeComponents/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
