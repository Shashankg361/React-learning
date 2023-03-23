import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {Home} from './pages/Home'
import { Profile } from './pages/ABoutUs';
import { Community } from './pages/community';
import { BsFillBootstrapFill } from "react-icons/bs";
import { IconContext } from "react-icons";  
import {useState ,createContext} from "react"
import { Login } from './pages/login';

export const AppContext = createContext();

function App() {

  const [community ,  setCommunity] = useState(['Bankai','ozone']);


  return (
    <div className="App">
      <AppContext.Provider value={{community , setCommunity}} >
      <Router>
        <div className='navContainer'>
          <div className='logo'>
            <IconContext.Provider value={{ className: "top-react-icons" }}>
            <BsFillBootstrapFill />
            </IconContext.Provider>
          </div><div id='logoT' style={{color:'rgb(4, 4, 175)'}}>Bankai</div>
         
          <Link to="/" className='navHome'>Home</Link>
          <Link to="/ABoutUs">Profile</Link>
          <Link to="/community">Create Community</Link>
          <Link to="/login" className='loginbtn'>Login</Link>
        </div>
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/ABoutUs' element={<Profile />}/>
          <Route path='/community' element={<Community/>} /> 
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App; 
