import MainNavbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '../App.css';

export default function Venues() {
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
                <Card className="m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
