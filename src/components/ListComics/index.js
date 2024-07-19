import Cart from "../Cart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { Skeleton } from "antd";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function ListComics({
  title,
  subText,
  listItem,
  loading,
  onClickTab,
}) {
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (item, index) => {
    setActiveTab(index);
    onClickTab(item);
  };
  return (
    <div className="my-3">
      <div className="text-white flex items-center justify-between">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex text-sm ">
          {subText?.map((item, index) => (
            <span
              onClick={() => handleActiveTab(item, index)}
              className={`mr-3 cursor-pointer hover:text-white transition duration-300} ${
                activeTab == index ? "text-[#3c8bc6]" : "text-[#838a9c]"
              }`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {loading ? (
          <Skeleton />
        ) : (
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={10}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
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
              <SwiperSlide className="pb-6">
                <Cart key={index} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
