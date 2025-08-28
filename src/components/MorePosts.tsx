import { ArrowRight, FileText } from "lucide-react";
import { PacmanLoader } from "react-spinners";
import { useState, useEffect } from "react";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=ugglr"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  return (
    <section id="blog" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <FileText className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue font-medium">
              All Blog Posts
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Explore Our <span className="gradient-text">Insights</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into trending topics in cybersecurity, technology, and
            business growth.
          </p>
        </div>
        <section id="blog" className="relative mx-auto">
          <div>
            {loading && (
              <div className="flex flex-col justify-center items-center py-10 gap-10">
                <PacmanLoader color="#36d7b7" size={25} />
                <h2 className="text-center text-[#36d7b7] text-base">
                  Loading blogs
                </h2>
              </div>
            )}
            {isError && (
              <div className="text-center">
                <h2 className="text-red-500 text-lg font-semibold">
                  😢 Oops, an error occurred!
                </h2>
                <p className="text-gray-300 mt-2">
                  Please check your internet connection and try again.
                </p>
              </div>
            )}

            <div className="flex flex-col md:flex-row justify-between gap-10">
              {!loading &&
                posts?.slice(0, 4).map((post) => {
                  return (
                    <div
                      key={post.id}
                      className="mb-6 p-4 border rounded-lg shadow w-62"
                    >
                      {post.cover_image && (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-md mb-3"
                        />
                      )}
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-sm text-gray-500">
                        {post.published_at.slice(0, 10)}
                      </p>
                      <p className="mt-2 text-gray-700">{post.description}</p>
                      <a
                        href={post.canonical_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:underline mt-3"
                      >
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10">
              {!loading &&
                posts?.slice(5, 9).map((post) => {
                  return (
                    <div
                      key={post.id}
                      className="mb-6 p-4 border rounded-lg shadow w-62"
                    >
                      {post.cover_image && (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-md mb-3"
                        />
                      )}
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-sm text-gray-500">
                        {post.published_at.slice(0, 10)}
                      </p>
                      <p className="mt-2 text-gray-700">{post.description}</p>
                      <a
                        href={post.canonical_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:underline mt-3"
                      >
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blog;
