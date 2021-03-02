import React, { useState } from 'react';

function Form({ submit }) {
  const [details, setDetails] = useState({
    Location: '',
    Lat: '',
    Long: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(details);
    e.target.reset();
  };

  return (
    <div className='form-details'>
      <form onSubmit={handleSubmit}>
        <div className='location-name'>
          <label htmlFor='Location'>Location Name</label>
          <input
            type='text'
            id='Location'
            placeholder='Location'
            onChange={handleChange}
            required
          />
        </div>
        <div className='lattitude'>
          <label htmlFor='Lat'>Enter Lattitude</label>
          <input
            type='text'
            id='Lat'
            placeholder='Lat'
            onChange={handleChange}
            required
          />
        </div>
        <div className='longitude'>
          <label htmlFor='Long'>Enter Longitude</label>
          <input
            type='text'
            id='Long'
            placeholder='Lang'
            onChange={handleChange}
            required
          />
        </div>
        <div className='submit'>
          <button id='submit' type='submit'>
            Submit
          </button>
          {/* {button ? (
            <button type='submit' id='submit'>
              Submit
            </button>
          ) : (
            <button type='submit' id='add'>
              Add
            </button>
          )} */}
        </div>
      </form>
    </div>
  );
}

export default Form;
