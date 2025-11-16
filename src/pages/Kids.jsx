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
import { Smile } from "lucide-react";

// ✅ Reusable ProductCard
const ProductCard = ({ product }) => (
  <Card className="border-0 shadow-sm text-center h-100 hover-scale transition-fast rounded-4">
    <div className="overflow-hidden rounded-4">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover", transition: "transform 0.3s" }}
        className="product-img-hover"
      />
    </div>
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title className="fs-6 fw-semibold">{product.name}</Card.Title>
      <Card.Text className="text-muted fw-bold">{product.price}</Card.Text>
      <Button variant="outline-warning" size="sm" className="mt-2 fw-bold">
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
);

const Kids = () => {
  const popover = (desc) => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Fun Fact 🍭</Popover.Header>
      <Popover.Body>{desc}</Popover.Body>
    </Popover>
  );

  const snacks = [
    {
      id: 1,
      title: "Mini Pancakes",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      description: "Soft, fluffy pancakes drizzled with honey — kids love it!",
    },
    {
      id: 2,
      title: "Cheesy Fries",
      price: "$7.99",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2024_40/2077804/rick-martinez-cheese-fries-2x1-mc-241004.jpg",
      description: "Crispy fries topped with gooey cheese and love!",
    },
    {
      id: 3,
      title: "Chocolate Milkshake",
      price: "$5.99",
      image:
        "https://www.southernliving.com/thmb/medblRyqMUtqetAX9dRVXDdFRKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chocolate_Milkshake_009-7442cef738c34043a273347ba6c1750c.jpg",
      description: "Creamy chocolate delight — favorite drink of every kid!",
    },
  ];

  const bestSellingProducts = [
    {
      id: 1,
      name: "Candy Pack",
      price: "$3.49",
      image: "https://images-cdn.ubuy.co.in/66599d7a303e6f5c32242962-snackhut-sour-candy-variety-pack.jpg",
    },
    {
      id: 2,
      name: "Ice Cream Cup",
      price: "$4.99",
      image: "https://langma8848.com/cdn/shop/files/1_1_9.jpg?v=1707099311&width=1445",
    },
    {
      id: 3,
      name: "Cookies Box",
      price: "$5.99",
      image: "https://milkandhoney.in/wp-content/uploads/2024/09/Assorted-Cookies-Box-800-Gm.jpg",
    },
    {
      id: 4,
      name: "Fruit Gummies",
      price: "$2.99",
      image: "https://www.crowdedkitchen.com/wp-content/uploads/2024/06/Fruit-Snacks-19.jpg",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-5 text-center text-warning display-6">
        Kids’ Fun Snacks 🍔
      </h2>

      {/* Carousel Section */}
      <Carousel className="mb-5 rounded-4 overflow-hidden shadow-lg">
        {snacks.map((snack) => (
          <Carousel.Item key={snack.id}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={snack.image}
                alt={snack.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
                }}
              ></div>
              <Carousel.Caption className="bottom-0 mb-4">
                <h5 className="fw-bold">{snack.title}</h5>
                <p>{snack.description}</p>
                <Button variant="warning" size="sm" className="fw-bold">
                  Add to Cart
                </Button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Snack Cards Section */}
      <Row className="g-4 mb-5">
        {snacks.map((snack) => (
          <Col md={4} key={snack.id}>
            <Card className="border-0 shadow-sm text-center h-100 hover-scale transition-fast rounded-4">
              <div className="overflow-hidden rounded-4">
                <Card.Img
                  variant="top"
                  src={snack.image}
                  alt={snack.title}
                  style={{ height: "250px", objectFit: "cover", transition: "transform 0.3s" }}
                  className="product-img-hover"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-semibold">{snack.title}</Card.Title>
                <Card.Text className="text-muted fw-bold">{snack.price}</Card.Text>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover(snack.description)}
                  rootClose
                >
                  <Button variant="outline-warning" size="sm" className="fw-bold">
                    Fun Info
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Best Selling Products Section */}
      <Container fluid className="py-5 bg-white mt-5 rounded-4 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4 px-3">
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

      {/* Fun Tip Section */}
      <Alert variant="warning" className="mt-5 text-center fw-bold fs-6 rounded-4 shadow-sm">
        <Smile className="me-2" /> Tip: Let kids help decorate their snacks — it boosts creativity!
      </Alert>

      {/* Offers Section */}
      <Row className="mt-5 g-4">
        {[
          {
            bg: "#fdece7",
            title: "Luxa Dark Chocolate",
            subtitle: "Upto 25% Off",
            text: "Very tasty & creamy vanilla flavour muffins.",
            img: "https://images.jdmagicbox.com/comp/def_content_category/dark-chocolate-dealers/37bc3b66de-dark-chocolate-dealers-1-t1ib1.jpg",
          },
          {
            bg: "#e9f6ff",
            title: "Creamy Muffins",
            subtitle: "Upto 25% Off",
            text: "Very tasty & creamy vanilla flavour muffins.",
            img: "https://www.allrecipes.com/thmb/WPrHLNpqiGEneOitiX__ykcGxqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4096253-banana-chocolate-chip-cupcakes-with-cream-cheese-frosting-Kims-Cooking-Now-4x3-1-35178f0e73714adbadd008667fd6833b.jpg",
          },
        ].map((offer, idx) => (
          <Col md={6} key={idx}>
            <div
              className="d-flex align-items-center justify-content-between p-4 rounded-4 shadow-sm hover-scale transition-fast"
              style={{ backgroundColor: offer.bg }}
            >
              <div>
                <h5 className="text-warning fw-bold">{offer.subtitle}</h5>
                <h3 className="fw-bold">{offer.title}</h3>
                <p className="text-muted mb-3">{offer.text}</p>
                <Button variant="dark" size="sm" className="fw-bold">
                  SHOW NOW
                </Button>
              </div>
              <img src={offer.img} alt={offer.title} style={{ height: "160px", borderRadius: "12px" }} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Kids;
