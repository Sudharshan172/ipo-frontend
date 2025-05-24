import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IPO from "./pages/IPO/IPO";
import Upcoming from "./pages/IPO/Upcoming";
import Community from "./pages/Community";
import LiveNews from "./pages/LiveNews";

// Products Dropdown Pages
import Product1 from "./pages/Products/Product1";
import Product2 from "./pages/Products/Product2";
import Product3 from "./pages/Products/Product3";

// About Dropdown Pages
import AboutUs from "./pages/About/AboutUs";
import Careers from "./pages/About/Careers";
import ContactUs from "./pages/About/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ipo" element={<IPO />} />
            <Route path="/ipo/upcoming" element={<Upcoming/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/live-news" element={<LiveNews />} />

            {/* Products Dropdown Pages */}
            <Route path="/products/product1" element={<Product1 />} />
            <Route path="/products/product2" element={<Product2 />} />
            <Route path="/products/product3" element={<Product3 />} />

            {/* About Dropdown Pages */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/aboutus/careers" element={<Careers />} />
            <Route path="/aboutus/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
