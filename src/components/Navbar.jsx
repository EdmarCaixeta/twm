import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Companhia de Seguros</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Button variant="outline-success">
                            <NavDropdown title="Adicionar" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/products">Produtos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/clients">Cliente</NavDropdown.Item>
                                <NavDropdown.Item href="/tecnicians">Técnicos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/services-type">Tipos de Serviço</NavDropdown.Item>
                                <NavDropdown.Item href="/services-order">Ordem de Serviço</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;