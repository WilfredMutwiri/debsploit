import { Shield, Code, Search, Users, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import pentestIcon from "@/assets/pentest-icon.jpg";
import webdevIcon from "@/assets/webdev-icon.jpg";
import consultingIcon from "@/assets/consulting-icon.jpg";
import digitalMarketingIcon from "@/assets/digitalmarketing.jpg";
import pentestIcon2 from "@/assets/pentest2.jpg";
import corporateImg from "@/assets/corporate.jpg";
const Services = () => {
  const services = [
    {
      icon: Shield,
      image: pentestIcon,
      title: "Cybersecurity Training",
      description: "Comprehensive cybersecurity courses covering ethical hacking, penetration testing, network security, and incident response.",
      features: ["Ethical Hacking", "Network Security", "Incident Response", "Security Auditing"],
      color: "cyber-blue",
      popular: true
    },
    {
      icon: Code,
      image: webdevIcon,
      title: "Web Development",
      description: "Modern web development training with latest technologies including React, Node.js, Python, and full-stack development.",
      features: ["React & Node.js", "Python Development", "Database Design", "API Development"],
      color: "cyber-green",
      popular: false
    },
    {
      icon: Search,
      image: pentestIcon2,
      title: "Penetration Testing",
      description: "Professional penetration testing services to identify vulnerabilities and strengthen your security posture.",
      features: ["Vulnerability Assessment", "Web App Testing", "Network Penetration", "Security Reports"],
      color: "cyber-purple",
      popular: false
    },
    {
      icon: Briefcase,
      image: consultingIcon,
      title: "Security Consulting",
      description: "Expert cybersecurity consulting services to help organizations build robust security frameworks and policies.",
      features: ["Security Strategy", "Compliance Audits", "Risk Assessment", "Policy Development"],
      color: "cyber-blue",
      popular: false
    },
    {
      icon: Users,
      image: corporateImg,
      title: "Corporate Training",
      description: "Customized training programs for organizations to upskill their teams in cybersecurity and development.",
      features: ["Team Training", "Custom Curriculum", "On-site/Remote", "Certification Support"],
      color: "cyber-green",
      popular: false
    },
    {
      icon: Zap,
      image: digitalMarketingIcon,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to help businesses grow their online presence and reach their target audience.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics & Reporting"],
      color: "cyber-purple",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Code className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Comprehensive{" "}
            <span className="gradient-text">Tech Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cybersecurity training to professional services, we offer everything 
            you need to succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 cyber-glow hover:scale-105 transition-all duration-300 relative group"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-cyber-green text-background text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Service Image */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 p-3 rounded-lg bg-${service.color}/20`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-${service.color} hover:bg-${service.color}-glow text-white mt-6`}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;