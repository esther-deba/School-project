import './Card.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import gradient from './gradient.png';

export const Card = ({ picture, destination, commune, wilaya }) => {
  return (
    <div className='Card'>
      <img src={picture} alt='' className='picture' />
      <img src={gradient} alt='' className='gradient' />
      <div className='destination'>{destination}</div>
      <div className='more'>
        see more
        <MdKeyboardArrowRight className='more-icon' />
      </div>
      <div className='place'>
        <FaMapMarkerAlt className='destination-icon' />
        {wilaya} - {commune}
      </div>
    </div>
  );
};
