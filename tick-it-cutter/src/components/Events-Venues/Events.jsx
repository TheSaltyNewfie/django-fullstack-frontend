import MainNavbar from '../Navbar'
import React from 'react'
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import config from '../../config/config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Events() {
    const [events, setEvents] = useState([])
    const [randomEvent, setRandomEvent] = useState(null)
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

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const handleNavigateCart = () => navigate('/myorders/')

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/events/`)
                console.log(response.data)
                setEvents(response.data)

                const randomIndex = Math.floor(Math.random() * response.data.length)
                setRandomEvent(response.data[randomIndex])
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <>
            <MainNavbar />
            <Container className="mt-5 featured-event">
                {randomEvent && (
                    <Card className="p-5 featured-card">
                        <Card.Body>
                            <Card.Title as="h1" className="display-4 featured-title">
                                Events
                            </Card.Title>
                            <Card.Text className="lead featured-sub-title">
                                Featured Event: {randomEvent.name}
                            </Card.Text>
                            <hr className="my-4 featured-text" />
                            <Card.Text className="featured-artist">
                                {randomEvent.artists.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Container>
            <Container className="mt-4">
                <Row>
                    {events.map((event, index) => (
                        <div className="event-card full-width-card" key={index}>
                            <Card className="m-2 inner-card" style={{ width: '100%' }}>
                                <Row nogutters="true">
                                    <Col>
                                        <Card.Body>
                                            <Card.Title className="event-title">
                                                {event.name}
                                            </Card.Title>
                                            <Card.Text className="event-text">
                                                Venue: {event.venue.name}
                                            </Card.Text>
                                            <Card.Text className="event-text">
                                                Artists: {event.artists.name}
                                            </Card.Text>
                                            <Card.Text className="event-text">
                                                Price of Entry: ${event.entry_fee}
                                            </Card.Text>
                                            <Button onClick={() => addToCart(event.name, event.entry_fee, event.venue.name)}>
                                                Add to cart
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    ))}
                </Row>
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
    )
}

