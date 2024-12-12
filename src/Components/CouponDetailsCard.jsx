import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AuthContext } from "../Provider/AuthProvider";


const CouponDetailsCard = ({ coupon, shop_Link }) => {
  const {
    coupon_code,
    description,
    expiry_date,
    condition,
    coupon_type,
  } = coupon;
  const {successfulToast} = useContext(AuthContext)
  const [isCopied, setIsCopied] = useState(false);

  const handleBtn = () => {
    window.open(shop_Link, "_blank");
  };

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <>
      <div className="card bg-base-100  shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-red-500">
            {coupon_code}
          </h2>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-400">Expire-Date : {expiry_date}</p>
          <p className="text-gray-400">{condition}</p>
          <p className="text-gray-400 font-bold">{coupon_type}</p>
          <div className="card-actions mt-5">
            <CopyToClipboard text={coupon_code} onCopy={handleCopy}>
              <button
                onClick={() =>successfulToast("code copied")}
                className="btn btn-primary"
              >
                Copy code
              </button>
            </CopyToClipboard>

            <button onClick={handleBtn} className="btn btn-primary">
              Use Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetailsCard;
