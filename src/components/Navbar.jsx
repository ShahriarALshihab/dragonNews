import { NavLink } from "react-router-dom";
import "./Navbar.css"
import userIcon from "../assets/user.png";

const  Navbar = () => {
  return (
      <div className="flex justify-between items-center">
          <div>
             <NavLink to='/'><img className="h-10 w-full" src="https://i.ibb.co.com/GCX0K3N/depositphotos-122620866-stock-illustration-illustration-of-flat-icon.webp" alt="" /></NavLink>
          </div>
      <div className="space-x-3">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/career'> Career</NavLink>
          </div>
          <div className="flex gap-4">
              <div>
              <img src={userIcon} alt="" />
             </div>
              <button className="btn rounded-none bg-gray-700 text-white px-3">Login</button>
          </div>
    </div>
  );
};

export default Navbar;
