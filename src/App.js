import { useRoutes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Routes } from "./Router";
function App() {
  let router = useRoutes(Routes)
  return (
   <>
   {router}
   <Footer />
   </>
  );
}

export default App;
