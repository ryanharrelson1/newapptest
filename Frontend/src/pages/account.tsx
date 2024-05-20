import Accountupdater from "@/components/accountupdater";

import { useAuth } from "@/context/authcontext";

const account = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-1 justify-center items-center ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-dark rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-center">
            <img
              src={authUser?.profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full mt-4"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold ">{authUser?.name}</h2>
          </div>
          <div className="mt-6"></div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold ">Details</h3>

            <p className="">Username:{authUser?.username}</p>
          </div>
          <div className="mt-6 flex justify-center  ">
            <Accountupdater />
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;
