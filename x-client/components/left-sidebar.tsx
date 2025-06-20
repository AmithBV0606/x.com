import SidebarMenuItems from "@/static/SidebarMenu";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { BsFeather } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsThreeDots } from "react-icons/bs";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";

export default function LeftSidebar() {
  const { user } = useCurrentUser();

  return (
    <div className="flex flex-col justify-between h-screen border-r border-gray-600">
      {/* Top part : */}
      <div className="flex flex-col gap-1">
        {/* Logo Icon : */}
        <div className="mt-2 h-fit py-3 px-3 hover:bg-[#1D1D20] rounded-full cursor-pointer w-fit transition-all">
          <FaXTwitter size={30} className="" />
        </div>

        {/* Sidebar Menu : */}
        <div>
          <ul>
            {SidebarMenuItems.map((item) => (
              <li
                key={item.title}
                className={`flex items-center gap-3 mb-3 cursor-pointer hover:bg-[#1D1D20] md:py-2 md:px-3 2xl:py-3 2xl:px-4 md:w-12 md:h-12 rounded-full 2xl:w-64`}
              >
                <span>{<item.icon size={25} />}</span>
                <p className="text-xl hidden 2xl:block font-semibold">
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
              className="rounded-full text-xl font-extrabold py-6 2xl:w-[250px]"
            >
              Post
            </Button>
          </div>

          {/* For mobile */}
          <div className="2xl:hidden">
            <Button
              variant={"secondary"}
              className="rounded-full text-3xl w-12 h-12"
            >
              <BsFeather size={40} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom part(Desktop) : */}
      {user && (
        <div className="hidden 2xl:flex 2xl:items-center 2xl:justify-between mb-8 mr-6 px-2 py-3 cursor-pointer rounded-full hover:bg-[#1D1D20]">
          {/* User info display : */}
          <div className="flex gap-2 pl-2 items-center">
            {user.profileImageURL && (
              <Image
                src={user.profileImageURL}
                alt="Profile Pic"
                width={45}
                height={45}
                className="border rounded-full border-gray-600"
              />
            )}

            <div className="flex flex-col">
              <span className="font-bold text-md">{user.firstName}</span>
              <span className="text-gray-400 font-thin text-sm">
                {user.email.split("@")[0]}
              </span>
            </div>
          </div>

          {/* Three dots : */}
          <div className="pr-2">
            <BsThreeDots />
          </div>
        </div>
      )}

      {/* Bottom part(Mobile) : */}
      {user && (
        <div className="2xl:hidden ml-2">
          <Image
            src={
              user?.profileImageURL
                ? user.profileImageURL
                : "https://github.com/shadcn.png"
            }
            className="border rounded-full border-gray-400 mb-4"
            alt="Profile Pic"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
}
