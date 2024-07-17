import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function MainNavbar() {
let navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="/">Tick-iT Cutter</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/'} href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Venues</Nav.Link>
            <Nav.Link href="#action3">Events</Nav.Link>
            <Nav.Link as={Link} to={"/myorders"} href="#action4">My Orders</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar;