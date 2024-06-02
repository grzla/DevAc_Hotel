// import { useState } from 'react'
import React from 'react';
import { rooms } from './components/Rooms.jsx';
import { hotelInfo } from './components/HotelInfo.jsx';
import Hotel from './views/Hotel.jsx';


const App = () => {
  return (
      <div>
        <Hotel rooms={rooms} hotelInfo={hotelInfo} />
      </div>
  );
}

export default App;