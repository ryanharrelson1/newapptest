import Mobilesidebar from "@/components/ui/mobilesidebar";
import { useAuth } from "@/context/authcontext";
const mobilebar = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex bg-dark w-full z-50 fixed p-4 justify-between items-center md:hidden">
      <div>
        <img src="/public/logo.svg" alt="logo" width={40} />
      </div>

      <div className="flex gap-6 justify-between items-center px-2">
        <div className="avatar">
          <div className="w-[45px] rounded-full">
            <img src={authUser?.profilePic} />
          </div>
        </div>
        <Mobilesidebar />
      </div>
    </div>
  );
};

export default mobilebar;
