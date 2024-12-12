import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const {
    setUser,
    createNewUser,
    updateUserProfile,
    signInGoogle,
    successfulToast,
    errorToast,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInGoogle(googleProvider)
      .then((result) => {
        successfulToast("Successfully login with Google");
        navigate("/");
      })
      .catch((error) => errorToast(error.code));
  };
  // Handle Login Form
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters");
      return;
    }

    const regularExp = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]+$/;

    if (!regularExp.test(password)) {
      setErrorMessage("must have uppercase & lowercase");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result?.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            successfulToast("Registration Succcessful");
            navigate("/");
          })
          .catch((error) => {
            errorToast(error.code);
          });
      })
      .catch((error) => {
        errorToast("Email already use");
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center mb-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
        <h1 className="text-2xl font-bold text-center">
          Register a your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-lg absolute top-12 right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errorMessage && (
              <p className="mt-2 text-red-400 font-bold">{errorMessage}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="text-center mb-5 px-8">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-primary w-full"
          >
            Sign Up With{" "}
            <span className="text-xl text-white">
              <FcGoogle />
            </span>
          </button>
        </div>
        <h1 className="text-center">
          Already have account?{" "}
          <Link className="text-blue-400 font-bold" to="/login">
            Login
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Register;
