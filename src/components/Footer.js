import '../styling/footer.css';
import logo from '../images/second-logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} className='logo-footer' />
        <p>Find a destination and discover your country</p>
      </div>
      <div>
        <div>
          <h2>Pages</h2>
          <ul>
            <NavLink activeClassName='is-active' to='/' exact>
              <li>Home</li>
            </NavLink>

            <Link
              to='/#feedbackform'
              spy={true}
              smooth={true}
              offset={600}
              duration={700}
            >
              <li>Contacts</li>
            </Link>
            <Link
              to='/#about-us'
              spy={true}
              smooth={true}
              offset={600}
              duration={700}
            >
              <li>About us</li>
            </Link>
            <NavLink activeClassName='is-active' to='/results/' exact>
              <li>Destinations</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <div>
            <Link
              to='https://www.instagram.com/assikelcodeam/?hl=fr'
              target='blank'
            >
              <FaInstagram className='footer-icon' />
            </Link>

            <Link
              to='https://www.facebook.com/profile.php?id=100092221823177'
              target='blank'
            >
              <FaFacebookF className='footer-icon' />
            </Link>
          </div>
          <div>
            <Link to='https://twitter.com/ASSIKELCodEam' target='blank'>
              <FaTwitter className='footer-icon' />
            </Link>
            <Link
              to='https://www.linkedin.com/in/code-eam-5b93b5275/'
              target='blank'
            >
              <GrLinkedinOption className='footer-icon' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
