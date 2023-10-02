
import './App.css';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import Menu from './Menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StationsData from './StationsData';
import Bookings from './Bookings';
import ObjectsData from './ObjectsData';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NTMxNzgyOX0.wtlBmbogvW-hxleVQ3dvxRB5rapPq212Q32ahnnAOho';
const apiUrlObjects = 'http://128.140.7.20:3001/api/objects';
const apiUrlStations = 'http://128.140.7.20:3001/api/stations';
const apiUrlBookings = 'http://128.140.7.20:3001/api/bookings';

const authToken = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
}

function App() {
  const [objectsData, setObjectsData] = useState([]);
  const [stationsData, setStationsData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

//Objects Data

useEffect(() => {
  async function fetchData() {
    await fetch(apiUrlObjects, authToken)
    .then(data => data.json())
    .then(data=> setObjectsData(data))
  }
  fetchData()
}, []);
console.log(objectsData)

const objData = objectsData.map(object => {
  return (  
  <ObjectsData key={object} object={object} />
  )
})

//StationsData

useEffect(() => {
  async function fetchData() {
    await fetch(apiUrlStations, authToken)
    .then(data => data.json())
    .then(data=> setStationsData(data))
  }
  fetchData()
}, []);
console.log(stationsData)

const statData = stationsData.map(station => {
  return (  
  <StationsData key={station} station={station} />
  )
})



//Bookings Data

useEffect(() => {
  async function fetchData() {
    await fetch(apiUrlBookings, authToken)
    .then(data => data.json())
    .then(data=> setBookingData(data))
  }
  fetchData()
}, []);

const bookData = bookingData.map(booking => {
  return (  
  <Bookings key={booking.booking_id} booking={booking} />
  )
})



  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
       
          <Routes>
             <Route path="/" element={<Menu />} />
             <Route path="/satelite-data" element={objData} />
             <Route path="/ground-station" element={statData} /> 
             <Route path="/bookings" element={bookData} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
