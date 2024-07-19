//  trang read comics
import { NAV_MENU } from "../../constant";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import SearchComics from "../../components/SearchComics";
import Button from "../../components/Button";
export default function Read() {
  return (
    <div>
      <div className="bg-custom-image absolute bottom-0 top-0 left-0 right-0 z-[-1] bg-cover w-full opacity-45"></div>

      <header className="bg-[#0e1726] border-b-[1px] border-[rgb(30,44,67)]">
        <div className="flex items-center px-4">
          <Logo />
          <ul className=" hidden xl:flex items-center text-sm p-1  text-[#c6cacf] ml-3">
            {NAV_MENU.header.map((item, index) => (
              <li key={index} className="px-4 py-1 hover:text-white">
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
          <SearchComics />

          {/* nav - hien thi chap */}
          <div className="text-[#c0c4cf] text-sm flex items-center">
            <div className="flex items-center mr-3">
              <span className="mr-2">Chapter</span>
              <span className="font-medium">
                <b>100</b> / <b>100</b>
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Page</span>
              <span className="font-medium">
                <b>100</b> / <b>100</b>
              </span>
            </div>
          </div>

          {/* button nav */}
          <div className="ml-5">
            <Button className="mr-4">Login</Button>
            <Button>Menu</Button>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* content */}
        <div>
          {/* list truyen */}
          <div className="flex flex-col justify-center overflow-auto scrollbar-custom">
            <div className="flex justify-center mb-3">
              <img src="https://comics-api.vercel.app/images?src=https://dtcdnyacd.com/nettruyen/co-gai-nguoi-y-va-cuoc-song-tu-do/1/1.jpg" />
            </div>
            <div className="flex justify-center">
              <img src="https://comics-api.vercel.app/images?src=https://dtcdnyacd.com/nettruyen/co-gai-nguoi-y-va-cuoc-song-tu-do/1/2.jpg" />
            </div>
          </div>
        </div>

        {/* sider-bar-menu */}
        <div className="text-white">sdasdasdadasdasdasdasd</div>
      </div>
    </div>
  );
}
