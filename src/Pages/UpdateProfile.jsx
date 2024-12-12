import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
  const { errorToast, updateUserProfile, successfulToast } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        successfulToast("profile updated");
        navigate(-1);
      })
      .catch((error) => errorToast(error.message));
  };
  return (
    <div className="min-h-screen flex justify-center items-center mb-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
        <h1 className="text-2xl font-bold text-center">
          Update Your Information
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
