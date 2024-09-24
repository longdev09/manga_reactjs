import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaCaretRight,
  FaChevronRight,
  FaList,
  FaUser,
} from "../../../assets/icon";
import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import SearchComics from "../../../components/SearchComics";
import { NAV_MENU, ITEM_MENU_USER } from "../../../constant";
import { useState } from "react";
export default function Header({
  hidden,
  isShowMenu,
  isShowSubMenu,
  handleShowMenu,
  handleShowSubMenu,
  hiddenSiderBar,
  openModal,
  singleChapter,
  url,
}) {
  const { profile } = useSelector((state) => state.authReducer);
  const [hMenu, setHMenu] = useState(false);

  const handleMenuProfile = () => {
    setHMenu(!hMenu);
  };

  return (
    <header
      className={`
        right-0 bg-[#0e1726] border-b-[1px] border-[rgb(30,44,67)] fixed z-10 left-0 transition-all duration-300 pro  ${
          hidden ? "xl:right-0" : "xl:right-[20rem]"
        }`}
    >
      <div className="flex items-center px-4">
        {/* sub item */}
        <div className="block 2xl:hidden">
          <FaBars
            onClick={handleShowMenu}
            className=" select-none text-[color:var(--sub-text)] transition duration-300 hover:text-white mr-5 cursor-pointer text-xl relative"
          />
          <ul
            className={`absolute bg-[#182335] text-[#8f96a0] z-20 py-1 rounded-md transition-all duration-300 ease-in-out transform ${
              isShowMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } origin-top`}
          >
            {NAV_MENU.header.map((item, index) => (
              <li className="block cursor-pointer  select-none" key={index}>
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
                      {/* {genres?.map((item, index) => (
                          <li key={index} className="text-sm select-none">
                            <Link className="transition duration-300 hover:text-white">
                              {item.name}
                            </Link>
                          </li>
                        ))} */}
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
        <ul className=" hidden 2xl:flex items-center text-sm p-1  text-[#c6cacf] ml-3">
          {NAV_MENU.header.map((item, index) => (
            <li key={index} className="px-4 py-1 hover:text-white">
              <Link>{item}</Link>
            </li>
          ))}
        </ul>

        <SearchComics />

        {/* nav - hien thi chap */}
        <div className="text-[13px] text-[#c0c4cf] md:text-sm flex items-center">
          <div className="flex flex-col justify-center sm:flex-row sm:items-center mr-3 ">
            <span className="mr-2">Chapter</span>
            <span className="font-medium">
              <b>{url.chapter_id}</b> /<b>{singleChapter?.chapters.length}</b>
            </span>
          </div>
        </div>

        {/* button nav header pc */}
        <div className="ml-5 flex">
          {/*  dang nhap */}

          {profile ? (
            <div className="text-[var(--sub-text)] flex items-center  mr-8">
              <div
                onClick={handleMenuProfile}
                className="flex items-center cursor-pointer relative"
              >
                <FaUser className="text-xl" />
              </div>

              <ul
                className={`absolute bg-[#182335] top-[45px] right-[124px] rounded-md py-1 ${
                  hMenu ? "block" : "hidden"
                }`}
              >
                {ITEM_MENU_USER.item.map((item) => (
                  <li className="select-none">
                    <Link className="px-4 py-2  text-sm group hover:bg-[#141d2c] transition duration-300 hover:text-[#3c8bc6] flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Button
              onclick={openModal}
              className="rounded-full p-3 mr-4 md:p-2 bg-[#5a9dcf] flex items-center"
            >
              <span className="hidden md:block">Login</span>
              <FaCaretRight className="ml-2 hidden md:block" />
              <FaUser className="block md:hidden" />
            </Button>
          )}

          <Button
            onclick={hiddenSiderBar}
            className="p-3 md:p-2  bg-[#5a9dcf]  flex items-center"
          >
            <FaList className=" md:mr-2" />
            <span className="hidden md:block">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
