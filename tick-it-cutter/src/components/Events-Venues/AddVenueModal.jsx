import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Modal, Form } from 'react-bootstrap'
import axios from 'axios'

export default function AddVenueModal() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [isIndoors, setIsIndoors] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleAddVenue = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8000/venues/', {
                name: name,
                location: location,
                description: description,
                isIndoors: isIndoors
            })

            console.log(response.data)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Venue
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Venue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddVenue}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicIsIndoors">
                            <Form.Check
                                type="checkbox"
                                label="Indoors"
                                checked={isIndoors}
                                onChange={(e) => setIsIndoors(e.target.checked)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Venue
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}