import { TiHomeOutline } from "react-icons/ti";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFilePost } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import UseLogout from "@/hooks/useLogout";
import { useAuth } from "@/context/authcontext";

import { Link } from "react-router-dom";

const sidebar = () => {
  const { authUser } = useAuth();
  const { logoutuser } = UseLogout();

  const handelClick = () => {
    logoutuser();
  };
  return (
    <section className=" hidden md:flex sticky left-0 top-0  h-screen bg-dark w-60 flex-col  p-6 ">
      <div className=" ml-6 ">
        <img src="/public/logo.svg" alt="logo" className=" w-[150px]" />
      </div>
      <div className="flex flex-col justify-center items-start  mt-10 ">
        <div className="avatar   w-[60px]">
          <div className="w-24 rounded-full">
            <img src={authUser?.profilePic} />
          </div>
        </div>
        <div className=" relative left-[73px] bottom-12 font-bold ">
          {authUser?.name}
          <p className="flex items-center justify-center text-purple-600 bg-dark">
            @{authUser?.username}
          </p>
        </div>
        <div className="divider relative bottom-11"></div>
      </div>

      <ul className="flex flex-col items-center ">
        <Link to={"/"}>
          <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] bg-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
            <TiHomeOutline />
            Home
          </div>
        </Link>
        <Link to={"/account"}>
          <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] bg-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
            <RiAccountCircleLine />
            Account
          </div>
        </Link>
        <Link to={"/createpost"}>
          <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] bg-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
            <BsFilePost />
            Create
          </div>
        </Link>
        <div className="text-[25px] bg-purple-600 rounded-full p-1 justify-center items-center cursor-pointer ml-[130px] hover:bg-blue-400">
          <IoIosLogOut onClick={handelClick} />
        </div>
      </ul>
    </section>
  );
};
//<IoIosLogOut />
<BsFilePost />;
export default sidebar;

<div className="hidden md:flex bg-dark h-screen w-64 sticky top-0 left-0 justify-center ">
  <div className="  flex flex-col   items-center bg-dark py-10">
    <img src="/public/logo.svg" alt="logo" className="bg-dark w-[150px]" />
    <div className="flex flex-col  mt-10 bg-dark ">
      <div className="avatar bg-dark w-[60px] relative right-20">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-dark font-bold relative left-5 bottom-12">
      Ryan Harrelson
      <p className="bg-dark text-purple-600">@Ryan1</p>
    </div>
    <ul></ul>
  </div>
</div>;
