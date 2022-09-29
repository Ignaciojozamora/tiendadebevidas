import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../../components/CartWidget/CartWidget";


function NavScroll() {
    return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">Tienda de Bevidas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            >
            <Nav.Link href="#action1">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Cerveza</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Energizante</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Fernet</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Gaseosa</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Gin</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Vodka</NavDropdown.Item>
            
            </NavDropdown>
            <CartWidget/>
        </Nav>
        </Navbar.Collapse>
        
    </Container>

    </Navbar>
);
}

export default NavScroll;
