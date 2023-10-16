import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Bookingscreen({ match }) {

    const [room, setroom] = useState();
    useEffect(async () => {

        try {
            const data = (await axios.post("/room/getroombyid", { roomid: match.params.roomid })).data
        }
        catch (error) {

        }
    })

    return (
        <div>
            <h1>Booking screen</h1>
            <h1>{match.params.roomid}</h1>
        </div>
    );
}

export default Bookingscreen;