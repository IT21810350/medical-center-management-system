// import { useEffect, useState } from "react";
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

// function Rooms() {
//     const [rooms, setRooms] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:4000/room/')
//             .then(rooms => setRooms(rooms.data))
//             .catch(err => console.log(err))
//     }, []) 
    
//     return(
//         <div>
//             {(rooms.map(room => {
//                 return(
//                     <h1>{room.name}</h1>
//                 )
//             }))}
//         </div>
//     );
// }

// export default Rooms;

// const [rooms, setRooms] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:4000/room/')
//             .then(rooms => setRooms(rooms.data))
//             .catch(err => console.log(err))
//     }, [])

//     function deleteRoom(id) {
//         axios.delete('http://localhost:4000/room/'+id)
//             .then(room => { console.log(room.data)});

//         const updatedResults = rooms.filter((room) => room._id !== id);
//         setRooms(updatedResults);
//     }

//     return(
//         <div>
//             <Navbar />
//         <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
//             <div className="w-50">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Room Number</th>
//                         <th>Status</th>
//                         <th>Room Type</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         rooms.map(room => {
//                             return(
//                                 <tr>
//                                     <td>{room.name}</td>
//                                     <td>{room.description}</td>
//                                     <td>{room.type}</td>
//                                     <td> <Button onClick={() => deleteRoom(room._id)}>Delete Room</Button>   | <Link to={"/editRoom/"}><Button>Update Room</Button></Link></td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//             <a class="btn btn-primary float-end" href="/addRoom" role="button">Add Room</a>
//             </div>
//         </div>
//         </div>
//     );