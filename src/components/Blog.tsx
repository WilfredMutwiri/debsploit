import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=ugglr"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      if (res) {
        setPosts(res);
      }
    });
  }, []);

  return (
    <section id="blog" className="relative w-11/12 mx-auto pt-28">
      <h2 className="text-center pb-5 text-4xl font-bold"> ~ Blogs ~</h2>
      {loading && (
        <div className="flex flex-col justify-center items-center py-10 gap-6">
          <PacmanLoader color="#36d7b7" size={25} />
          <h2 className="text-center text-[#36d7b7] text-base">
            Loading blogs...
          </h2>
        </div>
      )}
      {isError && (
        <div className="text-center p-6 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-red-500 text-lg font-semibold">
            😢 Oops, an error occurred!
          </h2>
          <p className="text-gray-600 mt-2">
            Please check your internet connection and try again.
          </p>
        </div>
      )}
      {!loading && !isError && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.slice(0, 4).map((post) => (
              <div
                key={post.id}
                className="mb-6 p-4 border rounded-lg shadow hover:shadow-lg transition"
              >
                {post.cover_image && (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                )}
                <h2 className="text-lg font-semibold line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {post.published_at.slice(0, 10)}
                </p>
                <p className="mt-2 text-gray-700 line-clamp-3">
                  {post.description}
                </p>
                <a
                  href={post.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline mt-3"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/MorePosts">
              <Button
                size="lg"
                variant="outline"
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white"
              >
                View All Blogs
              </Button>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Blog;
