import About from "../About/About";
import Banner from "./Banner/Banner";
import ServicecArea from "./Services/ServicecArea";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicecArea></ServicecArea>
            <h2> THis is Home page </h2>
        </div>
    );
};

export default Home;