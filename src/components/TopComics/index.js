import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaEye, FaHeart } from "../../assets/icon";
export default function TopComics({ item }) {
  return (
    <div>
      {/* item */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {item?.map((i, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="  group flex bg-[#182335] rounded-lg z-10  overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition duration-200
relative before:block before:absolute before:h-full before:bg-[#8bbadd] before:w-[3px] before:z-[-1]"
            >
              {/* infor */}
              <div className="">
                <div className="flex flex-col p-5 h-full justify-around">
                  <div className="flex flex-col">
                    <span className="text-[color:var(--sub-text)] mb-3">
                      Top Comics
                    </span>
                    <span className="text-white line-clamp-2">{i.title}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="line-clamp-2 text-[color:var(--sub-text)] text-sm my-4">
                      Hailed as the savior of the Japanese Police Department,
                      high school detective Shinichi Kudou uses a combination of
                      observational skills, critical thin...
                    </p>
                    <div className="text-[color:var(--sub-text)] flex items-center">
                      <span>
                        <FaEye className="mr-3" />
                        <b className="text-emerald-500">{i.total_views}</b>
                      </span>
                      <span className="ml-6">
                        <FaHeart className="mr-3" />
                        <b className="text-emerald-500">{i.followers}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative px-[90px] pb-[250px] rotate-[7deg] scale-110 left-5  transition duration-200 opacity-60 group-hover:rotate-[0deg] group-hover:opacity-100 ">
                <img
                  className="absolute top-0 left-0 w-full h-full   "
                  src={i.thumbnail}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
