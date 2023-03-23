import './pages.css';
import { FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons"; 
export const Login = ()=>{
    return (
        <div className='Container'>
            
            <IconContext.Provider value={{ className: "user-react-icons" }}>
            <FaUserAlt />
            </IconContext.Provider>

            <div className='innerContainer'>
                <div className=' labels'>
                <label>Username</label>
                </div>
                <input placeholder='Put Your Username'/>
                <div className='labels'>
                    <label>Password</label>
                </div>
                <input placeholder='Password' type='password'/>
            </div>
            <button>Submit</button>
            
            
        </div>
    )
}