import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function LeftSidebar() {
  return (
    <div>
      {/* Logo Icon : */}
      <div className="mt-1 h-fit py-3 px-3 hover:bg-slate-900 rounded-full cursor-pointer w-fit transition-all">
        <FaXTwitter size={38} className="" />
      </div>

      {/* Sidebar Menu : */}
      <div></div>

      {/* Mini Account display : */}
      <div></div>
    </div>
  );
}