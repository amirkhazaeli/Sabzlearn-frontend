import { useState, useEffect } from "react";
import { useRoutes,useLocation } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import { Routes } from "./Router";
import { motion, useScroll, useSpring } from "framer-motion";
import './Styles/App.css'
import CartContext from "./Context/CartContext";

function App() {
  const [CartItems, setCartItems] = useState([])
  let router = useRoutes(Routes)
  const { scrollYProgress } = useScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CartContext.Provider value={{ CartItems, setCartItems }}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        {router}
        <Footer />
      </CartContext.Provider>

    </>
  );
}

export default App;
