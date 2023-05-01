import '../styling/AddDestinationForm.css';
import { MdOutlineExpandMore } from 'react-icons/md';

export const AddDestinationForm = () => {
  return (
    <div className='add-destination-form'>
      <div className='add-destination-top'>
        <div className='place-name-container'>
          <p className='place-name'>Place name : </p>
          <input type='text' />
        </div>
        <div className='wilaya-commune-container'>
          <button className='add-destination-wilaya'>
            Wilaya <MdOutlineExpandMore className='extend-choose' />
          </button>
          <button className='add-destination-commune'>
            Commune <MdOutlineExpandMore className='extend-choose' />
          </button>
        </div>
      </div>
      <div className='add-description'>
        <div className='description-container'>
          <p>Description :</p>
          <textarea cols='30' rows='10'></textarea>
        </div>

        <div className='select-photo-container'>
          <p>No selected photo yet</p>
          <button>Select photo</button>
        </div>
      </div>
      <button className='done'>Done</button>
    </div>
  );
};
