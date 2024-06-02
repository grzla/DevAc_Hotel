import React from "react";

const BookButton = ({ room, hotelName }) => {
 
    const bookRoom = () => {  
        alert(`You have booked a ${room.type} room at ${hotelInfo.name} for $${room.price}.`)
    };

    return (
        <div>
        <button onClick={bookRoom}>Book {room.type} room at {hotelName}</button>
        </div>
    );
}

export default BookButton;