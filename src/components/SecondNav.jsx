import React from "react";
import { Navbar, Nav, Container, Dropdown, NavDropdown } from "react-bootstrap";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const SecondNav = () => {
    return (
        <Navbar expand="lg" className="border-top">
            <Container fluid className="px-5 py-4">
                <Nav className="me-auto" style={{ fontSize: '17px', gap: '9px' }}>
                    <Dropdown as={Nav.Item} className="me-3">
                        <Dropdown.Toggle as={Nav.Link} className="d-flex align-items-center">
                            Shop By Departments <ChevronDown size={16} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#fruits">Groceries</Dropdown.Item>
                            <Dropdown.Item href="#beverages">Drinks</Dropdown.Item>
                            <Dropdown.Item href="#dairy">Chocolates</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link as={Link} to="/women">Women</Nav.Link>
                    <Nav.Link as={Link} to="/men">Men</Nav.Link>
                    <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
                    <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>

                    <NavDropdown title="Pages" id="nav-dropdown-pages" className="mx-2">
                        <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/shop">Shop</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/single-product">Single Product</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/checkout">Checkout</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/single-post">Single post</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/styles">Styles</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/thank-you">Thank You</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/404">404 Error</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={Link} to="/brand">Brand</Nav.Link>
                    <Nav.Link as={Link} to="/sale">Sale</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default SecondNav;
