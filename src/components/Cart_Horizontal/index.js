export default function CartHorizontal({ item }) {
  return (
    <div className="p-2 2xl:w-[33.3333333333%]   md:w-[50%] sm:w-full w-full">
      <div className="bg-[var(--bg-item)] flex flex-row rounded-md ">
        <div className="overflow-hidden  w-[190px]">
          <div className="relative pb-[183px]">
            <img
              className="absolute w-full h-full rounded-md "
              src={item?.thumbnail}
            />
          </div>
        </div>

        <div className="px-4 py-4 w-full">
          <span className="text-[#3c8bc6]">Manga</span>
          <p className="line-clamp-1 text-white my-3 text-sm">{item?.title}</p>
          <div>
            {item.last_chapters?.map((item, index) => (
              <div
                key={index}
                className=" my-1 cursor-pointer flex justify-between bg-[var(--color-main)] text-[color:var(--sub-text)] transition duration-300 text-xs px-2  py-1 rounded-md hover:text-white"
              >
                <span className="line-clamp-1">{item.name}</span>
                <span className="line-clamp-1">{item.updated_at}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
