import '../styling/Footer.css';
import logo from '../images/second-logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='principal'>
          <div>
            <img src={logo} alt='logo' className='footer-logo' />
          </div>
          <div className='text'>
            find you destination , and discover more about you countrie
          </div>
        </div>

        <div className='pages'>
          <div className='title'>Pages</div>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>Destinations</li>
            <li>About us</li>
          </ul>
        </div>

        <div className='social-media'>
          <div className='footer-icons'>
            <FaInstagram />
            <GrLinkedinOption />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};
