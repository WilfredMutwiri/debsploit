import { Calendar, User, ArrowRight, FileText, Flame } from "lucide-react";
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
      views: 1050
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
      views: 720
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
      views: 890
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
      views: 640
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
      views: 790
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
      views: 530
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity": return "cyber-blue";
      case "Web Development": return "cyber-green";
      case "Technology": return "cyber-purple";
      case "Corporate Training": return "cyber-blue";
      case "Digital Marketing": return "cyber-green";
      default: return "cyber-blue";
    }
  };

  const sortedByViews = [...blogPosts].sort((a, b) => b.views - a.views);

  return (
    <section id="blog" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <FileText className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue font-medium">All Blog Posts</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Explore Our <span className="gradient-text">Insights</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into trending topics in cybersecurity, technology, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedByViews.map((post, index) => (
            <div
              key={index}
              className="glass-card cyber-glow hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 bg-gradient-to-br from-secondary to-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-${getCategoryColor(
                      post.category
                    )}/20 text-${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold hover:text-cyber-blue transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" /> {post.views} views
                  </span>
                  <Button variant="default" className="text-black hover:text-white p-0 h-10 w-32">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
