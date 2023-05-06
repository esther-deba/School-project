import '../styling/SignUp.css';
import { Navigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { EndPointContext } from '../context/EndPointContext';
import { SHA256 } from 'crypto-js';
import axios from 'axios';
export const SignUp = () => {
  const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
  const [nav, setNav] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [pic, setPic] = useState();
  const { endpoint } = useContext(EndPointContext);
  console.log(username, password, email);

  const handleLogin = () => {
    setNav(true);
  };
  console.log();
  const handleSignUp = async (e) => {
    await e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    const form = new FormData();
    form.append('username', username);
    form.append('password', SHA256(password, SECRET_KEY).toString());
    form.append('email', email);
    if (pic)
      form.append('profile_pic', pic, `${email}-pic.${pic.type.split('/')[1]}`);
    try {
      const response = await axios({
        method: 'POST',
        url: `${endpoint}/signup/`,
        data: form,
      });
      console.log(response);
      setNav(true);
      return <Navigate to='/login/' />;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? 'Strong'
        : verifiedList.length >= 2
        ? 'Medium'
        : 'Weak';

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

    console.log('verifiedList: ', `${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type) => {
    if (type === 'Strong') return '#8BC926';
    if (type === 'Medium') return '#FEBD01';
    return '#FF0054';
  };

  return (
    <form className='sign-up' onSubmit={handleSignUp}>
      <h1>Create a new account</h1>
      <div className='new-user-information'>
        <div>
          <p>User Name :</p>
          <input
            type='text'
            placeholder='Ex : Mohamed'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div>
          <p>Email :</p>
          <input
            type='text'
            placeholder='Ex : mohamed@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='pass'>
          <p>Password</p>
          <div className='input-box'>
            <input
              type={hidePassword ? 'password' : 'text'}
              value={password}
              onChange={({ target }) => {
                handlePassword(target.value);
              }}
            />
            <a
              href='#'
              className='toggle-btn'
              onClick={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <span
                className='material-icons eye-icon'
                style={{ color: !hidePassword ? '#FF0054' : '#c3c3c3' }}
              >
                visibility
              </span>
            </a>
          </div>
          <div className='progress-bg'>
            <div
              className='progress'
              style={{
                width: progress,
                backgroundColor: getActiveColor(message),
              }}
            ></div>
          </div>
          {password.length !== 0 ? (
            <p className='message' style={{ color: getActiveColor(message) }}>
              Your password is {message}
            </p>
          ) : null}
        </div>
        <div>
          <p>Confirm password</p>
          <input
            type='password'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {!passwordMatch && (
            <p className='passwords-dont-match'>passwords do not match.</p>
          )}
        </div>
      </div>
      <div className='container-photo-valide'>
        <div className='select-photo-container'>
          {pic ? (
            <img src={URL.createObjectURL(pic)} className='image-preview' />
          ) : (
            <p>No selected photo yet</p>
          )}
          <input type='file' onChange={(e) => setPic(e.target.files[0])} />
        </div>
        <div className='bottom'>
          <button type='submit' className='create'>
            Create
          </button>
          <div className='sign-in-link' onClick={(e) => setNav(true)}>
            I already have an account
          </div>
        </div>
      </div>
      {nav && <Navigate replace to='/login/' />}
    </form>
  );
};
