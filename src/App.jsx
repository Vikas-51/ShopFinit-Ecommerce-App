import React from "react";
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

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "🎵 Feel the bass. Hear every detail. Go wireless with confidence",
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
    "🌐 Your world, now at a glance-the perfect blend of style, intelligence, and functionality",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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

  // Update cart count and total when cartItems change
  React.useEffect(() => {
    setCartCount(cartItems.length);
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return sum + price;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const clearCart = () => {
  setCartItems([]);
  setCartTotal(0);
};

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-dark transition overflow-hidden">
      <Navbar cartCount={cartCount} handleOrderPopup={handleOrderPopup} />
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
