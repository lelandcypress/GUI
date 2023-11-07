import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigate(){
    return(
        <Navbar expand = "lg" className="bg-body-tertiary" class= 'nav-body'>
            <Container>
            <Navbar.Brand>NCRC CHARLESTON</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
                <Nav.Link href='/search'>Search</Nav.Link>
                <Nav.Link href="/dl">Downloads</Nav.Link>
                <Nav.Link href="/dllog">Log</Nav.Link>
            
             </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigate