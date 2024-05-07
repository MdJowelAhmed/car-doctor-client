import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res=>{
            setBookings(res.data);
        })
        // fetch(url, {withCredentials: true})
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //         console.log(data)
        //     })
    }, [url])

    return (
        <div>
            <h2>Bookings :{bookings.length} </h2>
            <div>
                {
                    bookings.map(booking => <div key={booking._id}>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>date</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                       
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{booking.CustomersName} </div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                           {booking.servicesTitle}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>{booking. DeliveryDate} </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">{booking.servicePrice}</button>
                                        </th>
                                    </tr>
                                   
                                </tbody>
                               
                            </table>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Bookings;