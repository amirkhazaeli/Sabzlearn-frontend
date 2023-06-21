import { useRoutes } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import { Routes } from "./Router";
import { motion, useScroll, useSpring } from "framer-motion";
import './Styles/App.css'
function App() {
  let router = useRoutes(Routes)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {router}
      <Footer />
    </>
  );
}

export default App;
