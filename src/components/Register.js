import {useState} from "react";
import { useForm } from "react-hook-form";
// import {login} from "../api/auth";


const Login = () => {
  const [email, setEmail] = useState("sss@gmail.com");
  const [password, setPassword] = useState("ss@3");
  let {register, handleSubmit, formState:{errors}} = useForm()

  let onFormSubmit = (usersCredentialObj)=>{
    console.log(usersCredentialObj)
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit(onFormSubmit)}>
          <h2>Register</h2>
            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control w-75 mx-auto"
                {...register("firstname", {required:true})}
                placeholder="Your first name"
                autoFocus
              />
              {errors.firstname?.type==='required'&&<p className="text-danger ms-0">*first name required</p>}
             
            </div>

            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control w-75 mx-auto"
                {...register("lastname", {required:true})}
                placeholder="Your last name"
                autoFocus
              />
              {errors.lastname?.type==='required'&&<p className="text-danger ms-0">*last name required</p>}
             
            </div>

            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control w-75 mx-auto"
                {...register("mobileno", {required:true})}
                placeholder="Your Mobile Number"
                autoFocus
              />
              {errors.mobileno?.type==='required'&&<p className="text-danger ms-0">*Mobile Number required</p>}
             
            </div>
            <div className="form-group text-start ms-5 ps-lg-4">
                <p>Select Gender:</p>
                    <input
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        value="male"
                    /> Male<br/>
                    <input
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        value="female"
                    /> Female<br/>
                    <input
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        value="others"
                    /> others
            </div>

            <div className="form-group mt-4 mb-4">
              <input
                type="email"
                className="form-control w-75 mx-auto"
                {...register("email", {required:true})}
                placeholder="Your email"
                autoFocus
              />
              {errors.email?.type==='required'&&<p className="text-danger ms-0">*Email required</p>}
             
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control w-75 mx-auto"
                {...register("password", {required:true})}
                placeholder="Your password"
              />
              {errors.password?.type==='required'&&<p className="text-danger">*Password required</p>}
              
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control w-75 mx-auto mt-4"
                {...register("confirmpassword", {required:true})}
                placeholder="Confirm password"
              />
              {errors.confirmpassword?.type==='required'&&<p className="text-danger">*Confirm Password required</p>}
              
            </div>

            <button
              
              type="submit"
              className="mb-3 btn btn-primary lead mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    // <>dfdgdfgrg</>
  );
};

export default Login;