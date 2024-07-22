import {
  FaHurricane,
  FaLanguage,
  FaComment,
  FaBookmark,
  FaInfo,
  FaSquare,
} from "../../assets/icon";
import Button from "../Button";

export default function SideBar() {
  return (
    <div
      className=" text-white flex-initial w-[22rem] relative z-10 bg-[#0e1726] p-5 overflow-auto "
      style={{ height: "calc(100vh - 1.5rem)" }}
    >
      <div className="flex flex-col">
        <div className="line-clamp-2">
          Ano Toki Tasukete Itadaita Monster Musume Desu.
        </div>
        {/* doc theo cai gi */}
        <Button
          className="my-3 bg-[#182334] flex justify-between items-center"
          icon={<FaHurricane className="text-2xl" />}
        >
          <div className="flex flex-col leading-8 justify-center">
            <p className="text-[var(--sub-text)] text-sm">You are reading</p>
            <p className="text-[var(--sub-text-blue)] text-base">by Chapter</p>
          </div>
        </Button>

        {/* Ngon ngu */}
        <Button className="my-3 bg-[#182334]">
          <FaLanguage className="text-[var(--sub-text)]" />
          <span className="mx-2 text-[var(--sub-text)]">Language :</span>
          <span>VN</span>
        </Button>

        {/* btn page */}
        <div className="flex justify-around ">
          <Button className="flex-none  bg-[#182334]">ss</Button>
          <Button className="flex-1 mx-2 bg-[#182334]">Page</Button>
          <Button className="flex-none  bg-[#182334]">ss</Button>
        </div>

        {/* btn chapter */}

        <div className="flex justify-around my-3 ">
          <Button className="flex-none  bg-[#182334]">ss</Button>
          <Button className="flex-1 mx-2 bg-[#182334]">Chapter</Button>
          <Button className="flex-none  bg-[#182334]">ss</Button>
        </div>

        {/* Binh Luan   */}
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <FaComment />
          <span>Comment</span>
        </Button>

        {/* Lưu xem sau   */}
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <FaBookmark />
          <span className="ml-3">Bookmark</span>
        </Button>

        {/* Lưu xem sau   */}
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <FaBookmark />
          <span>Bookmark</span>
        </Button>

        {/* Xem chi tiet truyen  */}
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <FaInfo />
          <span>Comics detail</span>
        </Button>

        {/* ************************************************************* */}

        {/* an header   */}
        <Button className="bg-[#182334] mb-3 mt-3 flex items-center justify-between">
          <span>Header Sticky</span>
          <FaSquare />
        </Button>

        {/* long strip */}
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <span>Long Strip</span>
          <FaSquare />
        </Button>
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <span>Long Strip</span>
          <FaSquare />
        </Button>
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <span>Long Strip</span>
          <FaSquare />
        </Button>
        <Button className="bg-[#182334] mb-3 flex items-center justify-between">
          <span>Long Strip</span>
          <FaSquare />
        </Button>
      </div>
    </div>
  );
}
