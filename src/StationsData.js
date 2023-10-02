import React from "react";
import './tables.css'

const StationsData = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
          <th>station_id</th>
          <th>lattitude</th>
          <th>longitude</th>
          <th>altitude</th>
          </tr>
        </thead>
        <tbody>
        
                <tr>
                  <td>{props.station.station_id}</td>
                  <td>{props.station.location.lattitude}</td>
                  <td>{props.station.location.longitude}</td>
                  <td>{props.station.location.altitude}</td>
                </tr>
            
        </tbody>
      </table>
    </div>
  );
};

export default StationsData;
