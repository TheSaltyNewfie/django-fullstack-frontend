import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Event-Venue.css';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const VenueDetails = () => {
    const { id } = useParams();
    const [venue, setVenue] = useState(null);
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    let navigate = useNavigate()
    

    const addToCart = (name, price, venue) => {
        const cart = localStorage.getItem('cart')
        let cartArray = JSON.parse(cart) || []

        cartArray.push({ name: name, price: price, venue: venue })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        handleShow()
    } 

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

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const handleNavigateCart = () => navigate('/myorders/')

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
                        <Card.Text className="venue-dindoor" >{venue.isIndoors ? 'Indoors' : 'Outdoors'}</Card.Text>
                        <Card.Title className="venue-dlocation">Location: {venue.location}</Card.Title>
                        <Card.Text className="venue-ddescription">{venue.description}</Card.Text>
                        </Card.Body>
                        {events.map((event) => (
                        <Card key={event.id} className="event-dcard">
                            <Card.Body>      
                                <Card.Title className="event-dtitle">{event.name}</Card.Title>
                                <Card.Text>Entry Fee: ${event.entry_fee}</Card.Text>
                                <Card.Text>Artists: {event.artists.name}</Card.Text>
                                <Button onClick={() => addToCart(event.name, event.entry_fee, event.venue.name)}>
                                                Add to cart
                                </Button>
                                </Card.Body>
                            
                        </Card>

                    ))}
                    
                </Card>
                
            </Container>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Would you like to go to checkout or continue shopping?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Continue Shopping
                    </Button>
                    <Button variant="primary" onClick={handleNavigateCart}>
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default VenueDetails;

