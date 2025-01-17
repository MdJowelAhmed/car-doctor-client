import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()

    const handleSignIn=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const newUser={email,password}
        // console.log(newUser)

        signIn(email,password)
        .then(result=>{
            const loggedInUser=result.user
            console.log(loggedInUser)
           
            const user={email}
            axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
            .then(res=>{
                console.log(res.data)
                if(res.data.success){
                     navigate(location?.state ? location?.state : '/')
                }
            })
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
                        <img className="mr-16" src={login} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input type="submit" value="SignIn" className="btn btn-success"/>
                            </div>
                        </form>
                        <h2 className="text-center">Do not any account? Please <Link className="text-xl text-blue-600 text-center" to='/signUp'>SignUp</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;