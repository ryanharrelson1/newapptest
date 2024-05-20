import { Button } from "./button";
import { FaRegTrashAlt } from "react-icons/fa";
//@ts-ignore
const postcard = ({ post }) => {
  const postowner = post.user;
  return (
    <div className="bg-dark rounded-3xl p-5 Lg:p-7 w-full maw-w-sm ">
      <div className="flex justify-between">
        <div className="flex  items-center gap-3">
          <div className="avatar">
            <div className="w-[60px] rounded-full">
              <img src={postowner.profilePic} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className=" font-bold ">{postowner.name}</p>
            <div className="flex justify-center ">
              <p className="font-semibold text-purple-600">3 Days Ago</p>
            </div>
          </div>
        </div>
        <Button className="rounded-full hover:bg-red-600">
          <FaRegTrashAlt />
        </Button>
      </div>
      <div className="py-5">
        <p>this is cool app</p>
      </div>
      <img
        src={post.img}
        alt="post img"
        className="h-64 lg:h-[450px] w-full rounded-3xl object-cover mb-5"
      />
    </div>
  );
};

export default postcard;
