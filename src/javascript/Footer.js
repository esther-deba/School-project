import '../styling/Footer.css';
import logo from './logo-projectt.png';
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
          <div className='footer-icons'>
            <FaInstagram />
            <GrLinkedinOption />
            <FaTwitter />
            <FaFacebookF />
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
        <div className='about-us'>
          <div>About us</div>
          <div className='text'>
            Have you ever wondered about going on vacation in Algeria but did
            not know the perfect place to choose? Our team composed of six
            people passionate in traveling and discovering got you. Whether you
            prefer ancient compact places or bustling and contemporary ones, we
            dive deep with our recommendations to suit every taste. In our
            website, you will find the best destinations with a collection of
            photographs and reviews from our dear subscribers. You can also
            share other distinations and opinion on your profile to help others
            and give them more inspiration. To love is to share, sp take
            advantage of our offer and dig with us to find picturesque and
            unique places.
          </div>
        </div>
      </div>
    </div>
  );
};
