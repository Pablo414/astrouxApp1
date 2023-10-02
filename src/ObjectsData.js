import React from "react";
import './tables.css'

const ObjectsData = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
          <th>object_id</th>
          <th>norad_id</th>
          <th>name</th>
          </tr>
        </thead>
        <tbody>
        
                <tr>
                  <td>{props.object.object_id}</td>
                  <td>{props.object.norad_id}</td>
                  <td>{props.object.name}</td>
                </tr>
            
        </tbody>
      </table>
    </div>
  );
};

export default ObjectsData;
