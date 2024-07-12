import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComics from "../../components/ListComics";
import ListComicsHorizontal from "../../components/ListComicsHorizontal";
import { fechGetTrendingCom, fechGetUpdateCom } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  const { trendingItem, loadingTrending } = useSelector(
    (state) => state.trendingComics
  );

  const { updateItem, loadingUpdate } = useSelector(
    (state) => state.updateComics
  );

  useEffect(() => {
    dispatch(fechGetTrendingCom());
    dispatch(fechGetUpdateCom());
  }, [dispatch]);

  return (
    <div>
      {/* top trend comic */}
      <div className="mt-6">
        <div className="container mx-auto px-4">
          <div className="flex">
            {/* item */}
            <div
              className=" flex bg-[#182335] rounded-lg w-[50%] z-10 overflow-hidden m-3
            relative before:block before:absolute before:h-full before:bg-[#8bbadd] before:w-[4px] before:z-[-1]"
            >
              {/* infor */}
              <div className="flex flex-col p-5">
                <div className="flex flex-col mb-8">
                  <span className="text-[color:var(--sub-text)]">
                    Releasing
                  </span>
                  <span className="text-white">Case Closed</span>
                </div>
                <div className="flex flex-col">
                  <p className="line-clamp-2 text-[color:var(--sub-text)] my-4">
                    Hailed as the savior of the Japanese Police Department, high
                    school detective Shinichi Kudou uses a combination of
                    observational skills, critical thin...
                  </p>
                  <span className="text-[color:var(--sub-text)]">
                    Chap 1128 - Vol 700
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 rotate-12">
                <img
                  className="absolute top-[-1rem]"
                  src="https://static.mangafire.to/i/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg"
                />
              </div>
            </div>
            <div
              className=" flex bg-[#182335] rounded-lg w-[50%] z-10 overflow-hidden m-3
            relative before:block before:absolute before:h-full before:bg-[#8bbadd] before:w-[4px] before:z-[-1]"
            >
              {/* infor */}
              <div className="flex flex-col p-5">
                <div className="flex flex-col mb-8">
                  <span className="text-[color:var(--sub-text)]">
                    Releasing
                  </span>
                  <span className="text-white">Case Closed</span>
                </div>
                <div className="flex flex-col">
                  <p className="line-clamp-2 text-[color:var(--sub-text)] my-4">
                    Hailed as the savior of the Japanese Police Department, high
                    school detective Shinichi Kudou uses a combination of
                    observational skills, critical thin...
                  </p>
                  <span className="text-[color:var(--sub-text)]">
                    Chap 1128 - Vol 700
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 rotate-12">
                <img
                  className="absolute top-[-1rem]"
                  src="https://static.mangafire.to/i/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg"
                />
              </div>
            </div>
            <div
              className=" flex bg-[#182335] rounded-lg w-[50%] z-10 overflow-hidden m-3
            relative before:block before:absolute before:h-full before:bg-[#8bbadd] before:w-[4px] before:z-[-1]"
            >
              {/* infor */}
              <div className="flex flex-col p-5">
                <div className="flex flex-col mb-8">
                  <span className="text-[color:var(--sub-text)]">
                    Releasing
                  </span>
                  <span className="text-white">Case Closed</span>
                </div>
                <div className="flex flex-col">
                  <p className="line-clamp-2 text-[color:var(--sub-text)] my-4">
                    Hailed as the savior of the Japanese Police Department, high
                    school detective Shinichi Kudou uses a combination of
                    observational skills, critical thin...
                  </p>
                  <span className="text-[color:var(--sub-text)]">
                    Chap 1128 - Vol 700
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 rotate-12">
                <img
                  className="absolute top-[-1rem]"
                  src="https://static.mangafire.to/i/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* list manga */}

      <div className="mt-6">
        <div className=" p-4 2xl:container 2xl:mx-auto ">
          <ListComics
            title={"Recommend Comics"}
            listItem={trendingItem}
            loading={loadingTrending}
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
