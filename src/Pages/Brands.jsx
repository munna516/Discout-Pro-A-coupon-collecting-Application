import { useLoaderData } from "react-router-dom";
import BrandCard from "../Components/BrandCard";


const Brands = () => {
  const data = useLoaderData();
 
  return (
    <>
      <div className="flex my-10 justify-between items-center">
        <h1 className="text-xl lg:text-4xl font-bold">Brands where you apply coupon</h1>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="space-y-5 pb-10">
        {data.map((item) => (
          <BrandCard data-aos='fade-up' key={item._id} item={item}></BrandCard>
        ))}
      </div>
    </>
  );
};

export default Brands;
