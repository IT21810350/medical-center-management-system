import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/room/')
            .then(rooms => setRooms(rooms.data))
            .catch(err => console.log(err))
    }, [])

    const handleDeleteResult = (_id) => {
        const updatedResults = rooms.filter((result) => result._id !== _id);
        // setLabTestResults(updatedResults);
    };

    return(
        <div>
            <Navbar />
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
            <table className="table">
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Status</th>
                        <th>Room Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map(room => {
                            return(
                                <tr>
                                    <td>{room.roomNumber}</td>
                                    <td>{room.status}</td>
                                    <td>{room.roomType}</td>
                                    <td> <Button onClick={() => handleDeleteResult(room._id)}>Delete Room</Button>   | <Link to={"/editRoom/" + room._id}><Button>Update Room</Button></Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default App;