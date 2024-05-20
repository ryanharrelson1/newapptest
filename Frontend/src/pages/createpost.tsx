import React from "react";
import Createpost from "@/components/ui/postform";

const createpost = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 custom-scrollbar">
        <div className=" max-w-5xl flex justify-start gap-3 items-start w-full">
          <h2 className="font-bold text-3xl">Create Post</h2>
        </div>
        <Createpost />
      </div>
    </div>
  );
};

export default createpost;
