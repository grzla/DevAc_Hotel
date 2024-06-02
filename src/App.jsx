// import { useState } from 'react'
import React from 'react';
import { rooms } from './components/Rooms.jsx';
import { hotelInfo } from './components/HotelInfo.jsx';
// import './components/HotelInfo.jsx';
import Hotel from './views/Hotel.jsx';
// import './App.css';

// import Hotel from './views/hotel';

const App = () => {
  return (
      <div>
        <Hotel rooms={rooms} hotelInfo={hotelInfo} />
      </div>
  );
}

export default App; 