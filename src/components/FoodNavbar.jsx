// src/components/FoodNavbar.js
import React, { useState } from "react";
import { Container, Navbar, Form, InputGroup, Dropdown, Offcanvas, Button } from "react-bootstrap";
import { Search, User, Heart } from "lucide-react";
import { useCart } from "../Context/Cardcontext";


const FoodNavbar = () => {
  const {
    cartItems,
    getTotalPrice,
    getTotalCount,
    updateQuantity,
    removeItem,
    clearCart
  } = useCart();

  const totalPrice = getTotalPrice().toFixed(2);
  const itemCount = getTotalCount();

  const [showCart, setShowCart] = useState(false);
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Navbar expand="lg" className="border-bottom py-4">
        <Container fluid className="px-5">
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
            <img src="https://themewagon.github.io/FoodMart/images/logo.png"
                 alt="FoodMart Logo" height="50" className="me-2" />
            {/* optionally brand text */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content">
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <Dropdown className="me-3">
                <Dropdown.Toggle variant="light" id="category-dropdown" className="border rounded px-3 p-3">
                  All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Fruits & Vegetables</Dropdown.Item>
                  <Dropdown.Item>Beverages</Dropdown.Item>
                  <Dropdown.Item>Dairy</Dropdown.Item>
                  <Dropdown.Item>Snacks</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form className="flex-grow-1" style={{ maxWidth: "500px" }}>
                <InputGroup>
                  <Form.Control className="p-3" type="text"
                                placeholder="Search for more than 20,000 products"
                                aria-label="Search products" />
                  <InputGroup.Text><Search size={18} /></InputGroup.Text>
                </InputGroup>
              </Form>
            </div>
            <div className="d-flex align-items-center ms-4">
              <div className="text-end me-4 d-none d-lg-block">
                <div className="small text-muted font-size-4">For Support?</div>
                <div className="fw-bold ">+980-34984089</div>
              </div>
              <User className="me-3" size={25} />
              <Heart className="me-3" size={25} />
              <Button variant="link" className="text-dark text-decoration-none fw-bold"
                      onClick={handleShow}>
                Your Cart <span className="ms-1">${totalPrice}</span> ({itemCount} items)
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'green', fontSize:'1.5rem'}}>Your Cart ({itemCount})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {itemCount === 0 ? (
            <div className="text-center py-5">No items in cart</div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="me-3 flex-grow-1">
                    <strong>{item.title || item.name}</strong><br />
                    <small>Qty: {item.quantity}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">${(item.price * item.quantity).toFixed(2)}</div>
                    <Button variant="outline-danger" size="sm"
                            onClick={() => removeItem(item.id)}>
                      &times;
                    </Button>
                  </div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-semibold mb-3">
                <div>Total:</div>
                <div>${totalPrice}</div>
              </div>
              <Button variant="warning" className="w-100 mb-2 ">
                Continue to checkout
              </Button>
              <Button variant="link" className="w-100 text-center text-decoration-none text-dark"
                      onClick={() => { clearCart(); handleClose(); }}>
                Clear Cart
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FoodNavbar;
