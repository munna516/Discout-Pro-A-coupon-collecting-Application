import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SingleBlog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { id, title, description, image } = blog;
  return (
    <>
      <div className="card card-compact bg-base-100 border-2 shadow-xl">
        <figure className="p-3">
          <img className="rounded-xl  max-h-64 w-full" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-400">{description.slice(0, 120)} ... </p>
          <div className="card-actions justify-end">
            <Link to={`/blog/${id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
