import { ROUTERS } from "./Components/Router/Router.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/Home.js";
import Trangchu from "./Components/Pages/Trangchu.js";
import ProfilePage from "./Components/Pages/Profile.js";
import DisplayProduct from "./Components/Pages/SanPham.js" ;
import Hacquangia12 from "./Components/Pages/hacquangia12.js";
const renderUserRouter = () => {
    const UserRouter =
        [
            {
                path: ROUTERS.USER.HOME,
                component: <Trangchu />,
            }, 
            {
                path: ROUTERS.USER.PROFILE,
                component: <ProfilePage/>,
            },
            {
                path : ROUTERS.USER.PRODUCTS,
                component: <DisplayProduct />,
            },
            {
                path : ROUTERS.PROLINK.ITEM1,
                component: <Hacquangia12/>
            },
           
        ]

    return (
        <HomePage>
        <Routes>
            {
                UserRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}></Route>
                
                ))}
        </Routes>
        </HomePage>
    );
};
const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;
