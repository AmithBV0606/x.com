import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";

export default function FeedCard() {
  return (
    <div className="border border-gray-600 border-l-0 border-t-0 border-r-0 p-5 hover:bg-[#1D1D20] transition-all w-full cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2 sm:col-span-1">
          <Avatar className="lg:w-12 lg:h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="col-span-10 sm:col-span-11 space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-xl">Name</h3>
            <h3 className="font-bold text-gray-500">@username</h3>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            minima pariatur possimus saepe ipsum hic quisquam culpa laboriosam
            corporis facere!
          </p>

          {/* Comments, likes and other icons : */}
          <div className="flex items-center justify-between mr-20 pt-5 text-xl">
            {/* Comment */}
            <div>
                <FaRegComment />
            </div>

            {/* Retweet */}
            <div>
                <AiOutlineRetweet />
            </div>

            {/* Like */}
            <div>
                <FaRegHeart />
            </div>

            {/* Share */}
            <div>
                <LuUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}