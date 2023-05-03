import { useState } from 'react';
import '../styling/SignUp.css';

export const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  return (
    <form className='sign-up' onSubmit={handleFormSubmit}>
      <h1>Create a new account</h1>
      <div className='new-user-information'>
        <div>
          <p>User Name :</p>
          <input type='text' placeholder='Ex : Mohamed' />
        </div>
        <div>
          <p>Email :</p>
          <input type='text' placeholder='Ex : mohamed@gmail.com' />
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
            <p className='passwords-dont-match'>Passwords do not match.</p>
          )}
        </div>
      </div>
      <div className='container-photo-valide'>
        <div className='select-photo-container'>
          <p>No selected photo yet</p>
          <input type='file' />
        </div>
        <div className='bottom'>
          <button type='submit' className='create'>
            Create
          </button>
          <div>I already have an account</div>
        </div>
      </div>
    </form>
  );
};
