// https://cam-inc.co.jp/p/techblog/733646556133065814
import Post from "./components/Post";
import TweetInput from "./components/TweetInput";
import { Post as PostType } from "@/utils/Types";

const fetchAllBlogs = async () => {
  const allPosts = await fetch(`http://localhost:3000/api/post`, {
    cache: "no-store",
  });

  return await allPosts.json();
};

export default async function Home() {
  const res = await fetchAllBlogs();

  return (
    <div className="min-h-screen bg-gray-800 p-4 flex flex-col items-center sm:p-12">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-slate-100 text-3xl font-medium text-center">
          Simple SNS
        </h2>

        {/* Input */}
        <div className="mt-6">
          <TweetInput />
        </div>

        {/* Post */}
        <div className="mt-6">
          {res.allPosts?.map((post: PostType) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
