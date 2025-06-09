// import './index.css'
// import { FaUser } from "react-icons/fa";
// import { MdRestaurant } from "react-icons/md";
// import { FaBookBookmark } from "react-icons/fa6";
// import { PiPhoneFill } from "react-icons/pi";
// import { FaCalendarAlt } from "react-icons/fa";
// import { GoHomeFill } from "react-icons/go";
// import toggleMenu from "../../utils/toggleMenu";

// function Navbar() {
//   return (
//     <>
//       <nav className='nav'>
//         <a href="/"><img src="/Logo 2017.png" alt="" className='logo'/></a>
//         <div className='shopMenuSection'>
//           <div className='btnMenuNav'>
//             <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden" onClick={toggleMenu}/>
//             <label htmlFor="checkbox2">
//               <div className="hamburger hamburger2">
//                 <span className="bar bar1"></span>
//                 <span className="bar bar2"></span>
//                 <span className="bar bar3"></span>
//                 <span className="bar bar4"></span>
//               </div>
//             </label>
//           </div>
//         </div>
//         <div className='menuDesktop'>
//           <ul>
//             <a href="/"><li>Home</li></a>
//             <a href="/profile"><li>Perfil</li></a>
//             <a href="/menu"><li>Menu</li></a>
//             <a href="/reserves"><li>Reservas</li></a>
//             <a href="/events"><li>Eventos</li></a>
//             <a href="/contact"><li>Contactanos</li></a>
//           </ul>
//         </div>
//       </nav>
//       <menu className='dropDownMenu inactive'>
//         <ul>
//           <a href="/"><li><GoHomeFill />Home</li></a>
//           <a href="/profile"><li><FaUser />Perfil</li></a>
//           <a href="/menu"><li><MdRestaurant />Menu</li></a>
//           <a href="/reserves"><li><FaBookBookmark/>Reservas</li></a>
//           <a href="/events"><li><FaCalendarAlt/>Eventos</li></a>
//           <a href="/contact"><li><PiPhoneFill/>Contactanos</li></a>
//         </ul>
//       </menu>
//     </>
//   )
// }

// export default Navbar


import './index.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import toggleMenu from "../../utils/toggleMenu";
import closeMenu from '../../utils/closeMenu';


function Navbar() {
  return (
    <>
      <nav className='nav'>
        {/* Cambiado a Link para que use react-router */}
        <Link to="/"><img src="Logo 2017.png" alt="" className='logo'/></Link>
        <div className='shopMenuSection'>
          <div className='btnMenuNav'>
            <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden" onClick={toggleMenu}/>
            <label htmlFor="checkbox2">
              <div className="hamburger hamburger2">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </label>
          </div>
        </div>
        <div className='menuDesktop'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reserves">Reservas</Link></li>
            <li><Link to="/events">Eventos</Link></li>
            <li><Link to="/contact">Contactanos</Link></li>
          </ul>
        </div>
      </nav>

    <menu className='dropDownMenu inactive'>
      <ul>
        <li><Link to="/" onClick={closeMenu}><GoHomeFill /> Home</Link></li>
        <li><Link to="/profile" onClick={closeMenu}><FaUser /> Perfil</Link></li>
        <li><Link to="/menu" onClick={closeMenu}><MdRestaurant /> Menu</Link></li>
        <li><Link to="/reserves" onClick={closeMenu}><FaBookBookmark /> Reservas</Link></li>
        <li><Link to="/events" onClick={closeMenu}><FaCalendarAlt /> Eventos</Link></li>
        <li><Link to="/contact" onClick={closeMenu}><PiPhoneFill /> Contactanos</Link></li>
      </ul>
    </menu>
    </>
  )
}

export default Navbar
