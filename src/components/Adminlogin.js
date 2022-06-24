import {useState} from "react";
import { useForm } from "react-hook-form";
// import {login} from "../api/auth";


const Login = () => {
  const [id, setId] = useState("E234856");
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
          <h2>Login</h2>
          <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control w-75 mx-auto"
                {...register("id", {required:true})}
                placeholder="Your ID"
                autoFocus
              />
              {errors.id?.type==='required'&&<p className="text-danger ">*ID required</p>}
             
            </div>

            <div className="form-group mt-4 mb-4">
              <input
                type="email"
                className="form-control w-75 mx-auto"
                {...register("email", {required:true})}
                placeholder="Your email"
                autoFocus
              />
              {errors.email?.type==='required'&&<p className="text-danger ">*Email required</p>}
             
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