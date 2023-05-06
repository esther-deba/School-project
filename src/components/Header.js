import '../styling/Header.css';
import { IoMdHome } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-project.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Header = () => {
  const { token, setToken } = useContext(AuthContext);
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectSignUp, setRedirectSignUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='Header'>
      <img src={logo} alt='logo' className='logo' />
      <div className='mobile'>
        <GiHamburgerMenu
          className='menu-icon'
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        {showMenu && (
          <div className='menu'>
            <ul>
              <li>
                <div className='service'>
                  <div className='icon ho'>
                    <IoMdHome />
                  </div>
                  <NavLink
                    className='navbar-item'
                    activeClassName='is-active'
                    to='/'
                    exact
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='service'>
                  <div className='icon mail'>
                    <MdMail />
                  </div>
                  <Link
                    to='/#feedbackform'
                    spy={true}
                    smooth={true}
                    offset={600}
                    duration={700}
                  >
                    Contacts
                  </Link>
                </div>
              </li>
              <li>
                <div className='service'>
                  <div className='icon dest'>
                    <FaMapMarkerAlt />
                  </div>
                  <NavLink
                    className='navbar-item'
                    activeClassName='is-active'
                    to='/results/'
                    exact
                  >
                    Destinations
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='service'>
                  <div className='icon cer'>
                    <BsFillPatchCheckFill />
                  </div>
                  <Link
                    to='/#about-us'
                    spy={true}
                    smooth={true}
                    offset={600}
                    duration={700}
                  >
                    About us
                  </Link>
                </div>
              </li>
              <li>
                {
                  <div className='buttons'>
                    {token ? (
                      <>
                        <button
                          className='sign-out'
                          onClick={() => {
                            setToken(null);
                            localStorage.removeItem('token');
                          }}
                        >
                          Sign out
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className='sign-in'
                          onClick={() => {
                            setRedirectLogin(true);
                          }}
                        >
                          Sign in
                        </button>
                        <button
                          className='sign-up'
                          onClick={() => {
                            setRedirectSignUp(true);
                          }}
                        >
                          Sign up
                        </button>
                      </>
                    )}
                  </div>
                }
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='services'>
        <div className='service'>
          <div className='icon ho'>
            <IoMdHome />
          </div>
          <NavLink
            className='navbar-item'
            activeClassName='is-active'
            to='/'
            exact
          >
            Home
          </NavLink>
        </div>
        <div className='service'>
          <div className='icon mail'>
            <MdMail />
          </div>
          <Link
            to='/#feedbackform'
            spy={true}
            smooth={true}
            offset={600}
            duration={700}
          >
            Contacts
          </Link>
        </div>
        <div className='service'>
          <div className='icon cer'>
            <BsFillPatchCheckFill />
          </div>
          <Link
            to='/#about-us'
            spy={true}
            smooth={true}
            offset={600}
            duration={700}
          >
            About us
          </Link>
        </div>
        <div className='service'>
          <div className='icon dest'>
            <FaMapMarkerAlt />
          </div>
          <NavLink
            className='navbar-item'
            activeClassName='is-active'
            to='/results/'
            exact
          >
            Destinations
          </NavLink>
        </div>
      </div>
      {
        <div className='buttons'>
          {token ? (
            <>
              <button
                className='sign-out'
                onClick={() => {
                  setToken(null);
                  localStorage.removeItem('token');
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <button
                className='sign-in'
                onClick={() => {
                  setRedirectLogin(true);
                }}
              >
                Sign in
              </button>
              <button
                className='sign-up'
                onClick={() => {
                  setRedirectSignUp(true);
                }}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      }
      {redirectLogin && <Navigate replace to='/login/' />}
      {redirectSignUp && <Navigate replace to='/sign-up/' />}
    </div>
  );
};
