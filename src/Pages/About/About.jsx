import person from "../../assets/assets/images/about_us/person.jpg"
import parts from "../../assets/assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content relative flex-col lg:flex-row">
                   <div className="w-1/2">
                   <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                   <img src={parts} className="max-w-sm  absolute top-48 left-60 h-60 rounded-lg shadow-2xl" />
                   </div>
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">About us!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;