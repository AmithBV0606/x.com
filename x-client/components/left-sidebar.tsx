import SidebarMenuItems from "@/static/SidebarMenu";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { BsFeather } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsThreeDots } from "react-icons/bs";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col justify-between h-screen border-r border-gray-600">
      {/* Top part : */}
      <div className="flex flex-col gap-3">
        {/* Logo Icon : */}
        <div className="mt-2 h-fit py-3 px-4 hover:bg-[#1D1D20] rounded-full cursor-pointer w-fit transition-all">
          <FaXTwitter size={38} className="" />
        </div>

        {/* Sidebar Menu : */}
        <div>
          <ul>
            {SidebarMenuItems.map((item) => (
              <li
                key={item.title}
                className={`flex items-center gap-6 mb-3 cursor-pointer hover:bg-[#1D1D20] md:py-2 md:px-3 2xl:py-3 2xl:px-4 md:w-16 md:h-16 rounded-full 2xl:w-80`}
              >
                <span>{<item.icon size={35} />}</span>
                <p className="text-2xl hidden 2xl:block font-semibold">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tweet/Post button for desktop and mobile device : */}
        <div className="flex flex-col">
          {/* For desktop : */}
          <div className="hidden 2xl:block">
            <Button
              variant={"secondary"}
              className="rounded-full text-2xl font-bold py-7 2xl:w-[360px]"
            >
              Post
            </Button>
          </div>

          {/* For mobile */}
          <div className="2xl:hidden">
            <Button
              variant={"secondary"}
              className="rounded-full text-3xl w-12 h-12 ml-2"
            >
              <BsFeather size={40} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom part(Desktop) : */}
      <div className="hidden 2xl:flex 2xl:items-center 2xl:justify-between mb-8 mx-6 px-2 py-4 cursor-pointer rounded-full hover:bg-[#1D1D20]">
        {/* User info display : */}
        <div className="flex gap-2 pl-2">
          <Avatar className="w-14 h-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-bold text-xl">Name</span>
            <span className="text-gray-400 font-thin">@username</span>
          </div>
        </div>

        {/* Three dots : */}
        <div className="pr-2">
          <BsThreeDots />
        </div>
      </div>

      {/* Bottom part(Mobile) : */}
      <div className="2xl:hidden ml-2">
        <Avatar className="w-12 h-12 lg:w-14 lg:h-14 xl:h-16 xl:w-16 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}