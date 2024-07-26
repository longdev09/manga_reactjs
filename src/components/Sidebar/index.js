import {
  FaHurricane,
  FaLanguage,
  FaComment,
  FaBookmark,
  FaInfo,
  FaSquare,
  FaChevronLeft,
  FaChevronRight,
  FaArrowDownUpAcrossLine,
} from "../../assets/icon";
import Button from "../Button";
import { ChapterNavigation } from "../Button_Helper";

export default function SideBar({ numberChapter, handleChapter, handleH }) {
  //   cac su kien

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="line-clamp-2">
          Ano Toki Tasukete Itadaita Monster Musume Desu.
        </span>
        <Button onclick={handleH} className="px-4 py-3 bg-[#182334]">
          <FaChevronRight className="text-[var(--sub-text)]" />
        </Button>
      </div>
      {/* doc theo cai gi */}
      <Button
        className="px-4 py-3  my-3 bg-[#182334] flex justify-between items-center"
        icon={<FaHurricane className="text-2xl" />}
      >
        <div className="flex flex-col leading-8 justify-center">
          <p className="text-[var(--sub-text)] text-sm">You are reading</p>
          <p className="text-[var(--sub-text-blue)] text-base">by Chapter</p>
        </div>
      </Button>

      {/* Ngon ngu */}
      <Button className=" px-4 py-3 my-3 bg-[#182334]">
        <FaLanguage className="text-[var(--sub-text)]" />
        <span className="mx-2 text-[var(--sub-text)]">Language :</span>
        <span>VN</span>
      </Button>

      {/* btn chapter */}
      {/* done */}
      <div className="flex justify-around my-3 ">
        <ChapterNavigation
          className=" bg-[#182334] flex-none px-4 py-3 "
          direction={-1}
        >
          <FaChevronLeft className="text-[var(--sub-text)]" />
        </ChapterNavigation>
        <Button
          onclick={handleChapter}
          className="flex-1 mx-2 px-5 flex justify-between bg-[#182334]"
        >
          Chapter {numberChapter}
          <FaArrowDownUpAcrossLine className="text-[var(--sub-text)]" />
        </Button>
        <ChapterNavigation
          className=" bg-[#182334] flex-none px-4 py-3 "
          direction={1}
        >
          <FaChevronRight className="text-[var(--sub-text)]" />
        </ChapterNavigation>
      </div>

      {/**************** */}

      {/* Binh Luan   */}
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <FaComment />
        <span>Comment</span>
      </Button>

      {/* Lưu xem sau   */}
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <FaBookmark />
        <span className="ml-3">Bookmark</span>
      </Button>

      {/* Xem chi tiet truyen  */}
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <FaInfo />
        <span>Comics detail</span>
      </Button>

      {/* ************************************************************* */}

      {/* an header   */}
      <Button className="bg-[#182334] px-4 py-3  mb-3 mt-3 flex items-center justify-between">
        <span>Chờ cập nhật</span>
        <FaSquare />
      </Button>

      {/* long strip */}
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <span>Chờ cập nhật</span>
        <FaSquare />
      </Button>
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <span>Chờ cập nhật</span>
        <FaSquare />
      </Button>
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <span>Chờ cập nhật</span>
        <FaSquare />
      </Button>
      <Button className="bg-[#182334] px-4 py-3  mb-3 flex items-center justify-between">
        <span>Chờ cập nhật</span>
        <FaSquare />
      </Button>
    </div>
  );
}
