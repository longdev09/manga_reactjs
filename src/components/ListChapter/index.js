import { Link } from "react-router-dom";
import { FaEye, FaPlay } from "../../assets/icon";
export default function ListChapter({ list }) {
  return (
    <ul className="overflow-auto h-[500px] rounded-b-lg ">
      {list?.map((item, index) => (
        <li
          key={index}
          className="px-5 py-4 text-[#51565f] text-sm bg-[#141d2c] border-t-[1px]  border-[#182335] group hover:bg-[#162131] hover:text-[var(--text-color-hover)] transition duration-300"
        >
          <Link className="flex items-center justify-between ">
            <div className="flex items-center">
              <span className="opacity-0 group-hover:opacity-100  group-hover:mr-2 group-hover:text-[var(--text-color-hover)] transition-all ease-in-out duration-300">
                <FaPlay />
              </span>
              <span>{item.name}</span>
            </div>
            <div className="flex items-center">
              <span>{item.updated_at}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
