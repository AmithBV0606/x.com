import { IconType } from "react-icons";

export interface XSidebarButton {
  title: string;
  icon: IconType;
}

export interface XMobileNavigation {
  id: number;
  icon: IconType;
}

export interface TrendingTopics {
  category: string;
  topic: string;
  tweets: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  profileImageURL?: string;
}
