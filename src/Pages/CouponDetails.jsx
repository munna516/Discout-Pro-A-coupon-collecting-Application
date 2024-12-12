import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import CouponDetailsCard from "../Components/CouponDetailsCard";

const CouponDetails = () => {
  const data = useLoaderData();
  const location = useLocation();
  const id = location.pathname[location.pathname.length - 1];
  const item = data.find((item) => item._id == id);
  const { rating, brand_logo, brand_name, coupons, shop_Link } = item;
  return (
    <div className="">
      <div className="flex flex-col justify-center gap-3">
        <div className="flex justify-center">
          <img className="h-[300px] " src={brand_logo} alt="" />
        </div>
        <div className="flex justify-around">
          <h1 className="text-3xl font-bold">{brand_name}</h1>
          <p>
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              starEmptyColor="gray"
              starDimension="20px"
              starSpacing="2px"
              numberOfStars={5}
              name="rating"
            />
            <span className="text-xl ml-2 text-gray-400">({rating})</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {coupons.map((coupon) => (
          <CouponDetailsCard
            coupon={coupon}
            shop_Link={shop_Link}
          ></CouponDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default CouponDetails;
