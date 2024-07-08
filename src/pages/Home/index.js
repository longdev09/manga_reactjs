import Cart from "../../components/Cart";
import CartHorizontal from "../../components/Cart_Horizontal";

export default function Home() {
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
        <div className="container mx-auto px-4">
          <div>
            <div className="text-white flex items-center justify-between">
              <h2 className="text-2xl">Most Viewed</h2>
              <div className="flex text-sm">
                <span className="mr-3">Day</span>
                <span className="mr-3">Week</span>
                <span className="mr-3">Month</span>
              </div>
            </div>
            <div className="mt-6">
              <Cart />
            </div>
          </div>

          <div className="mt-10">
            <div className="text-white flex items-center justify-between">
              <h2 className="text-2xl">Recently Updated</h2>
              <div className="flex text-sm">
                <span className="mr-3">Manga</span>
                <span className="mr-3">Manhua</span>
                <span className="mr-3">Month</span>
              </div>
            </div>
            <div className="mt-10">
              <CartHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
