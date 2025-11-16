import React from "react";
import { Container, Row, Col, Card, Carousel, OverlayTrigger, Popover, Button, Alert } from "react-bootstrap";
import { Dumbbell } from "lucide-react";

// ✅ Simple ProductCard component
const ProductCard = ({ product }) => (
  <Card className="border-0 shadow-sm text-center h-100">
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      style={{ height: "180px", objectFit: "cover" }}
    />
    <Card.Body>
      <Card.Title className="fs-6">{product.name}</Card.Title>
      <Card.Text className="text-muted">{product.price}</Card.Text>
    </Card.Body>
  </Card>
);

const Men = () => {
  const popover = (desc) => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Nutritional Info</Popover.Header>
      <Popover.Body>{desc}</Popover.Body>
    </Popover>
  );

  const foodItems = [
    {
      id: 1,
      title: "Grilled Chicken Bowl",
      price: "$14.99",
      image:
        "https://www.foodandwine.com/thmb/xwu1iU7W73KAei8ZTQ1jmBhr8Uc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/citrus-and-fennel-chicken-with-olives-and-calabrian-chiles-FT-RECIPE0222-c1ef1d87fa514fa08e1616617cdab618.jpg",
      description: "High protein chicken with quinoa, perfect for muscle recovery.",
    },
    {
      id: 2,
      title: "Beef Steak & Veggies",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      description: "Iron-rich beef paired with roasted vegetables.",
    },
    {
      id: 3,
      title: "Espresso Energy Shot",
      price: "$4.99",
      image: "https://m.media-amazon.com/images/I/91a-xeeVBbL._AC_UF1000,1000_QL80_.jpg",
      description: "Strong espresso shot to keep you active all day.",
    },
  ];

  const bestSellingProducts = [
    { id: 1, name: "Protein Bar", price: "$2.99", image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/homemade-protein-bar-1296x728-header.jpg?w=1155&h=1528" },
    { id: 2, name: "Creatine Powder", price: "$24.99", image: "https://images-static.nykaa.com/media/catalog/product/4/b/4bf410d748927066623_2.jpg?tr=w-500" },
    { id: 3, name: "Energy Drink", price: "$3.49", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
    { id: 4, name: "Workout Shake", price: "$6.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ld7_RrNshhcy1lMx0KIGDL31A3a6Mtr_iw&s" },
  ];

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-center text-success">Men’s Power Foods 💪</h2>

      {/* Carousel Section */}
      <Carousel className="mb-5">
        {foodItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 rounded-3"
              src={item.image}
              alt={item.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-2">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Food Cards */}
      <Row className="g-4">
        {foodItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Img variant="top" src={item.image} alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.price}</Card.Text>
                <OverlayTrigger trigger="click" placement="top" overlay={popover(item.description)} rootClose>
                  <Button variant="outline-success" size="sm">
                    View Info
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Best Selling Products */}
      <Container fluid className="py-5 bg-white mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Best Selling Products</h3>
          <Button variant="link" className="text-dark fw-semibold">
            View All Products →
          </Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {bestSellingProducts.map((product) => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Tip Section */}
      <Alert variant="success" className="mt-5 text-center">
        <Dumbbell className="me-2" /> Power Tip: Balance proteins and carbs for faster muscle recovery!
      </Alert>

      {/* 🔥 Offers Section (Bottom Banners) */}
      <Row className="mt-5 g-4">
        <Col md={6}>
          <div
            className="d-flex align-items-center justify-content-between p-4 rounded-4"
            style={{ backgroundColor: "#fdece7" }}
          >
            <div>
              <h5 className="text-warning fw-bold">Upto 25% Off</h5>
              <h3 className="fw-bold">Luxa Dark Chocolate</h3>
              <p className="text-muted mb-3">
                Very tasty & creamy vanilla flavour creamy muffins.
              </p>
              <Button variant="dark" size="sm">
                SHOW NOW
              </Button>
            </div>
            <img
              src="https://images.jdmagicbox.com/comp/def_content_category/dark-chocolate-dealers/37bc3b66de-dark-chocolate-dealers-1-t1ib1.jpg"
              alt="Dark Chocolate"
              style={{ height: "160px" }}
            />
          </div>
        </Col>

        <Col md={6}>
          <div
            className="d-flex align-items-center justify-content-between p-4 rounded-4"
            style={{ backgroundColor: "#e9f6ff" }}
          >
            <div>
              <h5 className="text-warning fw-bold">Upto 25% Off</h5>
              <h3 className="fw-bold">Creamy Muffins</h3>
              <p className="text-muted mb-3">
                Very tasty & creamy vanilla flavour creamy muffins.
              </p>
              <Button variant="dark" size="sm">
                SHOW NOW
              </Button>
            </div>
            <img
              src="https://www.allrecipes.com/thmb/WPrHLNpqiGEneOitiX__ykcGxqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4096253-banana-chocolate-chip-cupcakes-with-cream-cheese-frosting-Kims-Cooking-Now-4x3-1-35178f0e73714adbadd008667fd6833b.jpg"
              alt="Creamy Muffins"
              style={{ height: "160px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Men;
