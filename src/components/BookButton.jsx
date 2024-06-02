import React from "react";

const BookButton = ({ room, hotelName }) => {
 
    const bookRoom = () => {  
        alert(`You have booked a ${room.type} at ${hotelName} for $${room.price}.`)
    };

    return (
        <div>
        <button onClick={bookRoom}>Book {room.type} at {hotelName}</button>
        </div>
    );
}

export default BookButton;