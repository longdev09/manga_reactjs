export default function Cart() {
  return (
    <div className="w-[200px]">
      <div className="bg-[#1e2c43] rounded-md group cursor-pointer hover:bg-[#283a58]">
        <div className="overflow-hidden">
          <div className="relative pb-[290px]">
            <img
              className="rounded-md absolute transition-transform duration-300 transform group-hover:scale-110"
              src="https://static.mangafire.to/i/7/77/4b8bbc4d9998989d7b55aadefcf3902f.jpg"
            />
          </div>
        </div>
        <div className="px-3 py-2 flex items-center justify-center text-white">
          <span className="text-[14px]">Jujutsu Kaisen</span>
        </div>
      </div>
    </div>
  );
}
