import '../styling/SignUp.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineExpandMore } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
        <div>
          <p>Password</p>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
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
