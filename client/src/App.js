import './App.css';
import React, { useState } from 'react';
import Form from '../src/components/Form';
import Table from './components/Table';
import Map from './components/Map';

export const DetailsContext = React.createContext();

function App() {
  const [input, setInput] = useState([]);
  const handleSubmit = (data) => {
    setInput([...input, data]);
  };
  return (
    <div className='app'>
      <DetailsContext.Provider value={input}>
        <button id='home'>Home</button>
        <div className='content'>
          <Form submit={handleSubmit} />
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
