import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import Button from 'react-bootstrap/Button';
import Room1 from '../../assets/img/resource-Manager/orchidSuit.jpg'
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';  

const RoomType = props => {
  <Grid sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Room1} />
      <Card.Body>
        <Card.Title>{props.roomtype.roomType}</Card.Title>
        <Card.Text>
          {props.roomtype.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">View Room</Button>
      </Card.Body>
    </Card>
  </Grid>
}

export default class RoomTypes extends Component {

  constructor(props) {
    super(props);

    this.state = {roomTypes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/room-type/')
      .then(response => {
        this.setState({roomTypes: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  roomList() {
    return this.state.roomTypes.map(currentroomtype => {
      return <RoomType roomtype={currentroomtype} key={currentroomtype._id} />;
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      
      <Grid container spacing={2} sx={{ marginTop: '10px'}}>

        { this.roomList() }

      </Grid>  
      </div>
    );
  }
}

// export default function RoomType({ roomTypeData }) {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:4000/room-type/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "roomTypeData");
//         setData(data.data || []); // Ensure data.data is an array or default to empty array
//         setLoading(false); // Set loading to false once data is loaded
//       })
//       .catch((error) => {
//         console.error('Error fetching room type data:', error);
//         setLoading(false); // Set loading to false in case of an error
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!loading && data.length === 0) {
//     return <div>No room type data available.</div>;
//   }

//   return (
//     <div>
//     <Navbar />
//     <Grid container spacing={2} sx={{ marginTop: '10px'}}>
//       {data.map((i, index) => {
//         return(
//           <Grid key={index} sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={Room1} />
//               <Card.Body>
//                 <Card.Title>{i.RoomType}</Card.Title>
//                 <Card.Text>
//                   {i.description}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Body>
//                 <Button variant="primary">View Room</Button>
//               </Card.Body>
//             </Card>
//           </Grid>
//         )
//       })}
//     </Grid>  
//     </div>
//   );
// }