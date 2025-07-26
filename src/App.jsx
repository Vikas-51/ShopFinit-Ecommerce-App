import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkMode from "./components/Navbar/DarkMode"; // ✅

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "🎵 Feel the bass. Hear every detail. Go wireless with confidence",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "🌐 Your world, now at a glance—the perfect blend of style, intelligence, and functionality",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [orderPopup, setOrderPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleOrderPopup = () => setOrderPopup(!orderPopup);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
    const total = updatedCart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + price;
    }, 0);
    setCartTotal(total);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  //  Dark mode body class handler
 useEffect(() => {
  document.body.classList.toggle("dark", darkMode); // sets class for global styling
}, [darkMode]);


  // AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="app transition overflow-hidden">
      <Navbar
        cartCount={cartCount}
        handleOrderPopup={handleOrderPopup}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products handleAddToCart={handleAddToCart} />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup
        orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}
        cartItems={cartItems}
        cartTotal={cartTotal}
        clearCart={clearCart}
      />
    </div>
  );
};

export default App;
