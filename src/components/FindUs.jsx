// import { FaFacebook } from "react-icons/fa";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
    return <div>
    <h3 className="font-semibold mb-2">Find Us On</h3>
    <div className="join flex join-vertical *:bg-base-100 ">
  <button className="btn w-full join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn w-full join-item justify-start"><FaXTwitter></FaXTwitter>Twitter</button>
  <button className="btn w-full join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
</div>
</div>;
};

export default FindUs;
