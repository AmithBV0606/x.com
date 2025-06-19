"use client";

import FeedCard from "@/components/feed-card";
import LeftSidebar from "@/components/left-sidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/right-sidebar";
import SearchBar from "@/components/search-bar";
import TrendingHashtag from "@/components/TrendingHashtag";
import { useCurrentUser } from "@/hooks/user";
import MobileNavigationItems from "@/static/MobileNavigation";

export default function Home() {
  const { user } = useCurrentUser();
  console.log(user);

  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-12 w-full h-screen">
        {/* Left Sidebar */}
        <div className="hidden md:block 2xl:col-span-3 md:pl-2 lg:pl-4 2xl:ml-24">
          <LeftSidebar />
        </div>

        {/* Center Part */}
        <div className="col-span-12 md:col-span-11 xl:col-span-5 overflow-y-scroll h-screen scrollbar-hide md:mr-[-26px] lg:mr-0 border-r border-gray-600">
          <Navbar />

          {/* Login/Signup screen for mobile : */}
          {!user && (
            <div className="xl:hidden py-5 px-3 border-gray-600 border-b w-full">
              <RightSidebar />
            </div>
          )}

          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block xl:col-span-2 2xl:col-span-3 border-gray-600 w-full">
          <div className="mt-5 ml-5">
            <SearchBar />
          </div>

          {!user && <RightSidebar />}

          <div>
            <TrendingHashtag />
          </div>
        </div>
      </div>

      {/* Navigation tabs for mobile screens :  */}
      <div className="fixed bottom-0 h-14 border-t border-gray-600 sm:hidden w-full flex items-center justify-around bg-black">
        {MobileNavigationItems.map((item) => (
          <div key={item.id} className="p-2 hover:bg-[#1D1D20] rounded-full">
            {<item.icon size={25} />}
          </div>
        ))}
      </div>
    </div>
  );
}
