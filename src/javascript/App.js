import { Header } from './Header';
import { SearchBar } from './SearchBar';
// import { CardsList } from './CardsList';
import { ProfileCardsList } from './ProfileCardsList';
import { Footer } from './Footer';
import './App.css';

// import { FaFacebookF } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { IoMdHome } from 'react-icons/fa';
// import { MdMail } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { HiInformationCircle } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { GrLinkedinOption } from 'react-icons/fa';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>
        <SearchBar />
        <ProfileCardsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;