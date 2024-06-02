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