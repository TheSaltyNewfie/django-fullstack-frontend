import MainNavbar from './Navbar'
import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import config from '../config/config'
import axios from 'axios'

export default function Events() {
    const [events, setEvents] = useState([])
    const [randomEvent, setRandomEvent] = useState(null)

    const addToCart = () => {}

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/events/`
                )
                console.log(response.data)
                setEvents(response.data)

                const randomIndex = Math.floor(
                    Math.random() * response.data.length
                )
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
                            <Card.Title
                                as="h1"
                                className="display-4 featured-title"
                            >
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
                    {events.map((event) => (
                        <div className="event-card full-width-card">
                            <Card
                                className="m-2 inner-card"
                                style={{ width: '100%' }}
                            >
                                <Row noGutters="true">
                                    <Col xs="auto">
                                        <Card.Img
                                            className="event-image center-image"
                                            src="https://via.placeholder.com/150"
                                        />
                                    </Col>
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
                                                Price of Entry:{' '}
                                                {event.entry_fee}
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    ))}
                </Row>
            </Container>
        </>
    )
}
