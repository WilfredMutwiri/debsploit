import { ExternalLink, Github, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import securityImg from "@/assets/security.jpg";
import commerce from "@/assets/e-commerce.jpg";
import bankingImg from "@/assets/banking.jpg";
import healthImg from "@/assets/health.jpg";
import fintech from "@/assets/fintech.jpg";
import government from "@/assets/government.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Security Assessment",
      category: "Cybersecurity",
      description: "Comprehensive security audit for Fortune 500 company, identifying critical vulnerabilities and implementing robust security measures.",
      image: securityImg,
      tags: ["Penetration Testing", "Vulnerability Assessment", "Security Audit"],
      client: "TechCorp International",
      year: "2024",
      results: "99% vulnerability reduction",
      color: "cyber-blue"
    },
    {
      title: "E-commerce Platform Development",
      category: "Web Development", 
      description: "Full-stack e-commerce solution with modern React frontend, Node.js backend, and comprehensive security features.",
      image: commerce,
      tags: ["React", "Node.js", "MongoDB", "Payment Integration"],
      client: "RetailPlus Solutions",
      year: "2024",
      results: "300% increase in sales",
      color: "cyber-green"
    },
    {
      title: "Banking Security Framework",
      category: "Security Consulting",
      description: "Designed and implemented comprehensive cybersecurity framework for regional banking institution.",
      image: bankingImg,
      tags: ["Compliance", "Risk Assessment", "Policy Development"],
      client: "Regional Bank Corp",
      year: "2023",
      results: "100% compliance achieved",
      color: "cyber-purple"
    },
    {
      title: "Healthcare Data Protection",
      category: "Cybersecurity",
      description: "HIPAA-compliant security implementation for healthcare provider, ensuring patient data protection.",
      image:healthImg,
      tags: ["HIPAA Compliance", "Data Encryption", "Access Control"],
      client: "MedCare Systems",
      year: "2023",
      results: "Zero security incidents",
      color: "cyber-blue"
    },
    {
      title: "Fintech Mobile Application",
      category: "Web Development",
      description: "Secure mobile banking application with biometric authentication and real-time fraud detection.",
      image: fintech,
      tags: ["React Native", "Biometric Auth", "Fraud Detection"],
      client: "FinanceFlow Ltd",
      year: "2023",
      results: "1M+ active users",
      color: "cyber-green"
    },
    {
      title: "Government Security Training",
      category: "Corporate Training",
      description: "Comprehensive cybersecurity training program for government agencies and contractors.",
      image:government,
      tags: ["Security Training", "Compliance", "Government Standards"],
      client: "Government Agency",
      year: "2024",
      results: "500+ professionals trained",
      color: "white"
    },
    
  ];

  return (
    <section id="portfolio" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Award className="h-4 w-4 text-cyber-purple" />
            <span className="text-sm text-cyber-purple font-medium">Our Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Success{" "}
            <span className="gradient-text">Stories</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful cybersecurity implementations, 
            web development projects, and corporate training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden cyber-glow hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-black`}>
                    {project.category}
                  </span>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/20 hover:bg-background/40">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/20 hover:bg-background/40">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-semibold group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Result:</span>
                    <span className={`font-medium text-${project.color}`}>{project.results}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
        </div>
      </div>
    </section>
  );
};

export default Portfolio;