import swimming from "../assets/swimming.png"
import classroom from "../assets/class.png"
import playground from "../assets/playground.png"
const Qzone = () => {
    return (
        <div className="bg-base-200 p-2 rounded-lg">
            <h3 className="font-semibold mb-2">Q-Zone</h3>
            <div className="flex flex-col gap-5">
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;