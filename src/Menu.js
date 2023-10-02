import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Menu() {
  
  return (
      <div style={{margin: "0 auto", paddingTop: 200, display: 'flex', flexDirection: 'column',  }}>
   
    <Link to="/satelite-data">Satelite Data</Link>
    <Link to="/ground-station">Ground Station</Link>
    <Link to="/bookings">Bookings</Link>
</div>
  )
}

export default Menu
