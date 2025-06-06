import FeedCard from "@/components/feed-card";
import LeftSidebar from "@/components/left-sidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/right-sidebar";
import MobileNavigationItems from "@/static/MobileNavigation";

export default function Home() {
  return (
    <div className="container mx-auto h-screen relative">
      <div className="grid grid-cols-12 w-full h-screen">
        {/* Left Sidebar */}
        <div className="hidden md:block 2xl:col-span-3">
          <LeftSidebar />
        </div>

        {/* Center Part */}
        <div className="col-span-12 sm:col-span-11 xl:col-span-6 overflow-y-scroll">
          <Navbar />
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
        <div className="hidden xl:block xl:col-span-2 2xl:col-span-3 border-l border-gray-600">
          <RightSidebar />
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