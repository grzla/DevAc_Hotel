// This is a component which receives rooms and hotelInfo props and returns JSX that displays the hotel name and a table of rooms. Each row in the table displays the room number, type, price, and a BookButton component that allows the user to book the room. The BookButton component receives the room and hotel name as props and displays a button that alerts the user that they have booked a room at the hotel.

import React, { useState } from "react";
import BookButton from "../components/BookButton";

const Hotel = ({ rooms, hotelInfo }) => {

    const [selectedDays, setSelectedDays] = useState(Array(rooms.length).fill(1));

    const handleSelectChange = (index, event) => {
        const newSelectedDays = [...selectedDays];
        newSelectedDays[index] = Number(event.target.value);
        setSelectedDays(newSelectedDays);
    };

    return (
        <div>
            <h1>{hotelInfo.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Room #</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.type}</td>
                            <td>${room.price}</td>
                            <td>
                                <select value={selectedDays[index]} onChange={(event) => handleSelectChange(index, event)}>
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={i+1}>{i+1}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <BookButton 
                                room={room}
                                 hotelName={hotelInfo.name}
                                 days={selectedDays[index]}
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