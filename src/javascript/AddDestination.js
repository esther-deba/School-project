import { useState } from 'react';
import '../styling/AddDestination.css';

export const AddDestination = () => {
  const [add, setAdd] = useState();
  const handleAdd = () => {};
  return (
    <div className='add-destination'>
      <h1>No added destination related to ???</h1>
      <h2>
        To create the destination you have to enter the information in the form
      </h2>
      <button onClick={() => handleAdd}>+ new destination</button>
    </div>
  );
};
