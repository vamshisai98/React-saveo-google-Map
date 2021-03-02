import './App.css';
import React, { useState } from 'react';
import Form from '../src/components/Form';
import Table from './components/Table';
import Map from './components/Map';

export const DetailsContext = React.createContext();

function App() {
  const [input, setInput] = useState([]);
  const [pins, setPins] = useState([]);

  const handleSubmit = (data) => {
    setInput([...input, data]);
  };

  const handleAdd = (data) => {
    setPins([...pins, data]);
  };

  const [show, setShow] = useState(false);

  const showRoute = (data) => {
    setShow(data);
  };

  return (
    <div className='app'>
      <DetailsContext.Provider value={{ input, pins, showRoute, show }}>
        <button id='home'>Home</button>
        <div className='content'>
          <Form submit={handleSubmit} add={handleAdd} />
          <div className='content2'>
            <div className='table-content'>
              <Table />
            </div>
            <div className='map-content'>
              <Map />
            </div>
          </div>
        </div>
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
