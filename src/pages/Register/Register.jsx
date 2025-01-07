import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Google from "../shared/Google";

const Register = () => {

  const {createUser}=useContext(AuthContext)

   const handleRegister= e => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)


    createUser(email, password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
   }

    return (
        <div className="hero bg-gray-50  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[40%] ">
           <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-4xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider">OR</div>
           <div>
           <Google></Google>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Register;