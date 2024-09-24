//  trang read comics
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "../../assets/icon";
import Button from "../../components/Button";
import { ChapterNavigation } from "../../components/Button_Helper";
import { LoadingSpinner } from "../../components/Loading";
import { ModalLogin } from "../../components/Modal";
import { PanelChapter } from "../../components/Panel";
import PanelComment from "../../components/Panel/PanelComment";
import SideBar from "../../components/Sidebar";
import { useFetch } from "../../hooks";
import { openModalLogin, closeModalLogin } from "../../redux/actions";
import * as api from "../../services/api";
import Header from "./Header";

export default function Read() {
  const url = useParams();

  const { data: singleChapter, loading } = useFetch(
    api.getSingleChapter(url.comic_id, url.chapter_id).path
  );
  const dispatch = useDispatch();
  const { isOpenModal } = useSelector((state) => state.authReducer);

  // an hien sider bar
  const [hidden, setHidden] = useState(true);
  const [hPanelChapter, setPanelChapter] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const [hPanelComment, setHPanelComment] = useState(false);

  const hiddenSiderBar = () => {
    setHidden(!hidden);
    setPanelChapter(false);
    setHPanelComment(false);
  };

  // chapter
  const handleChapter = () => {
    setPanelChapter(!hPanelChapter);
    setHPanelComment(false);
  };

  const handlePanelComment = () => {
    setHPanelComment(!hPanelComment);
    setPanelChapter(false);
  };

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const handleShowSubMenu = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };

  // su dung cho modal
  //  dang nhap voi gg

  // modal
  const openModal = () => {
    dispatch(openModalLogin());
  };
  const closeModal = () => {
    dispatch(closeModalLogin());
  };

  return (
    <div className="overflow-hidden ">
      <div className="bg-custom-image absolute bottom-0 top-0 left-0 right-0  z-[-1] bg-cover w-full opacity-45"></div>
      <Header
        hidden={hidden}
        isShowMenu={isShowMenu}
        isShowSubMenu={isShowSubMenu}
        handleShowMenu={handleShowMenu}
        handleShowSubMenu={handleShowSubMenu}
        hiddenSiderBar={hiddenSiderBar}
        openModal={openModal}
        singleChapter={singleChapter}
        url={url}
      />

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
                    z
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

          <PanelComment
            hPanel={hPanelComment}
            handleHPanleComment={handlePanelComment}
          />
        </div>

        {/* **************************end**************************** */}
        {/* sider-bar-menu */}
        <div
          className={`fixed top-0 right-0 z-30 text-white flex-initial w-[20rem] xl:relative  bg-[#0e1726] p-5 overflow-auto transition-all duration-300 ${
            hidden ? "mr-[-20rem]" : "mr-[0]"
          }  `}
          style={{ height: "calc(100vh - 2.5rem)" }}
        >
          <SideBar
            numberChapter={url.chapter_id}
            handleChapter={handleChapter}
            handleH={hiddenSiderBar}
            handlePanelComment={handlePanelComment}
            // handleHidenHeader={handleHidenHeader}
          />
        </div>
      </div>

      {/*  modal */}
      <ModalLogin modalIsOpen={isOpenModal} closeModal={closeModal} />
    </div>
  );
}
