import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrand = ({ data }) => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl">Top Brand</h1>
      <p className="text-gray-400 w-4/6 mx-auto text-center mt-4 mb-3">
        A top brand is a company or product line that is widely recognized,
        trusted, and preferred by consumers for its consistent delivery of
        quality, innovation, and value. Top brands are characterized by their
        strong market presence, exceptional branding strategies.
      </p>
      <Marquee pauseOnHover="true" speed={120}>
        <div className="flex items-center justify-center mt-10 mb-10">
          {data.map((item) => (
            <Link key={item._id} to={`/brands/${item._id}`}>
              <img
                className="h-52"
                src={item.brand_logo}
                alt=""
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrand;
