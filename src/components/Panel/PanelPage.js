import { FaPlay } from "../../assets/icon";

export default function PanelPage({ hPanel, itemPage }) {
  return (
    <div
      className={` ${
        hPanel ? "w-[18rem]" : "w-0"
      } absolute top-[3.7rem] right-0 bottom-0 bg-[#0e1726]  overflow-auto transition-all duration-300`}
    >
      <div className="text-sm bg-[#182335] px-5 py-6 flex items-center border-b-[1px] border-[#1e2c43]"></div>
      {/* list chapter */}
      <ul>
        {itemPage?.map((item, index) => (
          <li
            key={index}
            className={`px-5 py-4 text-[#51565f] text-sm bg-[#141d2c] border-t-[1px]  border-[#182335] group hover:bg-[#162131] hover:text-[var(--text-color-hover)] transition duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span
                  className={`opacity-0 group-hover:opacity-100  group-hover:mr-2 group-hover:text-[var(--text-color-hover)] transition-all ease-in-out duration-300`}
                >
                  <FaPlay />
                </span>
                <span> Page {item.page}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
