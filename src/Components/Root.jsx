import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";
import Footer from "../Pages/Share/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;