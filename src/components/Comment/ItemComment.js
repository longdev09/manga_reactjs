import { FaThumbsUp } from "../../assets/icon";

export default function ItemComment() {
  return (
    <div className="flex ">
      <div className="w-16 mr-5">
        <img
          className="rounded-xl"
          src="https://files.fullstack.edu.vn/f8-prod/avatars/Ve6GzW5LbaWAuNJSXNsl7BxE0Rprefta71w3r6u8.png"
        />
      </div>
      <div className="flex  flex-col flex-1">
        <span className="text-[#ffffffb3] mb-1">Name Long</span>
        <span className="text-[#747272b3] text-[11px] mb-2">18 days ago</span>
        <p className="text-white text-sm">"We cheated" is wild.</p>

        {/* fuction */}
        <div className="text-[#747272b3] mt-2 text-sm">
          <span className="mr-3">
            <FaThumbsUp />
          </span>
          <span className="cursor-pointer">Reply</span>
        </div>
      </div>
    </div>
  );
}
