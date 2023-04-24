import '../styling/SignIn.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import man from '../images/man.png';

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='container'>
        <div className='information'>
          <div className='todo'>LOGIN TO YOUR ACCOUNT</div>
          <div className='user-inputs'>
            <input
              type='text'
              className='username-input'
              placeholder='Username or email'
            />
            <input
              type='password'
              className='password-input'
              placeholder='Password'
            />
          </div>
          <button className='login'>Login</button>
          <div className='under-login'></div>
          <div className='no-account'>you don't have an acocunt ?</div>
          <a href='#' className='to-sign-up'>
            Sign up
          </a>
        </div>
        <div>
          <img src={man} className='man' />
        </div>
      </div>
    </div>
  );
};
