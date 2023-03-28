import '../styling/Header.css';
import { IoMdHome } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import logo from './logo-project.png';

export const Header = () => {
  return (
    <div className='Header'>
      <img src={logo} alt='logo' className='logo' />
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
      <div className='buttons'>
        <div className='sign-in-border'>
          <div>
            <button className='sign-in'>Sign in</button>
          </div>
        </div>
        <button className='sign-up'>Sign up</button>
      </div>
    </div>
  );
};
