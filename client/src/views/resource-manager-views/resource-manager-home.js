import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import Room from '../../components/resource-person-component/room';
import { Link } from "react-router-dom";

function Rooms() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/room/')
            .then(rooms => setRooms(rooms.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar />
            <div>
                <div className="row">
                    {rooms.map(room => {
                        return (
                            <Room room={room} />
                        )
                    })}
                    <div className="text-right">
                        <Link to={`/addRoom`}>
                            <button className="btn btn-primary">Add New Room</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;