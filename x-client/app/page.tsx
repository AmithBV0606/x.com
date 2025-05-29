import LeftSidebar from "@/components/left-sidebar";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-12 w-full h-screen">
        {/* Left Sidebar */}
        <div className="col-span-3">
          <LeftSidebar />
        </div>

        {/* Center Part */}
        <div className="col-span-6 border border-x-[1.5px] border-y-0 border-gray-600">
          Hello
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">Hello</div>
      </div>
    </div>
  );
}