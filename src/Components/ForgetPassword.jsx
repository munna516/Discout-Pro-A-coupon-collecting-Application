import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword, resetPassword, errorToast, successfulToast } =
    useContext(AuthContext);
  const handlePasswordReset = (e) => {
    e.preventDefault();
    resetPassword(forgetPassword)
      .then(() => {
        successfulToast("check email for reset password");
        window.open("https://mail.google.com/mail/u/", "_blank");
        navigate("/login");
      })
      .catch((error) => errorToast(error.code));
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h1 className="text-2xl font-bold text-center">Forget Password</h1>
          <form onSubmit={handlePasswordReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={forgetPassword}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
