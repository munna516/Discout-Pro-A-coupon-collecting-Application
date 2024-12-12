import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const BlogDetails = () => {
  const data = useLoaderData();
  const location = useLocation();
  const id = location.pathname[location.pathname.length - 1];

  const blog = data.find((blog) => blog.id == id);
  const { title, description, image } = blog;

  return (
    <>
      <h1 className="text-5xl text-center font-extrabold mt-10 mb-10">
        Blog Details
      </h1>
      <div className="  mx-auto border-2 p-5 rounded-xl mb-10">
        <div className="mb-5">
          <img
            className="h-[500px] w-full rounded-lg mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl font-bold ">{title}</h1>
          <h1 className="text-gray-400">{description}</h1>
        </div>
        <div className="flex justify-end mt-8">
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
