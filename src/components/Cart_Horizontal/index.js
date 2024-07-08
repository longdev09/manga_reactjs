export default function CartHorizontal() {
  return (
    <div className="w-[500px]">
      <div className="bg-[var(--bg-item)] flex flex-row rounded-md">
        <div className="overflow-hidden">
          <div className="relative pr-[120px]">
            <img
              className="absolute"
              src="https://static.mangafire.to/i/f/f1/e39fd19fe104f6cb17a41e1aa7de819d.jpg"
            />
          </div>
        </div>

        <div className="px-5 py-4">
          <span className="text-[#3c8bc6]">Manga</span>
          <p className="line-clamp-1 text-white my-3">
            The Girl I Became Friends with after Lendin
          </p>
          <div>
            <div className=" my-2 cursor-pointer flex justify-between bg-[var(--color-main)] text-[color:var(--sub-text)] transition duration-300 text-xs px-2  py-1 rounded-md hover:text-white">
              <span>Chap 21 En</span>
              <span>7 minutes go</span>
            </div>
            <div className=" my-2 cursor-pointer flex justify-between bg-[var(--color-main)] text-[color:var(--sub-text)] transition duration-300 text-xs px-2  py-1 rounded-md hover:text-white">
              <span>Chap 21 En</span>
              <span>7 minutes go</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
