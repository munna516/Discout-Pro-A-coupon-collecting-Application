import { useContext } from "react";
import { IoMdMail } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";

const SubscribeForCoupon = () => {
  const { successfulToast, errorToast } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      errorToast("please enter the email");
      return
    } else {
      successfulToast("Subscription done");
      e.target.email.value = "";
    }
  };
  return (
    <>
      <div className="mt-20 mb-20 text-center">
        <div className="text-7xl text-blue-400 flex justify-center text-center">
          <IoMdMail />
        </div>
        <p className="font-bold text-xl md:w-1/3 mx-auto mt-5">
          Subscribe to have new coupon lists delivered directly to your inbox
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 flex justify-center gap-3">
            <input
              type="email"
              name="email"
              placeholder="type your email here"
              className="input input-bordered w-full max-w-lg"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </form>
        <p className="text-gray-400 mt-5">
          We do not send spam or share your mail with third parties
        </p>
      </div>
    </>
  );
};

export default SubscribeForCoupon;
