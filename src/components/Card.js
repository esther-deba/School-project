import '../styling/Card.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import gradient from '../images/gradient.png';
import { Navigate, useNavigate } from 'react-router-dom';

export const Card = ({ destination }) => {
  const { id, pic, name, commune, wilaya } = destination
  const nav = useNavigate()
  const handleNavigation = () => {
    nav(`/publications/${id}`)
  }
  return (
    <div className='card' onClick={handleNavigation}>
      <img src={pic} alt='' className='picture' />
      <img src={gradient} alt='' className='gradient' />
      <div className='destination'>{name}</div>
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
