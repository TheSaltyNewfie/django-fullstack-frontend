import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Event-Venue.css';

const VenueDetails = () => {
    const { id } = useParams();
    const [venue, setVenue] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getVenueData = async () => {
            try {
                const venueResponse = await axios.get(`http://localhost:8000/venues/${id}/`);
                setVenue(venueResponse.data);

                const eventsResponse = await axios.get(`http://localhost:8000/venues/${id}/events/`);
                setEvents(eventsResponse.data);
            } catch (error) {
                console.error("Error fetching venue data", error);
            }
        };

        getVenueData();
    }, [id]);

    if (!venue) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MainNavbar />
            <Container className="venue-d">
                <h1 className="venue-header">{venue.name}</h1>
                <Card className="venue-dcard">
                    <Card.Body>
                        <Card.Title>Location: {venue.location}</Card.Title>
                        <Card.Text>{venue.isIndoors ? 'Indoors' : 'Outdoors'}</Card.Text>
                        <Card.Text>{venue.description}</Card.Text>
                        </Card.Body>
                        {events.map((event) => (
                        <Card key={event.id} className="event-dcard">
                            <Card.Body>      
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>Entry Fee: ${event.entry_fee}</Card.Text>
                                <Card.Text>Artists: {event.artists.name}</Card.Text>
                                </Card.Body>                           
                        </Card>

                    ))}
                    
                </Card>
                
            </Container>
        </>
    );
};

export default VenueDetails;

