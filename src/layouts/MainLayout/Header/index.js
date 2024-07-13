import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import {
  FaMagnifyingGlass,
  FaBars,
  FaChevronRight,
} from "../../../assets/icon";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechGetGenres } from "../../../redux/actions";

const listMenu = ["Home", "Genres", "New", "Updated", "Completed"];

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleShowSubMenu = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };
  // get api
  const dispatchs = useDispatch();
  const { genres } = useSelector((state) => state.genresComics);

  useEffect(() => {
    dispatchs(fechGetGenres());
  }, []);

  return (
    <div className="border-b-[1px] border-[rgb(30,44,67)]">
      <div className="2xl:container 2xl:mx-auto">
        <div className="flex items-center px-4">
          {/* sub item */}
          <div className="block xl:hidden">
            <FaBars
              onClick={handleShowMenu}
              className=" text-[color:var(--sub-text)] transition duration-300 hover:text-white mr-5 cursor-pointer text-xl relative"
            />
            <ul
              className={`absolute bg-[#182335] text-[#8f96a0] z-20 py-1 rounded-md transition-all duration-300 ease-in-out transform ${
                isShowMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              } origin-top`}
            >
              {listMenu.map((item, index) => (
                <li className="block cursor-pointer " key={index}>
                  {item == "Genres" ? (
                    <>
                      <div
                        onClick={handleShowSubMenu}
                        className="block px-3 py-2  text-sm group hover:bg-[#141d2c] transition duration-300 hover:text-[#3c8bc6]"
                      >
                        <FaChevronRight className=" text-xs mr-3 transition duration-300 group-hover:translate-x-1" />
                        {item}
                      </div>
                      <ul
                        className={`p-4 grid grid-cols-3 gap-2 ${
                          isShowSubMenu ? "block" : "hidden"
                        }`}
                      >
                        {genres?.map((item, index) => (
                          <li key={index} className="text-sm">
                            <Link>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link className="block px-3 py-2  text-sm group hover:bg-[#141d2c] transition duration-300 hover:text-[#3c8bc6]">
                      <FaChevronRight className=" text-xs mr-3 transition duration-300 group-hover:translate-x-1" />
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Logo />
          <ul className=" hidden xl:flex items-center text-sm p-1  text-[#c6cacf]  ml-3">
            {listMenu.map((item, index) => (
              <li key={index} className="px-4 py-1 hover:text-white">
                <Link>{item}</Link>
              </li>
            ))}
          </ul>

          {/*  search */}
          <div className="flex-1 ml-5">
            <div className="flex items-center text-white border  border-solid border-[#1e2c43] px-2 h-9 rounded-xl bg-[#182335]">
              <FaMagnifyingGlass className="cursor-pointer" />
              <Input
                placeholder={"Tìm bất cứ truyện gì ..."}
                className="no-focus bg-[#182335] ml-[15px] text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
