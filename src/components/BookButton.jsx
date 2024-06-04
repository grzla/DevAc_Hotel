// This is a component that receives room and hotelName props and returns JSX to display a button that allows the user to book a room.

import React from "react";

// passing room and hotelname props to the BookButton component
const BookButton = ({ room, hotelName, days}) => {
 
    const bookRoom = () => {  
        alert(`You have booked a ${room.type} at ${hotelName} for $${room.price * days}.`)
    };

    return (
        <div>
        <button onClick={bookRoom}>Book {room.type} at {hotelName}</button>
        </div>
    );
}

export default BookButton;