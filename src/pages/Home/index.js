import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComics from "../../components/ListComics";
import ListComicsHorizontal from "../../components/ListComicsHorizontal";
import { fechHome } from "../../redux/actions";
import TopComics from "../../components/TopComics";

export default function Home() {
  const dispatch = useDispatch();

  const { trendingItem, updateItem, topItem, loading } = useSelector(
    (state) => state.homeComics
  );

  useEffect(() => {
    dispatch(fechHome());
  }, [dispatch]);

  return (
    <div>
      {/* top trend comic */}
      <div className="bg-custom-image absolute bottom-0 top-0 left-0 right-0 z-[-1] bg-cover w-full opacity-45"></div>
      <div className="mt-6 ">
        <div className="p-4 2xl:container 2xl:mx-auto">
          <TopComics
            item={topItem?.sort(() => 0.5 - Math.random()).slice(0, 3)}
          />
        </div>
      </div>

      {/* list manga */}

      <div className="mt-6">
        <div className=" p-4 2xl:container 2xl:mx-auto ">
          <ListComics
            title={"Recommend Comics"}
            listItem={trendingItem}
            loading={loading}
          />

          <ListComicsHorizontal
            title={"Recently Updated"}
            listItem={updateItem}
          />
        </div>
      </div>
    </div>
  );
}
