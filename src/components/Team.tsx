import { Linkedin, Twitter, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Erick Othiambo",
      role: "Lead Cybersecurity Instructor",
      image: "/api/placeholder/300/300",
      bio: "15+ years in cybersecurity with expertise in penetration testing and incident response. Former security consultant for major tech companies.",
      specialties: ["Penetration Testing", "Incident Response", "Security Architecture"],
      certifications: ["CISSP", "CEH", "OSCP"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Brandon Ochieng",
      role: "Senior Web Development Instructor",
      image: "/api/placeholder/300/300",
      bio: "Full-stack developer with 12+ years building scalable web applications. Expert in modern JavaScript frameworks and cloud technologies.",
      specialties: ["React/Node.js", "Cloud Architecture", "DevOps"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional", "React Certification"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Wilfred Mutwiri",
      role: "Penetration Testing Specialist",
      image: "/api/placeholder/300/300",
      bio: "Ethical hacker and security researcher with extensive experience in vulnerability assessment and red team operations.",
      specialties: ["Ethical Hacking", "Vulnerability Assessment", "Red Team Operations"],
      certifications: ["OSCP", "GPEN", "CRT"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Dolphin",
      role: "Corporate Training Director",
      image: "/api/placeholder/300/300",
      bio: "Learning and development specialist focused on creating effective cybersecurity training programs for enterprise clients.",
      specialties: ["Training Development", "Learning Strategy", "Enterprise Solutions"],
      certifications: ["CPTM", "CISSP", "Project Management Professional"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Award className="h-4 w-4 text-cyber-green" />
            <span className="text-sm text-cyber-green font-medium">Our Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Meet Our{" "}
            <span className="gradient-text">Expert Team</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team consists of industry veterans, certified professionals, and passionate 
            educators dedicated to your success in cybersecurity and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="glass-card p-6 cyber-glow hover:scale-105 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyber-blue">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
                    <p className="text-cyber-blue font-medium">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Specialties</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-2 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Certifications</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.certifications.map((cert, certIndex) => (
                        <span 
                          key={certIndex}
                          className="px-2 py-1 text-xs bg-cyber-green/20 text-cyber-green rounded-md"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyber-blue">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyber-blue">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-cyber-blue">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;