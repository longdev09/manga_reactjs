import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import { FaMagnifyingGlass } from "../../../assets/icon";
import Input from "../../../components/Input";
export default function Header() {
  return (
    <div className="border-b-[1px] border-[#1e2c43]">
      <div className="container mx-auto">
        <div className="flex items-center px-4">
          <Logo />
          <ul className=" flex items-center text-sm p-1  text-[#c6cacf]  ">
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
            <li className="px-4 py-1 hover:text-white">
              <Link>Types</Link>
            </li>
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
