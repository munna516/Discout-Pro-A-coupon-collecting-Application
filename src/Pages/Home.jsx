import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TopBrand from "../Components/TopBrand";
import BrandOnSale from "../Components/BrandOnSale";
import Blogs from "../Components/Blogs";
import SubscribeForCoupon from "../Components/SubscribeForCoupon";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <TopBrand data={data}></TopBrand>
      <BrandOnSale data={data}></BrandOnSale>
      <Blogs></Blogs>
      <SubscribeForCoupon></SubscribeForCoupon>
    </div>
  );
};

export default Home;
