/* eslint-disable no-unused-vars */
/* /* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { googleSignIn,
    githubSignIn, loginUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
 
  const handleLogin = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setErrorMessage("Your password should be at least 6 character long.");
      return;
    }
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          const loggedInUser = result.user
          console.log(loggedInUser);
          navigate(from, { replace: true })
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };



  // Login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
       const user = result.user;
        console.log(user);
      })
      .catch((error) => {
       console.log(error)
      });
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
       console.log(error)
      });
  };


  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">
              <span className="font-bold">Error:</span> {errorMessage}
            </p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className=" text-center">
            <button
              type="submit"
              className="bg-blue-500 btn btn-wide  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
         <SocialLogin></SocialLogin>
          <p className="p-5 text-xl text-center">New to this website?<Link to="/register"><span className=" text-sky-600"> Register here...</span></Link></p>
        </form>
      </div>
    </>
  );
};

export default Login;
