import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className=" flex items-center gap-2 bg-base-200 p-2 my-3 lg:my-5">
            <p className="bg-[#D72050] text-base-100 p-1">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, cum!</Link>
                <Link  to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, cum!</Link>
          </Marquee>
        </div>
    );
};

export default LatestNews;