import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
export const Routes = [
    {
        path:'/' , element: <Home />
    },
    {
        path:'/category' , element: <Category />
    }
]