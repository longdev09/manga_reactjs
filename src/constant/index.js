import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  FaBell,
  FaBookmark,
  FaClockRotateLeft,
  FaRightFromBracket,
  FaUser,
} from "../assets/icon";

export const NAV_MENU = {
  header: ["Home", "Genres", "New", "Updated", "Completed"],
};
export const ITEM_MENU_USER = {
  item: [
    { icon: <FaUser />, name: "Profile" },
    { icon: <FaClockRotateLeft />, name: "Continue Reading" },
    { icon: <FaBookmark />, name: "Bookmark" },
    { icon: <FaBell />, name: "Notification" },
    { icon: <FaRightFromBracket />, name: "Logout" },
  ],
};
