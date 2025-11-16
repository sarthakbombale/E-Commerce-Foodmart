// Hero.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Fade
} from "react-bootstrap";
import { Calendar, Tag } from 'lucide-react';
import { Facebook, Twitter, Youtube, Instagram, Heart, HatGlasses, ShieldCheck, Newspaper, MessageCircleHeart, Gift } from 'lucide-react';
import { useCart } from "../Context/Cardcontext";
import "./Hero.css";

const categories = [
  { img: "src/assets/veg.jpg", title: "Fruits & Veges" },
  { img: "src/assets/icon-bread-baguette.png", title: "Breads & Sweets" },
  { img: "src/assets/icon-soft-drinks-bottle.png", title: "Beverages" },
  { img: "src/assets/icon-wine-glass-bottle.png", title: "Drinks & Wine" },
  { img: "src/assets/icon-animal-products-drumsticks.png", title: "Meat & Poultry" },
  { img: "src/assets/icon-bread-herb-flour.png", title: "Organic Products" },
];

const brands = [
  { img: "src/assets/product-thumb-11.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
  { img: "src/assets/product-thumb-12.jpg", title: "Green Basket", desc: "Fresh greens and more" },
  { img: "src/assets/product-thumb-13.jpg", title: "Daily Bake", desc: "Baked goods delight" },
  { img: "src/assets/product-thumb-14.jpg", title: "NutriPeat", desc: "Organic nuts and seeds" },
];

// add category field to each trending product
const trendingProducts = [
  {
    id: 1,
    img: "src/assets/thumb-bananas.png",
    title: "Fresh Bananas Pack",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: 30,
    category: "Fruits & Veges"
  },
  {
    id: 2,
    img: "src/assets/thumb-biscuits.png",
    title: "Crunchy Cookie Pack",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: 30,
    category: "All"
  },
  {
    id: 3,
    img: "src/assets/thumb-cucumber.png",
    title: "Fresh Cucumber Bunch",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Fruits & Veges"
  },
  {
    id: 4,
    img: "src/assets/thumb-milk.png",
    title: "Premium Milk Carton",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Juices"
  },
  {
    id: 5,
    img: "src/assets/thumb-bananas.png",
    title: "Sunstar Fresh Melon Juice",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Juices"
  },
  {
    id: 6,
    img: "src/assets/thumb-biscuits.png",
    title: "Crunchy Cookie Pack (Large)",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "All"
  },
  {
    id: 7,
    img: "src/assets/thumb-cucumber.png",
    title: "Crisp Cucumber Bunch",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Fruits & Veges"
  },
  {
    id: 8,
    img: "src/assets/thumb-milk.png",
    title: "Organic Milk Carton",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Juices"
  },
  {
    id: 9,
    img: "src/assets/thumb-orange-juice.png",
    title: "Organic Milk Carton",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Juices"
  },
  {
    id: 10,
    img: "src/assets/thumb-raspberries.png",
    title: "Organic Milk Carton",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: null,
    category: "Juices"
  },

];

const bestSellingProducts = [
  {
    id: 1,
    img: "src/assets/thumb-tomatoes.png",
    name: "Sunstar Fresh Melon Juice 1",
    unit: "1 UNIT",
    rating: 4.5,
    price: 18.00,
    discount: 15
  },
  {
    id: 2,
    img: "src/assets/thumb-tomatoketchup.png", name: "Sunstar Fresh Melon Juice 2", unit: "1 UNIT", rating: 4.5, price: 18.00, discount: 15
  },
  { id: 3, img: "src/assets/thumb-bananas.png", name: "Sunstar Fresh Melon Juice 3", unit: "1 UNIT", rating: 4.5, price: 18.00, discount: 15 },
  { id: 4, img: "src/assets/thumb-bananas.png", name: "Sunstar Fresh Melon Juice 4", unit: "1 UNIT", rating: 4.5, price: 18.00, discount: 15 },
  { id: 5, img: "src/assets/thumb-tomatoes.png", name: "Sunstar Fresh Melon Juice 5", unit: "1 UNIT", rating: 4.5, price: 18.00, discount: 15 },
  { id: 6, img: "src/assets/thumb-tomatoketchup.png", name: "Sunstar Fresh Melon Juice 6", unit: "1 UNIT", rating: 4.5, price: 18.00, discount: 15 }];


const popularProducts = [
  {
    id: 1,
    img: "src/assets/thumb-tomatoes.png",
    name: "Sunstar Fresh Melon Juice A",
    rating: 4.5,
    price: 18.00
  },
  {
    id: 2, img: "src/assets/thumb-tomatoketchup.png",
    name: "Sunstar Fresh Melon Juice B",
    rating: 4.5,
    price: 18.00
  },
  {
    id: 3, img: "src/assets/thumb-bananas.png",
    name: "Sunstar Fresh Melon Juice C",
    rating: 4.5, price: 18.00
  },
  {
    id: 4, img: "src/assets/thumb-bananas.png",
    name: "Sunstar Fresh Melon Juice D",
    rating: 4.5, price: 18.00
  },
  {
    id: 5, img: "src/assets/thumb-tomatoes.png",
    name: "Sunstar Fresh Melon Juice E",
    rating: 4.5, price: 18.00
  },
  {
    id: 6, img: "src/assets/thumb-tomatoketchup.png",
    name: "Sunstar Fresh Melon Juice F",
    rating: 4.5,
    price: 18.00
  },];


const blogPosts = [
  {
    id: 1,
    img: "src/assets/post-thumb-1.jpg",
    date: "22 AUG 2021",
    category: "TIPS & TRICKS",
    title: "Top 10 casual look ideas to dress up your kids",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…"
  },
  { id: 2, img: "src/assets/post-thumb-2.jpg", date: "25 AUG 2021", category: "TRENDING", title: "Latest trends of wearing street wears supremely", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…" }, { id: 3, img: "src/assets/post-thumb-3.jpg", date: "28 AUG 2021", category: "INSPIRATION", title: "10 Different Types of comfortable clothes ideas for women", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…" }
];

const tags = [
  "Blue diamond almonds", "Angie’s Boomchickapop Corn", "Salty kettle Corn",
  "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs", "Blue Diamond Almond",
  "Angies Bluechickpop corn", "Salty ketle corn", "chobani greek yogurt", "sweet vanilla yogurt",
  "Poster farm takeout crispy wings", "warrier blen orgnic", "chau cheese cremey", "chicken metballs"
];

const features = [
  { icon: <HatGlasses />, title: "Free delivery" },
  { icon: <ShieldCheck />, title: "100% secure payment" },
  { icon: <Newspaper />, title: "Quality guarantee" },
  { icon: <MessageCircleHeart />, title: "Guaranteed savings" },
  { icon: <Gift />, title: "Daily offers" }
];

// Reusable ProductCard component
const ProductCard = ({ product, nameKey = "title" }) => {
  const { addToCart } = useCart();
  const title = product[nameKey];
  const img = product.img;
  const unit = product.unit;
  const rating = product.rating;
  const price = product.price;
  const discount = product.discount;

  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);

  const handleMinus = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsFav(prev => !prev);
    // Optionally persist favourite status
  };

  return (
    <Card className="shadow-sm border-0 p-4 rounded-4 text-center product-card" style={{ position: "relative" }}>
      {discount && (
        <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">
          -{discount}%
        </span>
      )}
      <span
        className="position-absolute top-0 end-0 m-2"
        style={{ cursor: "pointer", zIndex: 10 }}
        onClick={handleHeartClick}
        role="button"
        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart size={20} color={isFav ? "red" : "#ccc"} fill={isFav ? "red" : "none"} />
      </span>

      <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "150px" }}>
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ width: "180px", height: "180px", objectFit: "cover", backgroundColor: "rgb(246, 241, 241)" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fw-semibold" style={{ fontSize: "0.95rem", marginTop: "20px" }}>
          {title}
        </Card.Title>
        {unit && (
          <p className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>
            {unit} <span className="text-warning">★ {rating}</span>
          </p>
        )}
        <h5 className="fw-bold">${price.toFixed(2)}</h5>

        <div className="d-flex justify-content-center align-items-center my-2">
          <Button variant="light" size="sm" onClick={handleMinus}>−</Button>
          <span className="mx-2">{quantity}</span>
          <Button variant="light" size="sm" onClick={handlePlus}>＋</Button>
        </div>

        <Button variant="light" className="w-100 text-dark fw-semibold border-0" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  

  // Filter for trending products based on active tab
  const filteredProducts = trendingProducts.filter(prod => {
    if (activeTab === "All") return true;
    return prod.category === activeTab;
  });

  return (
    <>
      {/* Hero Banner Section */}
      <Container fluid className="py-4 hero-container">
        <Row className="g-4 align-items-center">
          <Col md={7}>
            <div className="hero-left">
              <h3 className="text-warning fw-medium">100% Natural</h3>
              <h1 className="fw-bold display-5">
                Fresh Smoothie <br /> & Summer Juice
              </h1>
              <p className="text-muted mt-3" style={{ maxWidth: "400px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
              </p>
              <Button variant="outline-dark" className="mt-3 px-4 py-3 rounded-3">
                SHOP NOW
              </Button>
              <img
                src="src/assets/smoothy.jpg"
                alt="Smoothie Bottle"
                style={{ marginTop: '20px', width: '100%', height: 'auto', maxWidth: '300px' }}
              />
            </div>
          </Col>
          <Col md={5}>
            <Row className="g-4">
              <Col xs={12}>
                <div className="hero-sale-box bg-light-green d-flex align-items-center">
                  <div>
                    <h6 className="text-secondary fw-medium">20% Off</h6>
                    <p className="letter-spacing-2 text-muted">SALE</p>
                    <h4 className="fw-bold">Fruits & Vegetables</h4>
                    <a href="#" className="text-dark text-decoration-none">Shop Collection →</a>
                  </div>
                  <img src="src/assets/veggies.jpg" alt="Fruits" className="ms-auto sale-img" />
                </div>
              </Col>
              <Col xs={12}>
                <div className="hero-sale-box bg-light-red d-flex align-items-center">
                  <div>
                    <h6 className="text-secondary fw-medium">15% Off</h6>
                    <p className="letter-spacing-2 text-muted">SALE</p>
                    <h4 className="fw-bold">Baked Products</h4>
                    <a href="#" className="text-dark text-decoration-none">Shop Collection →</a>
                  </div>
                  <img src="src/assets/baked.jpg" alt="Baked Products" className="ms-auto sale-img" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
{/* Category Section */}
<Container fluid className="py-5 bg-white full-width">
  <div className="mx-3 mb-4 d-flex justify-content-between align-items-center ">
    <h3 className="fw-bold">Category</h3>
    <Button variant="link" className="text-dark fw-semibold">
      View All Categories →
    </Button>
  </div>
  <Row xs={2} sm={3} md={4} lg={6} className="g-4 px-4">
    {categories.map((cat, idx) => (
      <Col key={idx}>
        <Card className="border-0  text-center py-4 rounded-4 category-card">
          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "70px",
              height: "70px",
              margin: "0 auto",
            
              borderRadius: "50%",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
          </div>
          <Card.Title className="fw-semibold" style={{ fontSize: "1rem" }}>
            {cat.title}
          </Card.Title>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

{/* Newly Arrived Brands Section */}
<Container fluid className="py-5 bg-white full-width">
  <div className="mx-3 mb-4 d-flex justify-content-between align-items-center">
    <h3 className="fw-bold">Newly Arrived Brands</h3>
    <Button variant="link" className="text-dark fw-semibold">
      View All Categories →
    </Button>
  </div>
  <Row xs={1} sm={2} md={3} lg={4} className="g-4 px-4">
    {brands.map((brand, idx) => (
      <Col key={idx}>
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden brand-card">
          <div className="d-flex align-items-center p-3">
            <div
              className="flex-shrink-0 me-3"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#f5f5f5",
              }}
            >
              <img
                src={brand.img}
                alt={brand.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h6 className="fw-semibold fs-5">{brand.title}</h6>
              <p className="text-muted small mb-0 fs-6">{brand.desc}</p>
            </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</Container>






      {/* Trending Products Section with Tabs */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="mx-3 mb-4 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Trending Products</h3>
          <div>
            {["All", "Fruits & Veges", "Juices"].map(tab => (
              <Button
                key={tab}
                variant={activeTab === tab ? "light" : "link"}
                className={`text-dark fw-semibold me-2`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
        <Row xs={1} sm={2} md={3} lg={5} className="g-4 p-3">
          {filteredProducts.map((prod) => (
            <Col key={prod.id}>
              <ProductCard product={prod} nameKey="title" />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Best Selling Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Best Selling Products</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Products →</Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {bestSellingProducts.map((product) => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}>
              <ProductCard product={product} nameKey="name" />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Most Popular Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Most Popular Products</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Products →</Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {popularProducts.map((product) => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}>
              <ProductCard product={product} nameKey="name" />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Just Arrived Section (you can reuse popularProducts or create a new list) */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Just Arrived</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Products →</Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {popularProducts.map((product) => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}>
              <ProductCard product={product} nameKey="name" />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Blog / Newsletter / Tags & Features / Footer – same as before */}
      <div className="py-5">
        <div className="mx-3 d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mx-3">Our Recent Blog</h2>
          <a href="#" className="text-decoration-none text-dark fw-semibold">Read All Articles →</a>
        </div>
        <Row className="w-100 mx-3">
          {blogPosts.map((post) => (
            <Col key={post.id} md={4} className="mb-5">
              <Card className="border-0 shadow-sm h-100 gap-5 mx-2">
                <Card.Img variant="top" src={post.img} alt={post.title} />
                <Card.Body>
                  <div className="d-flex align-items-center text-muted mb-2">
                    <Calendar size={16} className="me-1" /> {post.date} <Tag size={16} className="ms-3 me-1" /> {post.category}
                  </div>
                  <Card.Title className="fw-bold py-2" style={{ fontSize: '1.6rem' }}>
                    {post.title}
                  </Card.Title>
                  <Card.Text className="text-secondary" style={{ lineHeight: '25px' }}>
                    {post.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ backgroundColor: "#eaf6fb", borderRadius: "30px", padding: "100px", width: '95%', marginLeft: '2rem' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ fontWeight: "700" }}> Get <span style={{ color: "#f7c948" }}>25% Discount</span><br />
                on your first purchase
              </h2>
              <p style={{ color: "#6c757d", marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
              </p>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="abc@mail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckbox">
                  <Form.Check type="checkbox" label="Subscribe to the newsletter" />
                </Form.Group>
                <Button variant="dark" type="submit" style={{ width: "100%", borderRadius: "8px", padding: "10px 0" }}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="my-5 py-5 mx-3">
        <h4 className="my-5 text-dark" style={{ fontSize: '1.8rem' }}>People are also looking for</h4>
        <div className="mb-4">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="me-1 mb-2 border-0 p-2 mx-4 px-2"
              style={{ backgroundColor: '#FCF7EB', fontSize: '1rem', color: 'grey', borderRadius: '10px' }}
            >
              {tag}
            </button>
          ))}
        </div>
        <Row className="text-center mt-5 py-4 me-1 gap-2">
          {features.map((feature, idx) => (
            <Col key={idx} md={2} sm={6} xs={12} className="mb-4 mx-3">
              <div className="mb-3" style={{ fontSize: '2rem' }}>{feature.icon}</div>
              <strong style={{ fontSize: '1.3rem' }}>{feature.title}</strong>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Hero;