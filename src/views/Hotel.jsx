// This is a component which receives rooms and hotelInfo props and returns JSX that displays the hotel name and a table of rooms. Each row in the table displays the room number, type, price, and a BookButton component that allows the user to book the room. The BookButton component receives the room and hotel name as props and displays a button that alerts the user that they have booked a room at the hotel.

import React from "react";
import BookButton from "../components/BookButton";

const Hotel = ({ rooms, hotelInfo }) => {

    return (
        <div>
            <h1>{hotelInfo.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Room #</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.type}</td>
                            <td>{room.price}$</td>
                            <td>
                                <BookButton 
                                room={room}
                                 hotelName={hotelInfo.name}
                                 />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Hotel;