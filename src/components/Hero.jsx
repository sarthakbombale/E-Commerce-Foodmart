// Hero.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Calendar, Tag } from 'lucide-react';
import { Heart, HatGlasses, ShieldCheck, Newspaper, MessageCircleHeart, Gift } from 'lucide-react';
import { useCart } from "../Context/Cardcontext";
import "./Hero.css";

// Import all images
import vegImg from "../assets/veg.jpg";
import breadImg from "../assets/icon-bread-baguette.png";
import softDrinkImg from "../assets/icon-soft-drinks-bottle.png";
import wineImg from "../assets/icon-wine-glass-bottle.png";
import meatImg from "../assets/icon-animal-products-drumsticks.png";
import organicImg from "../assets/icon-bread-herb-flour.png";

import product11 from "../assets/product-thumb-11.jpg";
import product12 from "../assets/product-thumb-12.jpg";
import product13 from "../assets/product-thumb-13.jpg";
import product14 from "../assets/product-thumb-14.jpg";

import bananaThumb from "../assets/thumb-bananas.png";
import biscuitThumb from "../assets/thumb-biscuits.png";
import cucumberThumb from "../assets/thumb-cucumber.png";
import milkThumb from "../assets/thumb-milk.png";
import orangeJuiceThumb from "../assets/thumb-orange-juice.png";
import raspberryThumb from "../assets/thumb-raspberries.png";
import tomatoThumb from "../assets/thumb-tomatoes.png";
import ketchupThumb from "../assets/thumb-tomatoketchup.png";

import smoothyImg from "../assets/smoothy.jpg";
import veggiesImg from "../assets/veggies.jpg";
import bakedImg from "../assets/baked.jpg";

import post1 from "../assets/post-thumb-1.jpg";
import post2 from "../assets/post-thumb-2.jpg";
import post3 from "../assets/post-thumb-3.jpg";

// Categories
const categories = [
  { img: vegImg, title: "Fruits & Veges" },
  { img: breadImg, title: "Breads & Sweets" },
  { img: softDrinkImg, title: "Beverages" },
  { img: wineImg, title: "Drinks & Wine" },
  { img: meatImg, title: "Meat & Poultry" },
  { img: organicImg, title: "Organic Products" },
];

// Brands
const brands = [
  { img: product11, title: "Amber Jar", desc: "Honey best nectar you wish to get" },
  { img: product12, title: "Green Basket", desc: "Fresh greens and more" },
  { img: product13, title: "Daily Bake", desc: "Baked goods delight" },
  { img: product14, title: "NutriPeat", desc: "Organic nuts and seeds" },
];

// Trending products
const trendingProducts = [
  { id: 1, img: bananaThumb, title: "Fresh Bananas Pack", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 30, category: "Fruits & Veges" },
  { id: 2, img: biscuitThumb, title: "Crunchy Cookie Pack", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 30, category: "All" },
  { id: 3, img: cucumberThumb, title: "Fresh Cucumber Bunch", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Fruits & Veges" },
  { id: 4, img: milkThumb, title: "Premium Milk Carton", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Juices" },
  { id: 5, img: bananaThumb, title: "Sunstar Fresh Melon Juice", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Juices" },
  { id: 6, img: biscuitThumb, title: "Crunchy Cookie Pack (Large)", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "All" },
  { id: 7, img: cucumberThumb, title: "Crisp Cucumber Bunch", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Fruits & Veges" },
  { id: 8, img: milkThumb, title: "Organic Milk Carton", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Juices" },
  { id: 9, img: orangeJuiceThumb, title: "Organic Milk Carton", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Juices" },
  { id: 10, img: raspberryThumb, title: "Organic Milk Carton", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: null, category: "Juices" },
];

// Best Selling Products
const bestSellingProducts = [
  { id: 1, img: tomatoThumb, name: "Sunstar Fresh Melon Juice 1", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
  { id: 2, img: ketchupThumb, name: "Sunstar Fresh Melon Juice 2", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
  { id: 3, img: bananaThumb, name: "Sunstar Fresh Melon Juice 3", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
  { id: 4, img: bananaThumb, name: "Sunstar Fresh Melon Juice 4", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
  { id: 5, img: tomatoThumb, name: "Sunstar Fresh Melon Juice 5", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
  { id: 6, img: ketchupThumb, name: "Sunstar Fresh Melon Juice 6", unit: "1 UNIT", rating: 4.5, price: 18.0, discount: 15 },
];

// Popular Products (reuse best selling for demo)
const popularProducts = bestSellingProducts;

// Blog posts
const blogPosts = [
  { id: 1, img: post1, date: "22 AUG 2021", category: "TIPS & TRICKS", title: "Top 10 casual look ideas to dress up your kids", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…" },
  { id: 2, img: post2, date: "25 AUG 2021", category: "TRENDING", title: "Latest trends of wearing street wears supremely", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…" },
  { id: 3, img: post3, date: "28 AUG 2021", category: "INSPIRATION", title: "10 Different Types of comfortable clothes ideas for women", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit…" },
];

// ProductCard component (same as your original)
const ProductCard = ({ product, nameKey = "title" }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);

  const title = product[nameKey];

  const handleMinus = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handlePlus = () => setQuantity(prev => prev + 1);
  const handleAddToCart = () => { addToCart({ ...product, quantity }); setQuantity(1); };
  const handleHeartClick = e => { e.stopPropagation(); setIsFav(prev => !prev); };

  return (
    <Card className="shadow-sm border-0 p-4 rounded-4 text-center product-card" style={{ position: "relative" }}>
      {product.discount && <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">-{product.discount}%</span>}
      <span className="position-absolute top-0 end-0 m-2" style={{ cursor: "pointer", zIndex: 10 }} onClick={handleHeartClick}>
        <Heart size={20} color={isFav ? "red" : "#ccc"} fill={isFav ? "red" : "none"} />
      </span>
      <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "150px" }}>
        <Card.Img variant="top" src={product.img} alt={title} style={{ width: "180px", height: "180px", objectFit: "cover", backgroundColor: "rgb(246, 241, 241)" }} />
      </div>
      <Card.Body>
        <Card.Title className="fw-semibold" style={{ fontSize: "0.95rem", marginTop: "20px" }}>{title}</Card.Title>
        {product.unit && <p className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>{product.unit} <span className="text-warning">★ {product.rating}</span></p>}
        <h5 className="fw-bold">${product.price.toFixed(2)}</h5>
        <div className="d-flex justify-content-center align-items-center my-2">
          <Button variant="light" size="sm" onClick={handleMinus}>−</Button>
          <span className="mx-2">{quantity}</span>
          <Button variant="light" size="sm" onClick={handlePlus}>＋</Button>
        </div>
        <Button variant="light" className="w-100 text-dark fw-semibold border-0" onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

// Hero component
const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = trendingProducts.filter(prod => activeTab === "All" ? true : prod.category === activeTab);

  const features = [
    { icon: <HatGlasses />, title: "Free delivery" },
    { icon: <ShieldCheck />, title: "100% secure payment" },
    { icon: <Newspaper />, title: "Quality guarantee" },
    { icon: <MessageCircleHeart />, title: "Guaranteed savings" },
    { icon: <Gift />, title: "Daily offers" }
  ];

  const tags = ["Blue diamond almonds", "Angie’s Boomchickapop Corn", "Salty kettle Corn", "Chobani Greek Yogurt", "Sweet Vanilla Yogurt"];

  return (
    <>
      {/* Hero Banner */}
      <Container fluid className="py-4 hero-container">
        <Row className="g-4 align-items-center">
          <Col md={7}>
            <div className="hero-left">
              <h3 className="text-warning fw-medium">100% Natural</h3>
              <h1 className="fw-bold display-5">Fresh Smoothie <br /> & Summer Juice</h1>
              <p className="text-muted mt-3" style={{ maxWidth: "400px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
              <Button variant="outline-dark" className="mt-3 px-4 py-3 rounded-3">SHOP NOW</Button>
              <img src={smoothyImg} alt="Smoothie Bottle" style={{ marginTop: '20px', width: '100%', height: 'auto', maxWidth: '300px' }} />
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
                  <img src={veggiesImg} alt="Fruits" className="ms-auto sale-img" />
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
                  <img src={bakedImg} alt="Baked Products" className="ms-auto sale-img" />
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
          <Button variant="link" className="text-dark fw-semibold">View All Categories →</Button>
        </div>
        <Row xs={2} sm={3} md={4} lg={6} className="g-4 px-4">
          {categories.map((cat, idx) => (
            <Col key={idx}>
              <Card className="border-0 text-center py-4 rounded-4 category-card">
                <div className="d-flex justify-content-center align-items-center mb-3" style={{ width: "70px", height: "70px", margin: "0 auto", borderRadius: "50%" }}>
                  <img src={cat.img} alt={cat.title} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                </div>
                <Card.Title className="fw-semibold" style={{ fontSize: "1rem" }}>{cat.title}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Brands Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="mx-3 mb-4 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Newly Arrived Brands</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Categories →</Button>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 px-4">
          {brands.map((brand, idx) => (
            <Col key={idx}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden brand-card">
                <div className="d-flex align-items-center p-3">
                  <div className="flex-shrink-0 me-3" style={{ width: "90px", height: "90px", borderRadius: "10px", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
                    <img src={brand.img} alt={brand.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

      {/* Trending Products Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="mx-3 mb-4 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Trending Products</h3>
          <div>
            {["All", "Fruits & Veges", "Juices"].map(tab => (
              <Button key={tab} variant={activeTab === tab ? "light" : "link"} className="text-dark fw-semibold me-2" onClick={() => setActiveTab(tab)}>{tab}</Button>
            ))}
          </div>
        </div>
        <Row xs={1} sm={2} md={3} lg={5} className="g-4 p-3">
          {filteredProducts.map(prod => (
            <Col key={prod.id}><ProductCard product={prod} nameKey="title" /></Col>
          ))}
        </Row>
      </Container>

      {/* Best Selling Products Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Best Selling Products</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Products →</Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {bestSellingProducts.map(product => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}><ProductCard product={product} nameKey="name" /></Col>
          ))}
        </Row>
      </Container>

      {/* Most Popular Products Section */}
      <Container fluid className="py-5 bg-white full-width">
        <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
          <h3 className="fw-bold">Most Popular Products</h3>
          <Button variant="link" className="text-dark fw-semibold">View All Products →</Button>
        </div>
        <Row className="g-4 justify-content-center px-3">
          {popularProducts.map(product => (
            <Col key={product.id} xs={6} sm={4} md={3} lg={2}><ProductCard product={product} nameKey="name" /></Col>
          ))}
        </Row>
      </Container>

      {/* Blog Section */}
      <div className="py-5">
        <div className="mx-3 d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mx-3">Our Recent Blog</h2>
          <a href="#" className="text-decoration-none text-dark fw-semibold">Read All Articles →</a>
        </div>
        <Row className="w-100 mx-3">
          {blogPosts.map(post => (
            <Col key={post.id} md={4} className="mb-5">
              <Card className="border-0 shadow-sm h-100 gap-5 mx-2">
                <Card.Img variant="top" src={post.img} alt={post.title} />
                <Card.Body>
                  <div className="d-flex align-items-center text-muted mb-2">
                    <Calendar size={16} className="me-1" /> {post.date} <Tag size={16} className="ms-3 me-1" /> {post.category}
                  </div>
                  <Card.Title className="fw-bold py-2" style={{ fontSize: '1.6rem' }}>{post.title}</Card.Title>
                  <Card.Text className="text-secondary" style={{ lineHeight: '25px' }}>{post.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Hero;
