import '../styling/PublicationContainer.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';

export const PublicationContainer = ({
  destinationImage,
  username,
  usernameImg,
  description,
  date,
}) => {
  return (
    <div className='publication-container'>
      <div className='publication-container-image'>
        <img src={destinationImage} alt='' className='publication-image' />
      </div>
      <div className='publication-container-information'>
        <div className='publication-owner'>
          <div className='img'>
            <img src={usernameImg} alt='' />
          </div>
          <div className='username'>{username}</div>
        </div>
        <div className='publication-container-underlines'></div>
        <div className='publication-container-description'>{description}</div>
        <div className='publication-container-underlines'></div>
        <div className='bottom-of-publication-container'>
          <div>{date}</div>
          <div>
            <BsFillSuitHeartFill />
          </div>
        </div>
      </div>
    </div>
  );
};
