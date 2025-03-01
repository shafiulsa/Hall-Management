import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
import Footer from "../pages/Shared/Footer";


const Main = () => {
    return (
        <>
               <Navber></Navber>
               <Outlet></Outlet>
               <Footer></Footer>
        </>

    );
};

export default Main;