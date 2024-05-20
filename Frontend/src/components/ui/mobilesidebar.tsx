import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFilePost } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import UseLogout from "@/hooks/useLogout";
import { useAuth } from "@/context/authcontext";

const mobilesidebar = () => {
  const { authUser } = useAuth();
  const { logoutuser } = UseLogout();
  const handelClick = () => {
    logoutuser();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[20px] " />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-col  h-full justify-center items-center">
          <div className="relative bottom-32 right-7">
            <div className="flex flex-col justify-center items-start  mt-10 ">
              <div className="avatar   w-[60px]">
                <div className="w-24 rounded-full">
                  <img src={authUser?.profilePic} />
                </div>
              </div>
              <div className=" relative left-[73px] bottom-12 font-bold ">
                {authUser?.name}
                <p className="flex items-center justify-center text-purple-600 ">
                  @{authUser?.username}
                </p>
              </div>
            </div>
            <div className="divider relative bottom-11"></div>
          </div>
          <div className="flex felwx-col justify-between items-center">
            <ul className="flex flex-col items-center ">
              <Link to={"/"}>
                <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] border border-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
                  <TiHomeOutline />
                  Home
                </div>
              </Link>
              <Link to={"/account"}>
                <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] border border-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
                  <RiAccountCircleLine />
                  Account
                </div>
              </Link>
              <Link to={"/createpost"}>
                <div className="flex pl-2 gap-6 items-center  h-10 text-[20px] border border-purple-600 font-bold  w-40 rounded-lg hover:bg-blue-600 mb-6">
                  <BsFilePost />
                  Create
                </div>
              </Link>
              <div className="text-[25px] border border-purple-600 rounded-full p-1 justify-center items-center cursor-pointer ml-[130px] hover:bg-blue-400">
                <IoIosLogOut onClick={handelClick} />
              </div>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default mobilesidebar;
