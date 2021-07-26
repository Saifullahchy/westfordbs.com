import React,{ useState } from 'react'
import { Button } from './Button/Button'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Dropdown  from './dropdown/Dropdown'
import logo from '../../assets/images/Logo.png'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenue = () => setClick(false);
  
  const onMouseEnter = ()=>{
    if(window.innerWidth < 960){
      setDropdown(false)
    }
    else{
      setDropdown(true)
    }
 };
 const onMouseLeave = ()=>{
  if(window.innerWidth < 960){
    setDropdown(false)
  }
  else{
    setDropdown(false)
  }
};
    return (
        <>
          <nav className="navbarContainer">
              <Link to ='/' className='navbar-logo'>
                <img src= {logo} className='logo' alt='Logo'/>
              </Link>
              <div className="menu-icon" onClick ={handleClick}> 
                 <i className={ click ? 'fas fa-times': 'fas fa-align-left' }/>
              </div>
              <ul className={click ? 'nav-menu active ': 'nav-menu'}>
                  <li className= 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick ={ closeMobileMenue}>
                      Home
                    </Link>
                  </li>
                  <li className= 'nav-item'
                    onMouseEnter = {onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                  >
                    <Link to = '/services' className = 'nav-links' onClick ={ closeMobileMenue}>
                     Services <i className ='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown />}
                  </li>

                  <li className= 'nav-item'>
                    <Link to = '/about' className = 'nav-links' onClick ={ closeMobileMenue}>
                      About us
                    </Link>
                  </li>
                  <li className= 'nav-item'>
                    <Link to = '/career' className = 'nav-links' onClick ={ closeMobileMenue}>
                      Career
                    </Link>
                  </li>
                  
                  <li className= 'nav-item'>
                    <Link to = '/fees' className = 'nav-links' onClick ={ closeMobileMenue}>
                      Fees
                    </Link>
                  </li>
                  <li className= 'nav-item'>
                    <Link to = '/news' className = 'nav-links' onClick ={ closeMobileMenue}>
                      Latest News
                    </Link>
                  </li>
                  
                  <li className= 'nav-item'>
                    <Link to = '/contact-us' className = 'nav-links' onClick ={ closeMobileMenue}>
                      Contact Us
                    </Link>
                  </li>

                  <li>
            <Link
              to='/appointment'
              className='nav-links-mobile'
              onClick={closeMobileMenue}
            >
              Book An Appointment
            </Link>
          </li>
              </ul>
              <Link to='/appointment'>
              <Button />
              </Link>
             
          </nav> 
        </>
    )
}

export default Navbar
