import Postcard from "@/components/ui/postcard";
import usePosts from "@/hooks/usegetpost";

const home = () => {
  const { posts } = usePosts();
  return (
    <div className="flex flex-1 items-center sm:h-screen   overflow-scroll custom-scrollbar  px-10 py-14 lg:p-14">
      <div className="flex flex-col  max-w-sceen-sm items-center w-full gap-6 md:gap-9 ">
        <h2 className="font-bold">Home Feed</h2>
        {posts.map((post) => (
          <Postcard key={post} post={post} />
        ))}
      </div>
    </div>
  );
};

export default home;
