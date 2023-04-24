import '../styling/SignUp.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineExpandMore } from 'react-icons/md';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SignUp = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='sign-up'>
      <div className='container'>
        <div className='todo'>Create a new account</div>
        <div className='new-user-information'>
          <div className='left-side'>
            <div>
              <div className='to-enter'>User Name :</div>
              <input type='text' placeholder='ex : Mohamed' />
            </div>
            <div>
              <div className='to-enter'>Email :</div>
              <input type='text' placeholder='ex : mohamed@gmail.com' />
            </div>
          </div>
          <div className='right-side'>
            <div>
              <div className='to-enter'>Town :</div>

              <input type='text' placeholder='Choose where you live' />
            </div>

            <div>
              <div className='to-enter'>Date of birth :</div>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div className='bottom'>
          <button className='create'>Create</button>
          <div>I already have an account</div>
        </div>
      </div>
    </div>
  );
};
