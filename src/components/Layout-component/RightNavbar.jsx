import Advertisement from "../Advertisement";
import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <SocialLogin></SocialLogin>
      </div>
      <div>
        <FindUs></FindUs>
      </div>
      <div>
        <Qzone></Qzone>
          </div>
          <div className="h-72 w-full flex items-center justify-center border rounded-lg">
              <Advertisement></Advertisement>
          </div>
    </div>
  );
};

export default RightNavbar;
