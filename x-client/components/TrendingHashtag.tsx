import { TrendingTopics } from "@/types";
import React from "react";

const dummyTrending: TrendingTopics[] = [
  { category: "Technology", topic: "Next.js 15", tweets: "12.5K" },
  { category: "Web Dev", topic: "Tailwind CSS", tweets: "15.1K" },
  { category: "Framework", topic: "Node.js", tweets: "5.1K" },
  { category: "Programming", topic: "GraphQL", tweets: "8.2K" },
];

export default function TrendingHashtag() {
  return (
    <div className="sm:mt-5 p-5 xl:w-[490px]">
      <div className="rounded-lg p-4 border border-gray-600 space-y-6">
        <h1 className="text-2xl font-extrabold">What's happening</h1>

        <div className="space-y-6">
          {dummyTrending.map((item, index) => (
            <div
              key={index}
              className="hover:bg-gray-800/50 p-2 rounded-lg cursor-pointer transition-colors"
            >
              <p className="text-gray-400 text-sm">{item.category}</p>
              <p className="font-bold">{item.topic}</p>
              <p className="text-gray-400 text-sm">{item.tweets} Tweets</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
