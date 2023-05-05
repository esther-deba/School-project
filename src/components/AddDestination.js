import '../styling/addDestination.css';
import { Header } from './Header';
import { useContext, useState } from 'react';
import { EndPointContext } from '../context/EndPointContext';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
export const AddDestination = () => {
  const [nav, setNav] = useState(false);
  const { endpoint } = useContext(EndPointContext);
  const { User, token } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [commune, setCommune] = useState('');
  const [pic, setPic] = useState('');
  const handleCreate = async (e) => {
    await e.preventDefault();
    const form = new FormData();
    form.append('user_id', User.id);
    form.append('name', name);
    form.append('description', description);
    form.append('wilaya', wilaya);
    form.append('commune', commune);
    form.append('pic', pic, `${name}-${wilaya}-pic.${pic.type.split('/')[1]}`);
    try {
      await axios({
        method: 'POST',
        url: `${endpoint}/create-destination/`,
        data: form,
      });
    } catch (err) {
      console.log(err);
      return;
    }
    setNav(true);
  };
  return (
    <form className='add-destination-form' onSubmit={handleCreate}>
      <Header />
      <div className='add-destination-top'>
        <div className='place-name-container'>
          <p className='place-name'>Place name : </p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='wilaya-commune-container'>
          <p>Wilaya :</p>
          <input
            type='text'
            value={wilaya}
            onChange={(e) => setWilaya(e.target.value)}
          />
          <p>Commune :</p>
          <input
            type='text'
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
          />
        </div>
      </div>
      <div className='add-description'>
        <div className='description-container'>
          <p>Description :</p>
          <textarea
            cols='30'
            rows='10'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className='select-photo-container'>
          <p>
            {pic ? (
              <img src={URL.createObjectURL(pic)} className='image-preview' />
            ) : (
              'No selected photo yet'
            )}
          </p>

          <input
            type='file'
            required
            onChange={(e) => setPic(e.target.files[0])}
          />
        </div>
      </div>
      <button
        className='done'
        setNav={() => {
          setNav(true);
        }}
      >
        Done
      </button>
      {!token && <Navigate replace to='/login/' />}
      {nav && <Navigate replace to='/results/' />}
    </form>
  );
};
