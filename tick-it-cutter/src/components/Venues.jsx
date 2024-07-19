import MainNavbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import config from "../config/config";
import { useState, useEffect } from "react";
import './Event-Venue.css';
import jay from '../assets/jay-z.jpg'
import MadisonSG from '../assets/madison-square-garden.jpg'

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
    
                    <div className="venue-title">
                        <h1>Venues</h1>
                    </div>
            
         
            <div className="card-container d-flex flex-wrap justify-content-center">
                    {venues.map((venue) => (
                        <Card key={venue.name} className="m-2" style={{ width: '20%' }}>
                            {/* <Card.Img variant="top" src={MadisonSG} className=".card-image" /> */}
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

