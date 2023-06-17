import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
export const Routes = [
    {
        path:'/' , element: <Home />
    },
    {
        path:'/category' , element: <Category />
    },
    {
        path:'/productInfo' , element: <ProductInfo />
    },
]