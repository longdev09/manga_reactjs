//  sub panel
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass, FaPlay, FaChevronRight } from "../../assets/icon";
import routes from "../../config/routes";
import { useFilter } from "../../hooks";
import Input from "../Input";
import Button from "../Button";

export default function PanelChapter({
  hPanel,
  data,
  comic_id,
  chapter_id,
  handlePanel,
}) {
  //search item panel
  const [textSearch, setTextSearch] = useState("");

  const handleSearch = (value) => {
    setTextSearch(value);
  };

  const { filterSearch } = useFilter({ textSearch, data, quantity: "final" });

  return (
    <div
      className={` ${
        hPanel ? "w-[20rem]" : "w-0"
      } absolute top-0 xl:top-[3.5rem] right-0 bottom-0 bg-[#0e1726]  overflow-auto transition-all duration-300 z-50`}
    >
      <div className="text-sm bg-[#182335] px-5 py-2 flex items-center border-b-[1px] border-[#1e2c43]">
        <div className="text-[#8f96a0] cursor-pointer text-base  flex items-center bg-[#182335] flex-1">
          <FaMagnifyingGlass className="mr-2" />
          <Input
            onChange={(value) => handleSearch(value)}
            placeholder={"Chapter number ..."}
            className="text-[#8f96a0] text-[12px] outline-none bg-[#182335] no-focus "
          />
        </div>
        <Button onclick={handlePanel} className="px-4 py-3 bg-[#1e2c43]">
          <FaChevronRight className="text-[var(--sub-text)]" />
        </Button>
      </div>
      {/* list chapter */}
      <ul className="">
        {filterSearch?.map((item, index) => (
          <li
            key={index}
            className={`${
              item.id == chapter_id
                ? "bg-[#162131] text-[var(--text-color-hover)] "
                : ""
            }
            px-5 py-4 text-[#51565f] text-sm bg-[#141d2c] border-t-[1px]  border-[#182335] group hover:bg-[#162131] hover:text-[var(--text-color-hover)] transition duration-300`}
          >
            <Link
              to={routes.read
                .replace(":comic_id", comic_id)
                .replace(":chapter_id", item.id)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <span
                  className={`
                    ${
                      item.id == chapter_id ? "opacity-100 mr-2" : ""
                    } opacity-0 group-hover:opacity-100  group-hover:mr-2 group-hover:text-[var(--text-color-hover)] transition-all ease-in-out duration-300`}
                >
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
    </div>
  );
}
