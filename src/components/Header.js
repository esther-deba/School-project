import '../styling/Header.css';
import { IoMdHome } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../images/logo-project.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const Header = () => {
  const { token, setToken } = useContext(AuthContext)
  const [redirectLogin, setRedirectLogin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='Header'>
      <img src={logo} alt='logo' className='logo' />
      <div className='mobile'>
        <GiHamburgerMenu className='menu-icon' onClick={() => { setShowMenu(!showMenu) }} />
        {showMenu && <div className='menu'>
          <ul>
            <li>
              <div className='service'>
                <div className='icon ho'>
                  <IoMdHome />
                </div>
                <div>Home</div>
              </div>
            </li>
            <li>
              <div className='service'>
                <div className='icon mail'>
                  <MdMail />
                </div>
                <div>Contacts</div>
              </div>
            </li>
            <li>
              <div className='service'>
                <div className='icon dest'>
                  <FaMapMarkerAlt />
                </div>
                <div>Destinations</div>
              </div>
            </li>
            <li>
              <div className='service'>
                <div className='icon cer'>
                  <BsFillPatchCheckFill />
                </div>
                <div>About us</div>
              </div>
            </li>
          </ul>
          <ul>
            {token ?
              <li>logout</li> :
              <>
                <li>login</li>
              </>
            }
          </ul>

        </div>}
      </div>
      <div className='services'>
        <div className='service'>
          <div className='icon ho'>
            <IoMdHome />
          </div>
          <div>Home</div>
        </div>
        <div className='service'>
          <div className='icon mail'>
            <MdMail />
          </div>
          <div>Contacts</div>
        </div>
        <div className='service'>
          <div className='icon cer'>
            <BsFillPatchCheckFill />
          </div>
          <div>About us</div>
        </div>
        <div className='service'>
          <div className='icon dest'>
            <FaMapMarkerAlt />
          </div>
          <div>Destinations</div>
        </div>
      </div>
      {
        <div className='buttons'>
          {token ?
            <>
              <button className='sign-out' onClick={() => {
                setToken(null)
                localStorage.removeItem('token')
              }}>Sign out</button>
            </>
            :
            <>
              <button className='sign-in' onClick={() => { setRedirectLogin(true) }}>Sign in</button>
              <button className='sign-up'>Sign up</button>
            </>
          }
        </div>
      }
      {redirectLogin && <Navigate replace to="/login/" />}
    </div>
  );
};
