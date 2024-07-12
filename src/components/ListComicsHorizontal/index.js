import CartHorizontal from "../Cart_Horizontal";

export default function ListComicsHorizontal({ title, subItem, listItem }) {
  return (
    <div className="mt-10">
      <div className="text-white  flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-2xl mb-2 sm:mb-0">{title}</h2>
        <div className="flex text-sm  text-[#838a9c]">
          <span className="mr-3">Manga</span>
          <span className="mr-3">Manhua</span>
          <span className="mr-3">Month</span>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap overflow-hidden">
        {listItem.map((item, index) => (
          <CartHorizontal key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
