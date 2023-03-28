import '../styling/SearchBar.css';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineExpandMore } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useState } from 'react';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  return (
    <div className='no'>
      <div className='SearchBar'>
        <div className='left'>
          <div className='left-plus'>
            <div>mode</div>
            <MdOutlineExpandMore className='expand' />
          </div>

          <BiSearch className='search-logo' />
        </div>
        <div className='middle'>
          <div className='input'>
            <input
              type='text'
              placeholder=''
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className='right'>
          <div>
            <AiOutlinePlusCircle className='plus' />
          </div>
          <div>
            <HiOutlineInformationCircle className='info' />
          </div>
        </div>
      </div>
    </div>
  );
};
