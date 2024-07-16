import Button from "../../components/Button";
import { FaEye, FaHeart } from "../../assets/icon";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fechDetailComics } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import numeral from "numeral";

export default function Detail() {
  const dispatch = useDispatch();
  const { detailComics } = useSelector((state) => state.detailComics);
  const ulr = useParams();
  useEffect(() => {
    dispatch(fechDetailComics(ulr.comic_id));
  }, [dispatch]);

  return (
    <div>
      <div>
        {/* bg */}
        <div className="relative bg-[#0e1726] overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-full "
            style={{ filter: "grayscale(1)" }}
          >
            <img
              src={detailComics?.backup_thumb}
              className="object-fill w-full h-full opacity-[0.08]"
              style={{ filter: "blur(12px)" }}
            />
          </div>
          <div className=" 2xl:container 2xl:mx-auto px-4">
            <div className="py-12">
              <div className="flex text-white">
                <div className="w-[76%] mr-4 overflow-hidden">
                  <div className="flex">
                    <div className="overflow-hidden w-[500px]">
                      <div className="relative pb-[140%]">
                        <img
                          className="w-full h-full absolute  top-0 bottom-0 rounded-md "
                          src={detailComics?.thumbnail}
                        />
                      </div>
                    </div>

                    <div className="px-5">
                      <p className="text-[#8bbadd] tracking-[7px]">RELEASING</p>
                      <h2 className="text-2xl">{detailComics?.title}</h2>
                      <h6 className="text-sm text-[#8f96a0] py-3">
                        {detailComics?.description}
                      </h6>
                      <div className="flex flex-row items-center">
                        <Button className="mr-2">Start Reading</Button>
                        <Button>Book Mark</Button>
                      </div>
                      <div className="py-4">
                        <span>
                          <FaEye className="mr-3 text-yellow-500" />
                          <b className="text-emerald-500 ">
                            {numeral(detailComics?.total_views).format("0,0")}
                          </b>
                        </span>
                        <span className="ml-6">
                          <FaHeart className="mr-3 text-red-600" />
                          <b className="text-emerald-500">
                            {numeral(detailComics?.followers).format("0,0")}
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[24%]">
                  <div className="flex flex-col leading-7 text-sm ">
                    <div className="flex ">
                      <span className="text-[#747c88] mr-2">Authors:</span>
                      <span className="text-[#c6cacf]">
                        {detailComics?.authors}
                      </span>
                    </div>
                    <div className="flex ">
                      <span className="text-[#747c88] mr-2">Genres: </span>
                      <span className="text-[#c6cacf]">
                        {detailComics?.genres
                          ?.map((item, index) => (
                            <Link
                              className="hover:text-[var(--text-color-hover)] transition duration-300"
                              key={index}
                            >
                              {item.name}
                            </Link>
                          ))
                          .reduce((prev, curr) => [prev, ",    ", curr])}
                      </span>
                    </div>
                    <div className="flex ">
                      <span className="text-[#747c88] mr-2">Other names:</span>
                      <span className="text-[#c6cacf]">
                        {detailComics?.other_names}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#192436] rounded-lg border border-[#1e2c43] mt-4">
                    <div className="flex items-center  justify-between">
                      <div className="flex flex-col">
                        <span className="text-[25px]">9/ 10</span>
                        <span className="text-[#747c88] text-[14px]">
                          by 3,567 views
                        </span>
                      </div>
                      <div>
                        <Rate disabled value={3.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>{/* cont */}</div>
      </div>
    </div>
  );
}
