import { XSidebarButton } from "@/types";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";

const SidebarMenuItems: XSidebarButton[] = [
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: IoSearch,
  },
  {
    title: "Notifications",
    icon: RiNotification2Line,
  },
  {
    title: "Messages",
    icon: FaRegEnvelope,
  },
  {
    title: "Bookmarks",
    icon: FaRegBookmark,
  },
  {
    title: "Premium",
    icon: TbPremiumRights,
  },
  {
    title: "Profile",
    icon: CiUser,
  },
  {
    title: "More",
    icon: CiCircleMore,
  },
];

export default SidebarMenuItems;