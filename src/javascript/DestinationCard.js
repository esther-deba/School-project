import '../styling/DestinationCard.css';
import img from '../images/destination.png';
import { BiBookmarkAlt } from 'react-icons/bi';
import photo from '../images/photo.png';
import orange from '../images/orange.png';

export const DestinationCard = ({
  photo,
  destination,
  commune,
  wilaya,
  description,
}) => {
  return (
    <div className='destination-card'>
      <div>
        <div className='left-orange-bloc'>
          <img src={img} alt='' className='white-bloc' />

          <div className='destination'>{destination}</div>
          <div className='wilaya-commune'>
            {wilaya}, {commune}
          </div>
          <div className='description'>{description}</div>

          <BiBookmarkAlt className='icon' />
        </div>
      </div>
      <div className='destination-image'>
        <img src={photo} alt='' className='photo' />
        <img src={orange} alt='' className='orange' />
      </div>
    </div>
  );
};
