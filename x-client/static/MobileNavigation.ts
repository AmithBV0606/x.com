import { XMobileNavigation } from "@/types";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const MobileNavigationItems: XMobileNavigation[] = [
  {
    id: 1,
    icon: GoHome,
  },
  {
    id: 2,
    icon: IoSearch,
  },
  {
    id: 3,
    icon: RiNotification2Line,
  },
  {
    id: 4,
    icon: FaRegEnvelope,
  },
  {
    id: 5,
    icon: FaRegBookmark,
  },
//   {
//     id: 6,
//     title: "Profile",
//     icon: CiUser,
//   },
];

export default MobileNavigationItems;