import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  OverlayTrigger,
  Popover,
  Button,
  Alert,
} from "react-bootstrap";
import { Heart } from "lucide-react";

// ✅ Reusable ProductCard
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

const Women = () => {
  const popover = (desc) => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">About This Dish</Popover.Header>
      <Popover.Body>{desc}</Popover.Body>
    </Popover>
  );

  const items = [
    {
      id: 1,
      title: "Chocolates",
      price: "$9.99",
      image:
        "https://www.thespruceeats.com/thmb/FhHcgQni8lgV0griUeDJMTAszxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg",
      description: "Rich in vitamins and healthy fats for glowing skin.",
    },
    {
      id: 2,
      title: "Fruits",
      price: "$10.99",
      image:
        "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/wip--21-healthiest-fruits-to-eat-in-2024-php3RGRfc",
      description: "Antioxidant-packed breakfast to start your day right.",
    },
    {
      id: 3,
      title: "Quinoa Salad",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      description: "Protein-rich quinoa with veggies and olive oil dressing.",
    },
  ];

  const bestSellingProducts = [
    {
      id: 1,
      name: "Organic Green Tea",
      price: "$6.49",
      image:
        "https://organicindia.com/cdn/shop/files/Untitled-1_0006__51A5041.jpg?v=1704457220",
    },
    {
      id: 2,
      name: "Almond Butter",
      price: "$12.99",
      image:
        "https://thishealthykitchen.com/wp-content/uploads/2021/06/Almond-Butter-Feat-Image-Square-1200x1200-1.jpg",
    },
    {
      id: 3,
      name: "Avocado Oil",
      price: "$14.49",
      image:
        "https://www.health.com/thmb/Z6hcFn6ipBMMQ7TMXNl6b2iaiF4=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-974251806-bee639463a554149a83565ac50221759.jpg",
    },
    {
      id: 4,
      name: "Berry Mix Smoothie",
      price: "$7.99",
      image:
        "https://www.spendwithpennies.com/wp-content/uploads/2018/12/SpendWithPennies-Mixed-Berry-Smoothie-24.jpg",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-center text-danger">
        Women’s Healthy Delights 💃
      </h2>

      {/* Carousel Section */}
      <Carousel className="mb-5">
        {items.map((i) => (
          <Carousel.Item key={i.id}>
            <img
              className="d-block w-100 rounded-3"
              src={i.image}
              alt={i.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-2">
              <h5>{i.title}</h5>
              <p>{i.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Cards Section */}
      <Row className="g-4">
        {items.map((i) => (
          <Col md={4} key={i.id}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Img
                variant="top"
                src={i.image}
                alt={i.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text className="text-muted">{i.price}</Card.Text>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover(i.description)}
                  rootClose
                >
                  <Button variant="outline-danger" size="sm">
                    Know More
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Best Selling Section */}
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
      <Alert variant="danger" className="mt-5 text-center">
        <Heart className="me-2" /> Wellness Tip: Stay hydrated and add fruits to
        every meal!
      </Alert>

      {/* 🔥 Offers Section (at the bottom) */}
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

export default Women;
