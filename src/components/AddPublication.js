import React, { useState, useContext, useEffect } from 'react';
import { EndPointContext } from '../context/EndPointContext';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import '../styling/add-publication.css';
export const AddPublication = () => {
  const { token, User } = useContext(AuthContext);
  const { endpoint } = useContext(EndPointContext);
  const [description, setDescription] = useState(
    'enter a desctiption for your publication'
  );
  const [search, setSearch] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [showDestinations, setShowDestinations] = useState(false);
  const [chosedDestination, setChosedDestination] = useState(null);
  const [pic, setPic] = useState(null);
  const [nav, setNav] = useState(false);
  const handleChooseDestination = (name, id) => {
    setSearch(name);
    setChosedDestination(id);
    setShowDestinations(false);
    setDestinations([]);
  };
  const getDestinations = async () => {
    const response = await fetch(
      `${endpoint}/destinations/${
        search ? `?search=${search}&simple=true` : ''
      }`
    );
    const data = await response.json();
    setDestinations(data);
  };
  const handleSearch = (e) => {
    setShowDestinations(true);
    setSearch(e.target.value);
  };
  useEffect(() => {
    getDestinations();
  }, [search]);
  const handlePublish = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('description', description);
    form.append('destination_id', chosedDestination);
    form.append('user_id', User.id);
    form.append(
      'publication_pic',
      pic,
      `${User.id}-${chosedDestination}-${description.substring(0, 3)}-pic.${
        pic.type.split('/')[1]
      }`
    );
    try {
      const response = await axios({
        method: 'POST',
        url: `${endpoint}/add-publication/`,
        data: form,
      });
      setNav(true);
    } catch (err) {
      console.log(err);
      return;
    }
  };
  console.log(showDestinations);
  return (
    <form className='add-publication' onSubmit={handlePublish}>
      <h1>publish something</h1>

      <textarea
        value={description}
        onFocus={() => setDescription('')}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <div className='destination-input'>
        <input
          type='text'
          value={search}
          onChange={handleSearch}
          placeholder='link it with a destination'
          required
          className='link-with-a-destination'
        />
        {showDestinations && search && (
          <div className='destinations-container'>
            {destinations.map((destination) => {
              return (
                <div
                  className={`destination ${
                    showDestinations ? '' : 'hide-destination'
                  }`}
                  onClick={() =>
                    handleChooseDestination(destination.name, destination.id)
                  }
                >
                  <div>{destination.name}</div>
                  <div>
                    {destination.commune} - {destination.wilaya}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className='select-photo-container'>
        {pic ? (
          <img src={URL.createObjectURL(pic)} className='image-preview' />
        ) : (
          <p>No selected photo yet</p>
        )}
        <input
          type='file'
          onChange={(e) => setPic(e.target.files[0])}
          required
        />
      </div>
      <button className='publish-button'>publish</button>
      {!token && <Navigate replace to='/results/' />}
      {nav && <Navigate replace to={`/publications/${chosedDestination}`} />}
    </form>
  );
};
