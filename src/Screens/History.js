import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function History({info, handleGetHistory}) {
  // useEffect(() => {
  //   handleGetHistory();
  // }, []);
  return (
    <div style={{marginTop: 50, zIndex: 10000}}>
      <div className="container">
        <h1 className="d-flex justify-content-center mb-2">Ride History</h1>
        <div className="border-bottom border-danger border-3 mb-3"></div>
        {info.map((item, index) => (
          <div className="shadow p-3 mb-5 bg-body rounded w-85 p-3" key={index}>
            <div className="card-header">Travelled on - {item.date}</div>
            <div className="card-body">
              <table className="table">
                <tr>
                  <th>Start point </th>
                  <th>Destination point</th>
                  <th>Duration</th>
                  <th>Fare</th>
                </tr>
                <tr>
                  <td>{item.startLocation}</td>
                  <td>{item.endLocation}</td>
                  <td>{item.duration}</td>
                  <td>{item.price}</td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
