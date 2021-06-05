import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function History({info}) {
  const getTravel = (item) => {
    let date = new Date(item.date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  };

  return (
    <div style={{marginTop: 50, zIndex: 10000}}>
      <div className="container">
        <h1 className="d-flex justify-content-center mb-2">Ride History</h1>
        <div className="border-bottom border-danger border-3 mb-3"></div>
        {info.map((item, index) => (
          <div className="shadow p-3 mb-5 bg-body rounded w-85 p-3" key={index}>
            <div className="card-header">Travelled on - {getTravel(item)}</div>
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
                  <td>{Number((item.duration * 60).toFixed(2))} min</td>
                  <td>Rs.{item.price}</td>
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
