import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import Button from 'react-bootstrap/Button';
import Room1 from '../../assets/img/resource-Manager/orchidSuit.jpg'
import Grid from '@mui/material/Grid';
import axios from 'axios';  
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function RoomTypesPage() {

  const [roomTypes, setRoomTypes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/room-type/')
            .then(roomTypes => setRoomTypes(roomTypes.data))
            .catch(err => console.log(err))
    }, [])

  return(
    <div>
    <Navbar />

    <h1>Room Types</h1>
    <Grid container spacing={2} sx={{ marginTop: '10px'}}>
      {
        roomTypes.map(roomType => {
          return(
            <Grid sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Room1} />
              <Card.Body>
                <Card.Title>{roomType.roomType}</Card.Title>
                <Card.Text>
                  {roomType.description}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Link to='/room'><Button variant="primary">View Room</Button></Link>
              </Card.Body>
            </Card>
            </Grid>
          )
        })
      }
    </Grid>  
    </div>
  );
}

export default RoomTypesPage;