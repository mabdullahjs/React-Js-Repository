import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Navbars() {
    const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Shaheer Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('about')}>About</Nav.Link>
            <Nav.Link onClick={()=>navigate('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;