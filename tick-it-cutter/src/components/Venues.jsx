import MainNavbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import axios from "axios";
import config from "../config/config";
import { useState, useEffect } from "react";
import './Event-Venue.css';
import jay from '../assets/jay-z.jpg'


export default function Venues() {

    const [venues, setVenues] = useState([])

useEffect(() => {

const getData = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/venues/`)
        console.log(response.data)
        setVenues(response.data)
    } catch (error) {
        console.log(error)
    }
}
getData()
}, [])

    return (
        <>
            <MainNavbar />
            <div className="filter">
                <Stack gap={3}>
                    <div className="p-2" id="filter1">
                        <h1 style={{ color: 'black', textAlign: 'center' }}>Venues</h1>
                    </div>
                    <div className="p-2" id="filter2">
                        <Navbar className="d-flex justify-content-center align-items-center">
                            <Form>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className="venue-search"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Navbar>
                    </div>
                    <div className="p-2" id="filter3">
                        <div className="d-flex justify-content-between">
                            <Button variant="primary">Venues</Button>{' '}
                            <Button variant="primary">Venues</Button>{' '}
                            <Button variant="primary">Venues</Button>{' '}
                            <Button variant="primary">Venues</Button>{' '}
                            <Button variant="primary">Venues</Button>{' '}
                        </div>
                    </div>
                </Stack>
            </div>
            <div className="card-container d-flex flex-wrap justify-content-center">
                    {venues.map((venue) => (
                        <Card key={venue.name} className="m-2" style={{ width: '100%' }}>
                            <Card.Img variant="top" src={jay} className=".card-image"/>
                            <Card.Body>
                            <Card.Title className="card-title">Venue: {venue.name}</Card.Title>
                            <Card.Text className="card-text">Location: {venue.location}</Card.Text>
                            <Card.Text className="card-text"> Description: {venue.description}</Card.Text>
                            <Card.Text className="card-text">Indoors: {venue.isIndoors.toString()}
                            </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}    
            </div>
        </>
    );
}

