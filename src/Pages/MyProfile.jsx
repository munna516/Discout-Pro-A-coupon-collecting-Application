import { useContext } from "react";
import bg_img from "../assets/cool-background.png";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg_img})` }}
        className="mt-10 bg-cover bg-center h-72 rounded-xl flex items-center justify-center mb-5 p-5 text-center"
      >
        <p className="text-5xl font-bold ">Welcome {user?.displayName}</p>
      </div>

      <div className="card bg-base-100 md:w-[50%] mx-auto mb-10 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-xl w-[30%]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p className="text-gray-400 text-center">{user?.email}</p>
          <div className="card-actions mt-5">
            <Link to="/my-profile/update" className="btn btn-primary">
              Update profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
