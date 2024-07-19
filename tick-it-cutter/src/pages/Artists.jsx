import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardFooter from 'react-bootstrap/CardFooter'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Kendrick from '../assets/Kendrick-Lamar-img.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../config/config'
import Cookies from 'js-cookie'

export default function ArtistPage() {
    const [artists, setArtists] = useState([])
    const navigate = useNavigate()

    const getArtists = async () => {
        const csrftoken = Cookies.get('csrftoken')
        const res = await axios.get(`${config.api_endpoint}/artists/`, {
            headers: {
                'X-CSRFToken': csrftoken
            }
        })

        setArtists(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        getArtists()
    }, [])

    return (
        <>
            <Navbar />

            <div>
                <Form>
                    <Row className='artistSearchContainer'>
                        <Col xs="auto" className='search'>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="artist-search"
                            />
                        </Col>
                        <Col xs="auto" className='submit'>
                            <Button className='submit-btn' type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            <div className='artistCardContainer'>
                {artists.map((key, index) => (
                    <Card
                        className="m-2"
                        style={{ width: '18rem' }}
                        key={index}
                    >
                        <Card.Img variant="top" src={key.picture} />
                        <Card.Body>
                            <Card.Title>{key.name}</Card.Title>
                            <Card.Text>{key.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>View Artist</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </>
    )
}
