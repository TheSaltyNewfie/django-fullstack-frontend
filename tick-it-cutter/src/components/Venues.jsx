import MainNavbar from "./Navbar";
import Card from 'react-bootstrap/Card';

export default function Venues() {
    return (
        <>
        <MainNavbar/>
      <div className="header">
        <h1>Venues</h1>
        </div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
       </>
    );
  }