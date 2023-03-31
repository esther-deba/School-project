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
  username,
  profilePic,
}) => {
  return (
    <div className='destination-card'>
      <div>
        <div className='left-orange-bloc'>
          <img src={img} alt='' className='white-bloc' />
          <button className='get-place'>get place</button>
          <div className='person'>
            <img src={profilePic} alt='' className='profilePic' />
            <div className='username'>{username}</div>
          </div>
          <BiBookmarkAlt className='icon' />
          <div className='destination'>{destination}</div>
          <div className='wilaya-commune'>
            {wilaya}, {commune}
          </div>
          <div className='description'>{description}</div>
        </div>
      </div>
      <div className='destination-image'>
        <img src={photo} alt='' className='photo' />
        <img src={orange} alt='' className='orange' />
      </div>
    </div>
  );
};