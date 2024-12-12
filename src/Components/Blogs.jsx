import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  AOS.init({
    offset: 150,
  });
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center mt-20 mb-10 ">
        Latest Blogs
      </h1>
      <div data-aos="fade-up" className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <SingleBlog  key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
