//  trang read comics
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCaretRight,
  FaList,
  FaBars,
  FaChevronRight,
  FaUser,
} from "../../assets/icon";
import Button from "../../components/Button";
import { ChapterNavigation } from "../../components/Button_Helper";
import Logo from "../../components/Logo";
import { PanelChapter, PanelPage } from "../../components/Panel";
import SearchComics from "../../components/SearchComics";
import SideBar from "../../components/Sidebar";
import { NAV_MENU } from "../../constant";
import { useFetch } from "../../hooks";
import * as api from "../../services/api";
import { LoadingSpinner } from "../../components/Loading";
export default function Read() {
  const url = useParams();

  const { data: singleChapter, loading } = useFetch(
    api.getSingleChapter(url.comic_id, url.chapter_id).path
  );

  // an hien sider bar
  const [hidden, setHidden] = useState(true);
  const [hPanelChapter, setPanelChapter] = useState(false);

  const hiddenSiderBar = () => {
    setHidden(!hidden);
    setPanelChapter(false);
  };

  // chapter
  const handleChapter = () => {
    setPanelChapter(!hPanelChapter);
  };

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleShowSubMenu = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-custom-image absolute bottom-0 top-0 left-0 right-0  z-[-1] bg-cover w-full opacity-45"></div>
      <header
        className={`
        right-0 bg-[#0e1726] border-b-[1px] border-[rgb(30,44,67)] fixed z-20 left-0 transition-all duration-300 pro  ${
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
            <Button className="rounded-full p-3 mr-4 md:p-2 bg-[#5a9dcf] flex items-center">
              <span className="hidden md:block">Login</span>
              <FaCaretRight className="ml-2 hidden md:block" />
              <FaUser className="block md:hidden" />
            </Button>
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

      <div className=" flex relative">
        {/* content */}

        {/* list truyen */}
        <div className="flex-1 pt-14 overflow-hidden relative ">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="block overflow-auto w-full "
              style={{ height: "calc(100vh - 3.5rem)" }}
            >
              <div className="block">
                {singleChapter?.images.map((item, index) => (
                  <div key={index} className="flex justify-center mb-3">
                    <img
                      loading="lazy"
                      src={`https://comics-api.vercel.app${item.src}`}
                    />
                  </div>
                ))}
              </div>

              {url.chapter_id == 1 ? (
                // {/* next */}
                <div className="flex justify-center my-7">
                  <ChapterNavigation
                    direction={1}
                    className=" bg-[#5a9dcf] p-2"
                  >
                    Next Chapter <FaArrowRight className="ml-2" />
                  </ChapterNavigation>
                </div>
              ) : url.chapter_id == singleChapter?.chapters.length ? (
                // prev
                <div className="flex justify-center my-7">
                  <ChapterNavigation direction={-1} className="p-2">
                    <FaArrowLeft className="mr-2" />
                    Previous Chapter
                  </ChapterNavigation>
                </div>
              ) : (
                // next va prev
                <div className="flex justify-center items-center flex-col my-7">
                  <ChapterNavigation direction={-1} className="p-2 mb-4">
                    <FaArrowLeft className="mr-2" />
                    Previous Chapter
                  </ChapterNavigation>

                  <ChapterNavigation
                    direction={1}
                    className=" bg-[#5a9dcf] p-2"
                  >
                    Next Chapter <FaArrowRight className="ml-2" />
                  </ChapterNavigation>
                </div>
              )}
            </div>
          )}

          <PanelChapter
            hPanel={hPanelChapter}
            data={singleChapter?.chapters}
            comic_id={url.comic_id}
            chapter_id={url.chapter_id}
            handlePanel={handleChapter}
          />
        </div>

        {/* **************************end**************************** */}
        {/* sider-bar-menu */}
        <div
          className={`fixed top-0 right-0 z-30   text-white flex-initial w-[20rem] xl:relative  bg-[#0e1726] p-5 overflow-auto transition-all duration-300 ${
            hidden ? "mr-[-20rem]" : "mr-[0]"
          }  `}
          style={{ height: "calc(100vh - 1.5rem)" }}
        >
          <SideBar
            numberChapter={url.chapter_id}
            handleChapter={handleChapter}
            handleH={hiddenSiderBar}
            // handleHidenHeader={handleHidenHeader}
          />
        </div>
      </div>
    </div>
  );
}
