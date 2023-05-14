import Products from "./Pages/Products/Products"
import Home from "./Pages/Home/Home"
import UserList from "./Pages/Userlist/UserList"
import Newuser from "./Pages/NewUser/Newuser"
import Product from "./Pages/Product/Product"



let Routes = [
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/UserList', element: <UserList /> },
    { path: '/Newuser', element: <Newuser /> },
    { path: '/product/:productID', element: <Product /> }
]

export default Routes