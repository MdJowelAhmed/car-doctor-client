import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ServicecArea = () => {
    const [services, setServices] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center mt-20">Our services area </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    services.map(service => <div key={service._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={service.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title} !</h2>
                                <p>{service.description.slice(0, 150)} </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/checkOut/${service._id}`}>
                                        <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServicecArea;