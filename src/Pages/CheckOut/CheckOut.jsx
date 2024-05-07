import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const CheckOut = () => {
    const loadedServices = useLoaderData()
    const {_id,img,title}=loadedServices
    const {user}=useContext(AuthContext)

    const handleServiceOrder=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const price=form.price.value;
        const date=form.date.value;
        const type=form.type.value;
        const orderConfirm={
            CustomersName:name,
            email:user.email,
            servicePrice :'$'+ price,
            DeliveryDate:date,
            ServiceType:type,
            services_id:_id,
            img,
            servicesTitle:title
        }
        console.log(orderConfirm)
        fetch(`http://localhost:5000/bookings`,{
       method:"POST",
       headers:{
        'content-type': 'application/json'
       },
        body:JSON.stringify(orderConfirm)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('order confirmed')
            }
        })
    }


    return (
        <div>
            <h2 className="my-8 text-center text-4xl font-medium"> Book Service :{loadedServices.title} </h2>


            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleServiceOrder} className="card-body">
                    <div className="flex gap-10">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Customers Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder=" Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service price</span>
                            </label>
                            <input type="number" defaultValue={loadedServices.price} name="price" placeholder="service price" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service type</span>
                            </label>
                            <input type="text" name="type" placeholder="Service Type" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Order" className="btn btn-block" />
                    </div>
                </form>
            </div>
        </div>


    );
};

export default CheckOut;