import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import Button from 'react-bootstrap/Button';
import Room1 from '../../assets/img/resource-Manager/orchidSuit.jpg'
// import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
// import axios from 'axios';  

const roomTypes = [
  {
      "_id": "650ed650284a84e31f8ec882",
      "roomType": "Premium Room",
      "description": "Designed with ample space for you and your loved ones, the 480sq ft Premium Room provides the facilities you need to make your visit as comfortable and relaxed as possible. The room is fully air conditioned with an attached toilet, individual TV and phone line. A unique facet of this suite is that there is a private corridor with seating facility that also has a separate WC. Inside the suite, a separate attendant’s area is furnished with a divan bed and a refrigerator.",
      "createdAt": "2023-09-23T12:13:04.275Z",
      "updatedAt": "2023-09-23T12:13:04.275Z",
      "__v": 0
  },
  {
      "_id": "650ed6c8284a84e31f8ec885",
      "roomType": "Royal Suite",
      "description": "As the name suggests, the Royal Suite comes with the luxuries of royalty. It is fully served with air-conditioning, television and phone lines, an attached toilet and refrigerator. The patients also have the additional benefit of a visitor’s room with a sofa and attached toilet facilities for visitors.",
      "createdAt": "2023-09-23T12:15:04.966Z",
      "updatedAt": "2023-09-23T12:15:04.966Z",
      "__v": 0
  },
  {
      "_id": "650ed6de284a84e31f8ec887",
      "roomType": "Orchid Suite",
      "description": "If you are staying at our Orchid Suite, you might just think you are on holiday. This Suite has all the amenities of a hotel, with space and facilities for the patient and their visitors. Fully served with air conditioning, television and phone, attached toilet and refrigerator, the Orchid Suite also has an adjoining visitor’s room with a sofa. Royal Suite",
      "createdAt": "2023-09-23T12:15:26.634Z",
      "updatedAt": "2023-09-23T12:15:26.634Z",
      "__v": 0
  }
]

function RoomTypesPage() {
  return(
    <div>
    <Navbar />
    <Grid container spacing={2} sx={{ marginTop: '10px'}}>
      {roomTypes.map((data) => (
        <Grid sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Room1} />
          <Card.Body>
            <Card.Title>{data.roomType}</Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="primary">View Room</Button>
          </Card.Body>
        </Card>
        </Grid>
      ))}
    </Grid>  
    </div>
  );
}

export default RoomTypesPage;

// const RoomType = props => {
//   <Grid sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={Room1} />
//       <Card.Body>
//         <Card.Title>{props.roomtype.roomType}</Card.Title>
//         <Card.Text>
//           {props.roomtype.description}
//         </Card.Text>
//       </Card.Body>
//       <Card.Body>
//         <Button variant="primary">View Room</Button>
//       </Card.Body>
//     </Card>
//   </Grid>
// }

// export default class RoomTypes extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {roomTypes: []};
//   }

//   componentDidMount() {
//     axios.get('http://localhost:4000/room-type/')
//       .then(response => {
//         this.setState({roomTypes: response.data})
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   roomList() {
//     return this.state.roomTypes.map(currentroomtype => {
//       return <RoomType roomtype={currentroomtype} key={currentroomtype._id} />;
//     })
//   }

//   render() {
//     return (
//       <div>
//       <Navbar />
      
//       <Grid container spacing={2} sx={{ marginTop: '10px'}}>

//         { this.roomList() }

//       </Grid>  
//       </div>
//     );
//   }
// }


//  2nd attempt to make the backend

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
    // <div>
    // <Navbar />
    // <Grid container spacing={2} sx={{ marginTop: '10px'}}>
    //   {data.map((i, index) => {
    //     return(
    //       <Grid key={index} sx={{ padding: '10px', marginLeft: '50px', marginTop: '20px' }}>
    //         <Card style={{ width: '18rem' }}>
    //           <Card.Img variant="top" src={Room1} />
    //           <Card.Body>
    //             <Card.Title>{i.RoomType}</Card.Title>
    //             <Card.Text>
    //               {i.description}
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Body>
    //             <Button variant="primary">View Room</Button>
    //           </Card.Body>
    //         </Card>
    //       </Grid>
    //     )
    //   })}
    // </Grid>  
    // </div>
//   );
// }