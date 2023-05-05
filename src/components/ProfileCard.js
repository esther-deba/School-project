import '../styling/ProfileCard.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg'
export const ProfileCard = ({ profile }) => {
  const { username, profile_pic } = profile
  return (
    <div className='profile-card'>
      <div className='personal-information'>
        {profile_pic ?
          <img src={profile_pic} alt='profile image' className='profile-image' />
          :
          <CgProfile className='default-profile-pic' />
        }
        <div className='name'>
          {username ? username.toLowerCase() : '.'}
        </div>
      </div>
      <div className='more'>
        <div>View Profile</div>
        <MdKeyboardArrowRight className='more-icon' />
      </div>
    </div>
  );
};
