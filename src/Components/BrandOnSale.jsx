import AOS from "aos";
import "aos/dist/aos.css";

const BrandOnSale = ({ data }) => {
  AOS.init({
    offset: 300,
  });

  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl mt-10 mb-3 ">
        Brand On Sale
      </h1>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.map((item) =>
          item.isSaleOn === true ? (
            <div
              data-aos="fade-up"
              key={item._id}
              className="card bg-base-100  mt-5 shadow-xl"
            >
              <figure>
                <img src={item.brand_logo} alt="Shoes" className="h-[200px]" />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-3xl">{item.brand_name}</h2>
                <p className="text-gray-400">
                  Total Coupons : <span className="font-extrabold">{item.coupons.length}</span>
                </p>
                <p className="text-gray-400">
                  Category :{" "}
                  <span className="text-blue-600 font-semibold">
                    {item.category}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default BrandOnSale;
