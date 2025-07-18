import { Shield, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience",
      color: "cyber-blue"
    },
    {
      icon: Target,
      title: "Hands-on Learning",
      description: "Practical projects and real-world applications",
      color: "cyber-green"
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Job placement assistance and career guidance",
      color: "cyber-purple"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certified programs recognized by leading cybersecurity organizations and tech companies.",
      color: "cyber-blue"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
                <Award className="h-4 w-4 text-cyber-green" />
                <span className="text-sm text-cyber-green font-medium">About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold">
                Why Choose{" "}
                <span className="gradient-text">Debsploit Solutions</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're passionate about empowering individuals and organizations with 
                cutting-edge technology skills and solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyber-blue">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyber-green">100+</div>
                <div className="text-muted-foreground">Successful Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyber-purple">50+</div>
                <div className="text-muted-foreground">Corporate Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyber-blue">24/7</div>
                <div className="text-muted-foreground">Expert Support</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="cyber-glow bg-cyber-green hover:bg-cyber-green-glow text-background"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 cyber-glow hover:scale-105 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg bg-${feature.color}/20 w-fit`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;