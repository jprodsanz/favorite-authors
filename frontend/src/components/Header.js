import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar,Nav, NavDropdown, Container,} from 'react-bootstrap'


export const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Favorite Authors  
                    </Link>
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                        <Nav className="m-auto">
                            {/* <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Explore" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to='/display'>
                                        View All
                                    </Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item>
                                    <Link to='/products'>
                                        View Products
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to='/edit'>
                                        Edit
                                    </Link>
                                </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
