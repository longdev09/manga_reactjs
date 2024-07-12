import Cart from "../Cart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "antd";
import "swiper/css";

export default function ListComics({ title, subText, listItem, loading }) {
  return (
    <div>
      <div className="text-white flex items-center justify-between">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex text-sm">
          {subText?.map((item, index) => (
            <span className="mr-3" key={index}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {loading ? (
          <Skeleton />
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
          >
            {listItem?.map((item, index) => (
              <SwiperSlide>
                <Cart key={index} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
