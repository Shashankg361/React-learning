import './style/navBar.css';
import { BsFillBootstrapFill } from "react-icons/bs";
import { IconContext } from "react-icons"; 
import { useRef } from 'react';
import { FaBars , FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar(){
    const navRef = useRef();

    const shownav = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <div style={{display:"flex" , flexDirection:"row" , alignItems:"center" }}>
                <div className='logo'>
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                <BsFillBootstrapFill />
                </IconContext.Provider>
                </div>
                <div id='logoT'>Bankai</div>
            </div>
            <div>
                <nav ref={navRef}>
                    <Link to="/" onClick={shownav}>Home</Link>
                    <Link to="/ABoutUs" onClick={shownav}>Profile</Link>
                    <Link to="/community" onClick={shownav}>Create Community</Link>
                    <Link to="/login" className='loginbtn' onClick={shownav}>Login</Link>
                    <button className="nav-btn nav-btn-close" onClick={shownav}>
                        <FaTimes />
                    </button>
                </nav>

                <button className="nav-btn" onClick={shownav}>
                    <FaBars />
                </button>
            </div>    

        </header>
    );
}

export default Navbar;