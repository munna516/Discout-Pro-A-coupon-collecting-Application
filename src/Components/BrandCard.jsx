import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const BrandCard = ({ item }) => {
  const { _id,isSaleOn, rating, category, brand_logo, description, brand_name } =
    item;
  AOS.init({ offset: 200 });

  return (
    <div
      data-aos="fade-up"
      className="lg:flex items-center border-2 rounded-xl py-5 space-y-3 px-3"
    >
      <div className="lg:flex-1 flex justify-center">
        <img className=" h-[300px] lg:w-full" src={brand_logo} alt="" />
      </div>

      <div className="lg:w-1/2 space-y-6 px-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl ">{brand_name}</h1>
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

        <h1 className="text-gray-400 ">{description}</h1>
        <div className="flex gap-10 items-center">
          <Link to={`/brands/${_id}`} className="btn btn-primary">View Coupon</Link>
          {isSaleOn && <p className="text-2xl saleText">Sale is on</p>}
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
