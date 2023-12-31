import Login from "./Pages/Login/Login";
import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Regeister from "./Pages/Register/Register";
import Article from "./Pages/Article/Article";
export const Routes = [
    {
        path:'/' , element: <Home />
    },
    {
        path:'/category/:categoryName' , element: <Category />
    },
    {
        path:'/productInfo/:id' , element: <ProductInfo />
    },
    {
        path:'/login' , element: <Login />
    },
    {
        path:'/register' , element: <Regeister />
    },
    {
        path:'/article' , element: <Article />
    }


]