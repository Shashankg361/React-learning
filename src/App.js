import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './pages/Home'
import { Profile } from './pages/ABoutUs';
import { Community } from './pages/community';
 

import {useState ,createContext} from "react";
import { Login } from './pages/login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const AppContext = createContext();

function App() {

  const client = new QueryClient({defaultOptions :{
    queries:{
      refetchOnWindowFocus : false,
    }
  }});
  const [community ,  setCommunity] = useState(['Bankai','ozone']);


  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{community , setCommunity}} >
      <Router>
        
        <Navbar />

        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/ABoutUs' element={<Profile />}/>
          <Route path='/community' element={<Community/>} /> 
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App; 
