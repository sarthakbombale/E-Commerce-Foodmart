import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Navbar from "./components/FoodNavbar";
import Hero from "./components/Hero";
import SecondNav from "./components/SecondNav";
import { CartProvider } from "./Context/Cardcontext";
import Kids from "./pages/Kids";
import Men from "./pages/men";
import Women from "./pages/Women";

import Footer from "./components/Footer";



function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <SecondNav />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Hero />} />

          {/* 👩 Women Page */}
          <Route path="/women" element={<Women />} />

          {/* 👨 Men Page */}
          <Route path="/men" element={<Men />} />

          {/* 🧒 Kids Page */}
          <Route path="/kids" element={<Kids />} />
        </Routes>
         <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
