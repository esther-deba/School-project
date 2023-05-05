import '../styling/footer.css';
import logo from '../images/second-logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

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
            <li>Home</li>
            <li>Contact us</li>
            <li>Destinations</li>
            <li>About us</li>
          </ul>
        </div>

        <div>
          <div>
            <FaInstagram />
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
            <GrLinkedinOption />
          </div>
        </div>
      </div>
    </footer>
  );
};
