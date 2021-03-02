import React, { useContext, useEffect, useState } from 'react';
import { DetailsContext } from '../App';

function Table() {
  const input = useContext(DetailsContext);

  const [init, setInit] = useState([
    {
      Location: '1) ------',
      Lat: '------',
      Long: '------',
    },
    {
      Location: '2) ------',
      Lat: '------',
      Long: '------',
    },
    {
      Location: '3) ------',
      Lat: '------',
      Long: '------',
    },
    {
      Location: '4) ------',
      Lat: '------',
      Long: '------',
    },
    {
      Location: '5) ------',
      Lat: '------',
      Long: '------',
    },
  ]);

  useEffect(() => {
    console.log(input);
  });

  return (
    <div>
      <div className='table-header'>ALL CO-ORDINATES</div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th width='67%'>My Co-ordinates</th>
              <th width='20%' style={{ color: '#707070' }}>
                DEFAULT
              </th>
              <th width='20%' style={{ color: '#707070' }}>
                DEFAULT
              </th>
            </tr>
          </thead>
          {input.length === 0 ? (
            <tbody>
              {init.map((inp, index) => (
                <tr key={index}>
                  <td>{inp.Location}</td>
                  <td style={{ padding: '8px', color: '#707070' }}>
                    {inp.Lat}
                  </td>
                  <td style={{ padding: '8px', color: '#707070' }}>
                    {inp.Long}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {input.map((inp, index) => (
                <tr key={index}>
                  <td>
                    {index + 1 + ')' + ' '}
                    {inp.Location}
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#000000' }}>
                    {inp.Lat}
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#000000' }}>
                    {inp.Long}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
          {/* <tbody>
            {input.map((inp, index) => (
              <tr key={index}>
                <td>{inp.Location}</td>
                <td>{inp.Lat}</td>
                <td>{inp.Long}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>

      <div className='route'>
        {input.length > 0 ? (
          <button type='submit' id='route'>
            Show Route
          </button>
        ) : (
          <button type='submit' id='disable' disabled>
            Show Route
          </button>
        )}
      </div>
    </div>
  );
}

// AIzaSyCDS_5PZVgK1diAYzmic3sl4XB4WkKQ0T0

export default Table;
