import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Room1 from '../../assets/img/resource-Manager/orchidSuit.jpg'

function KitchenSinkExample() {
  return (
    <div>
        
    <Navbar />

    <div className='container'>
    <Card style={{ width: '18rem', marginTop : '40px'}}>
      <Card.Img variant="top" src={Room1} />
      <Card.Body>
        <Card.Title>Orchid Suid</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">View Room</Button>
      </Card.Body>
    </Card>
    </div>      
    </div>
  );
}

export default KitchenSinkExample;