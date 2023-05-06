import { VscError } from 'react-icons/vsc';
import '../styling/error.css';

export const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>PAGE NOT FOUND</p>
      <VscError className='icon' />
    </div>
  );
};
