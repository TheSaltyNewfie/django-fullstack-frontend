import MainNavbar from "./Navbar";
import React from "react";
import {Container, Card, Button, Row, Col
} from "react-bootstrap";
import { useEffect, useState } from "react";
import config from "../config/config";
import axios from "axios";

export default function Events() {

    const [events, setEvents] = useState([])
    const [randomEvent, setRandomEvent] = useState(null)

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
        <MainNavbar/>
      <div className="header">
        <h1>Events</h1>
      </div>
      <Container className="mt-5">
        {randomEvent && (
      <Card className="p-5">
        <Card.Body>
          <Card.Title as="h1" className="display-4">Events</Card.Title>
          <Card.Text className="lead">
            Featured Event: {randomEvent.name}
          </Card.Text>
          <hr className="my-4" />
          <Card.Text>
            {randomEvent.artists.name}
          </Card.Text>
          <Button variant="primary" size="lg" href="#" role="button">Learn more</Button>
        </Card.Body>
      </Card>
      )}
    </Container>
    <Container className="mt-4">
        <Row>
          {events.map((event) => (
            <Col key={event.id} sm={12} md={6} lg={4}>
              <Card className="m-2" style={{ width: '100%' }}>
                <Row nogutters="true">
                  <Col xs="auto">
                    <Card.Img src="https://via.placeholder.com/150" style={{ height: '100%', margin: '1px' }}/>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{event.name}</Card.Title>
                      <Card.Text>Venue: {event.venue.name}</Card.Text>
                      <Card.Text>Artists: {event.artists.name}</Card.Text>
                      <Card.Text>Price of Entry: {event.entry_fee}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       </>
    );
  }