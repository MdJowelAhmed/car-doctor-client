import { Link } from "react-router-dom";
import signUp from "../../assets/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value;
        const newUser={name,email,password}
        console.log(newUser)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={signUp} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-5xl font-bold">SignUp now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                               <input type="submit" value="SignUp" className="btn btn-success"/>
                            </div>
                        </form>
                        <h2 className="text-center">Do you have account? Please <Link className="text-xl text-blue-600 text-center" to='/login'>Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;