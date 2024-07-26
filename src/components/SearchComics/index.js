import { FaMagnifyingGlass } from "../../assets/icon";
import Input from "../Input";

export default function SearchComics() {
  return (
    <div className="flex-1 mx-5">
      <div className="flex text-[color:var(--sub-text)] items-center justify-end md:hidden">
        <FaMagnifyingGlass className="cursor-pointer text-xl" />
      </div>
      <div className="hidden md:flex items-center text-[color:var(--sub-text)] border  border-solid border-[#1e2c43] px-2 h-9 rounded-xl bg-[#182335]">
        <FaMagnifyingGlass className="cursor-pointer" />
        <Input
          placeholder={"Tìm bất cứ truyện gì ..."}
          className="no-focus bg-[#182335] ml-[15px] text-sm "
        />
      </div>
    </div>
  );
}
