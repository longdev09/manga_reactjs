import { Link } from "react-router-dom";
import config from "../../config";

export default function Cart({ item }) {
  return (
    <Link to={config.detail.replace(":comic_id", item?.id)}>
      <div className="bg-[#1e2c43] rounded-md group cursor-pointer hover:bg-[#283a58]">
        <div className="overflow-hidden">
          <div className="relative pb-[140%]">
            <img
              className="rounded-md absolute transition-transform duration-300 transform group-hover:scale-110 h-full w-full"
              src={item?.thumbnail}
            />
          </div>
        </div>
        <div className="px-3 py-3 flex items-center justify-center text-white ">
          <span className="text-[14px] line-clamp-1">{item?.title}</span>
        </div>
      </div>
    </Link>
  );
}
