import '../styling/ProfileCard.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const ProfileCard = ({ name, lastName, bio, profileImage }) => {
  return (
    <div className='profile-card'>
      <div className='personal-information'>
        <img src={profileImage} alt='profile image' className='profile-image' />
        <div className='name'>
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}{' '}
          {lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()}
        </div>
      </div>
      <div className='more'>
        <div>View Profile</div>
        <MdKeyboardArrowRight className='more-icon' />
      </div>
    </div>
  );
};
