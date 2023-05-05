import '../styling/SearchBar.css';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const SearchBar = () => {
  const { search, setSearch, mode, setMode } = useContext(SearchContext);
  const [show, setShow] = useState(false);
  const [information, setInformation] = useState(false);
  const handleMode = () => {
    if (mode == 'destinations') setMode('profiles');
    if (mode == 'profiles') setMode('destinations');
  };

  return (
    <div className='no'>
      <div className='SearchBar'>
        <div className='left'>
          <div className='left-plus'>
            <div>
              <div className='mode-container'>
                <div className='mode'>mode</div>
                {!show ? (
                  <MdOutlineExpandMore
                    className='expand'
                    onClick={() => setShow(true)}
                  />
                ) : (
                  <MdOutlineExpandLess
                    className='expand'
                    onClick={() => setShow(false)}
                  />
                )}
              </div>

              {show && (
                <div className='mode-box-container'>
                  <div
                    className={`mode-box ${
                      mode == 'destinations' ? 'orange-selected' : ''
                    }`}
                    onClick={mode == 'profiles' ? handleMode : () => {}}
                  >
                    destinations
                  </div>
                  <div
                    className={`mode-box ${
                      mode == 'profiles' ? 'orange-selected' : ''
                    }`}
                    onClick={mode == 'destinations' ? handleMode : () => {}}
                  >
                    profiles
                  </div>
                </div>
              )}
            </div>
          </div>

          <BiSearch className='search-logo' />
        </div>
        <div className='middle'>
          <div className='input'>
            <input
              type='text'
              placeholder=''
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='right'>
          <div className='info-container'>
            <HiOutlineInformationCircle
              className='info'
              onClick={() => {
                setInformation(!information);
              }}
            />
          </div>
          {information && (
            <div className='more-information'>
              Search by wilaya, commune or the exact place name ... Assikel is
              here to help you to discover your country
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
