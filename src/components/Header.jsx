import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-3 ">
      <img
        className=" w-[250px] md:w-[350px] lg:w-[500px] mt-3 md:mt-5"
        src={logo}
        alt=""
      />
      <p className="text-gray-400 text-sm lg:text-base ">Journalism Without Fear or Favour</p>
      <p className="text-sm lg:text-base">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
