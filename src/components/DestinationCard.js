import '../styling/DestinationCard.css';
import img from '../images/destination.png';
import { BiBookmarkAlt } from 'react-icons/bi';
import orange from '../images/orange.png';
import pic from '../images/picture.png'
import { Header } from './Header';
import { Footer } from './Footer';
export const DestinationCard = ({ destination }) => {
    return (
        destination ?
            <>
                <Header />
                <div className='destination-details'>
                    <div className='destination-information'>
                        <BiBookmarkAlt className='save-icon' />
                        <h1>{destination.name}</h1>
                        <h2>{destination.wilaya} , {destination.commune}</h2>
                        <p>
                            {destination.description}
                        </p>
                    </div>
                    <div className='img-container'>
                        <img src={destination.pic} />
                    </div>
                    <div className='mobile'>
                        <div className='upper-part'>
                            <h1>{destination.name}</h1>
                            <h2>{destination.wilaya} , {destination.commune}</h2>
                            <div className="mobile-img-container">
                                <img src={destination.pic} />
                            </div>
                        </div>
                        <p>
                            {destination.description}
                        </p>
                    </div>
                </div>
            </>
            :
            ""
    );
};