import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "IT Security Manager",
      company: "TechCorp Inc.",
      content: "Debsploit Solutions transformed our security posture completely. Their penetration testing revealed critical vulnerabilities we never knew existed. The team's expertise and professionalism are unmatched.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Maria Garcia",
      role: "Software Developer",
      company: "StartupXYZ",
      content: "The web development training was exceptional. I went from beginner to full-stack developer in just 6 months. The hands-on approach and real-world projects made all the difference.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "David Wilson",
      role: "CISO",
      company: "Financial Services Ltd",
      content: "Outstanding cybersecurity consulting services. They helped us achieve full compliance and built a robust security framework. Our security incidents dropped to zero after their implementation.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "E-commerce Plus",
      content: "Their digital marketing expertise helped us increase our online presence by 300%. The SEO strategies and content marketing approach delivered incredible results for our business.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Tech Innovations",
      content: "The cybersecurity training opened up new career opportunities for me. I'm now a certified ethical hacker thanks to their comprehensive program. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Jennifer Davis",
      role: "HR Director",
      company: "Corporate Solutions",
      content: "The corporate training program was perfectly tailored to our needs. Our entire IT team is now well-versed in cybersecurity best practices. Excellent return on investment.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Quote className="h-4 w-4 text-cyber-green" />
            <span className="text-sm text-cyber-green font-medium">Client Success</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            and students have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 cyber-glow hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6 w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center">
                <Quote className="h-3 w-3 text-white" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="h-4 w-4 fill-cyber-green text-cyber-green" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-bold text-cyber-blue">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-cyber-blue">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-heading font-semibold mb-8 text-muted-foreground">
            Trusted by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
            {["TechCorp", "StartupXYZ", "FinanceFlow", "SecureBank", "DataSafe", "CyberGuard"].map((company, index) => (
              <div 
                key={index}
                className="glass-card p-4 h-16 flex items-center justify-center hover:opacity-100 transition-opacity"
              >
                <span className="font-heading font-bold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;