//  sub panel

import { useSelector } from "react-redux";
import { FaChevronRight } from "../../assets/icon";
import Button from "../Button";
import { ListComment, TextAddComment } from "../Comment";
import { useParams } from "react-router-dom";

export default function PanelComment({ hPanel, handleHPanleComment }) {
  const url = useParams();

  console.log(url.comic_id);

  return (
    <div
      className={` ${
        hPanel ? "w-[60rem]" : "w-0"
      } absolute top-0 xl:top-[3.5rem] right-0 bottom-0 bg-[#0e1726] overflow-auto transition-all duration-300 z-50`}
    >
      {/* header */}
      <div className="text-sm bg-[#182335] px-5 py-2 flex items-center border-b-[1px] border-[#1e2c43]">
        <div className="text-[#8f96a0] cursor-pointer text-base  flex items-center bg-[#182335] flex-1">
          Comments
        </div>
        <Button
          onclick={handleHPanleComment}
          className="px-4 py-3 bg-[#1e2c43]"
        >
          <FaChevronRight className="text-[var(--sub-text)]" />
        </Button>
      </div>

      <div className="px-4">
        <div className="h-[100px]"></div>
        <div className="py-3 text-[#ffffffb3] border-b-[2px] border-[#c2c6cc]">
          <span>1 Comment</span>
        </div>
        <TextAddComment comic_id={url.comic_id} />
        <div>
          <ListComment />
        </div>
      </div>
    </div>
  );
}
