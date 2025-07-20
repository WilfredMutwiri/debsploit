import { Calendar, User, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Advanced Penetration Testing Techniques for 2024",
      excerpt:
        "Explore the latest penetration testing methodologies and tools that are shaping the cybersecurity landscape this year.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "Advanced Penetration Testing Techniques for 2024",
      excerpt:
        "Explore the latest penetration testing methodologies and tools that are shaping the cybersecurity landscape this year.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "Building Secure React Applications: Best Practices",
      excerpt:
        "Learn how to implement security best practices in your React applications to protect against common vulnerabilities.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      category: "Web Development",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      title: "The Future of Cybersecurity: AI and Machine Learning",
      excerpt:
        "Discover how artificial intelligence is revolutionizing cybersecurity and what it means for security professionals.",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      title: "Corporate Cybersecurity Training: Why It Matters",
      excerpt:
        "Understanding the importance of comprehensive cybersecurity training for organizations and their employees.",
      author: "Lisa Park",
      date: "February 28, 2024",
      category: "Corporate Training",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      title: "Zero Trust Architecture: Implementation Guide",
      excerpt:
        "A comprehensive guide to implementing Zero Trust security architecture in modern organizations.",
      author: "Emma Thompson",
      date: "February 20, 2024",
      category: "Cybersecurity",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      title: "Digital Marketing for Tech Companies",
      excerpt:
        "Effective digital marketing strategies specifically tailored for technology and cybersecurity companies.",
      author: "David Kim",
      date: "February 15, 2024",
      category: "Digital Marketing",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return "cyber-blue";
      case "Web Development":
        return "cyber-green";
      case "Technology":
        return "cyber-purple";
      case "Corporate Training":
        return "cyber-blue";
      case "Digital Marketing":
        return "cyber-green";
      default:
        return "cyber-blue";
    }
  };

  return (
    <section id="blog" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <FileText className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue font-medium">
              Latest Insights
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Tech <span className="gradient-text">Blog</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in
            cybersecurity, web development, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <div
                  key={index}
                  className="glass-card overflow-hidden cyber-glow hover:scale-[1.02] transition-all duration-300 mt-10"
                >
                  {/* Featured Image */}
                  <div className="relative h-32 bg-gradient-to-br from-secondary to-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full bg-${getCategoryColor(
                          post.category
                        )}/20 text-${getCategoryColor(post.category)}`}
                      >
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span
                          className={`px-2 py-1 rounded-md bg-${getCategoryColor(
                            post.category
                          )}/20 text-${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-heading font-bold leading-tight hover:text-cyber-blue transition-colors cursor-pointer">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            by {post.author}
                          </span>
                        </div>

                        <Button
                          variant="default"
                          className="text-black hover:text-white"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold">Recent Posts</h3>

            {blogPosts
              .filter((post) => !post.featured)
              .slice(0, 4)
              .map((post, index) => (
                <div
                  key={index}
                  className="glass-card p-6 cyber-glow hover:scale-105 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span
                        className={`px-2 py-1 rounded-md bg-${getCategoryColor(
                          post.category
                        )}/20 text-${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="font-heading font-semibold leading-tight group-hover:text-cyber-blue transition-colors cursor-pointer">
                      {post.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {post.readTime}
                      </span>
                      <Button
                        variant="default"
                        className="text-black hover:text-white p-0 h-10 w-32"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Newsletter Signup */}
            <div className="glass-card p-6 cyber-glow">
              <div className="space-y-4">
                <h4 className="font-heading font-semibold">Stay Updated</h4>
                <p className="text-muted-foreground text-sm">
                  Subscribe to our newsletter for the latest cybersecurity
                  insights and industry news.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                  />
                  <Button className="w-full bg-cyber-blue hover:bg-cyber-blue-glow text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/MorePosts">
            <Button
              size="lg"
              variant="outline"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white"
            >
              View All Posts
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
