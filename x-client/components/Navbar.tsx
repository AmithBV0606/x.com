import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-[#1D1D20] p-4 border-b border-gray-600 flex items-center justify-between">
      <div>
        <Avatar className="lg:w-12 lg:h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="p-3 bg-black rounded-full cursor-pointer transition-all w-12 h-12">
        <FaXTwitter size={25} />
      </div>
    </div>
  );
}