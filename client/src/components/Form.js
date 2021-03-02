import React, { useState, useContext } from 'react';
import { DetailsContext } from '../App';

function Form({ submit, add }) {
  const [details, setDetails] = useState({
    Location: '',
    Lat: '',
    Long: '',
  });
  const { showRoute } = useContext(DetailsContext);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(details);
    showRoute(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    submit(details);
    setDetails({
      Location: '',
      Lat: '',
      Long: '',
    });
  };

  return (
    <div className='form-details'>
      <form>
        <div className='location-name'>
          <label htmlFor='Location'>Location Name</label>
          <input
            type='text'
            id='Location'
            value={details.Location}
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
            value={details.Lat}
            required
          />
        </div>
        <div className='longitude'>
          <label htmlFor='Long'>Enter Longitude</label>
          <input
            type='text'
            id='Long'
            placeholder='Long'
            value={details.Long}
            onChange={handleChange}
            required
          />
        </div>

        <div className='submit'>
          <button id='submit' type='button' onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className='add'>
          <button id='add' type='submit' onClick={handleAdd}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
