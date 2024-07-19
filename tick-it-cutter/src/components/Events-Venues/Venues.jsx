import MainNavbar from "../Navbar";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Event-Venue.css';
import AddVenueModal from "./AddVenueModal";

export default function Venues() {
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/venues/`);
        setVenues(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleVenueClick = (id) => {
    navigate(`/venues/${id}`);
  };

  return (
    <>
      <MainNavbar />
      <Container>
        <h1 className="venue-header">Venues</h1>
      </Container>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {venues.map((venue) => (
          <div
            className="venue-card"
            style={{ width: '30%' }}
            key={venue.name}
            onClick={() => handleVenueClick(venue.id)}
          >
            <Card className="m-2 inner-card" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title className="venue-title">{venue.name}</Card.Title>
                <Card.Text className="venue-text">{venue.isIndoors ? 'Indoors' : 'Outdoors'}</Card.Text>
                <Card.Text className="venue-text">Location: {venue.location}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <AddVenueModal />
    </>
  );
}


