import React from 'react'
import './styles.css';
import { IoCodeWorking } from "react-icons/io5";
function Nav() {
  return (
    <nav className='navigation'>
        <a href='/' className='brand'>
         <IoCodeWorking className='logo'/>
        </a>
       <button>action</button>
       <div className='navigation-menu'>
          <ul>
            <li><a href="#"><span>01.</span>About</a></li>
            <li><a href="#"><span>02.</span>Experince</a></li>
            <li><a href="#"><span>03.</span>Work</a></li>
            <li><a href="#"><span>04.</span>Contact</a></li>
            </ul>
       </div>
    </nav>
  )
}

export default Nav