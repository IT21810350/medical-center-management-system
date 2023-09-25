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

    // const handleDeleteResult = (_id) => {
    //     const updatedResults = rooms.filter((result) => result._id !== _id);
    //     setLabTestResults(updatedResults);
    // };

    // deleteRoom(id) {
    //     axios.delete('http://localhost:4000/room/'+id)
    //         .then(response => { console.log(response.data)});

    //     this.setState({
    //         exercises: this.state.exercises.filter(el => el._id !== id)
    //     })
    // }

    function deleteRoom(id) {
        axios.delete('http://localhost:4000/room/'+id)
            .then(room => { console.log(room.data)});

        this.setState({
            rooms: this.state.rooms.filter(room => room._id !== id)
        })
    }

    // deleteRoom((id) => {
    //     axios.delete('http://localhost:4000/room/'+id)
    //         .then(room => { console.log(room.data)});

    //     this.setState({
    //         rooms: this.state.rooms.filter(room => room._id !== id)
    //     })
    // })

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
                                    <td> <Button onClick={() => deleteRoom(room._id)}>Delete Room</Button>   | <Link to={"/editRoom/"}><Button>Update Room</Button></Link></td>
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