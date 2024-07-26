import Item from "antd/es/list/Item";
import ListComics from "../../components/ListComics";
import ListComicsHorizontal from "../../components/ListComicsHorizontal";
import TopComics from "../../components/TopComics";
import { useFetch } from "../../hooks";
import * as api from "../../services/api";
import { useState } from "react";

// constant
const subTextTop = ["Daily", "Weekly", "Monthly"];
const subTextStatus = ["All", "Completed", "Ongoing"];
export default function Home() {
  // top comics
  const [textTop, setTextTop] = useState(subTextTop[0]);
  
  const { data: topComics, loading: topLoading } = useFetch(
    api.getTopComics(textTop).path
  );
  const onClickTab = (item) => {
    setTextTop(item);
  };

  //recent-update
  const { data: recentUpdateComics, loading: recentUpdateComicsLoading } =
    useFetch(api.getRecentUpdateComics().path);

  return (
    <div>
      {/* new comic */}
      {/* <div className="bg-custom-image absolute bottom-0 top-0 left-0 right-0 z-[-1] bg-cover w-full opacity-45"></div>
      <div className="mt-6 ">
        <div className="p-4 2xl:container 2xl:mx-auto">
          <TopComics
            item={topComics?.sort(() => 0.5 - Math.random()).slice(0, 3)}
          />
        </div>
      </div>

      {/* list manga */}

      <div className="mt-6">
        <div className=" p-4 2xl:container 2xl:mx-auto ">
          <ListComics
            title={"Top Comics"}
            listItem={topComics?.comics}
            loading={topLoading}
            subText={subTextTop}
            onClickTab={(item) => onClickTab(item)}
          />

          <ListComicsHorizontal
            title={"Recently Updated"}
            listItem={recentUpdateComics?.comics}
          />
        </div>
      </div>
    </div>
  );
}
