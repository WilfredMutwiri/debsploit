import { useState } from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Award,
  X,
  CheckCircle,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import erickImg from "@/assets/erick.png";
import faithImg from "@/assets/faith.png";
import aundry from "@/assets/audrey.png";

const Team = () => {
  const [openModal, setOpenModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const teamMembers = [
    {
      name: "Erick Odhiambo",
      role: "Lead Cybersecurity Instructor",
      image: erickImg,
      bio: "6 years in cybersecurity with expertise in penetration testing and incident response. Former security consultant for major tech companies.",
      specialties: [
        "Penetration Testing",
        "Incident Response",
        "Security Architecture",
      ],
      certifications: ["CISSP", "CEH", "OSCP"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Brandon Ochieng",
      role: "Senior Web Development Instructor",
      // image: "/api/placeholder/300/300",
      bio: "Full-stack developer with 5 years building scalable web applications. Expert in modern JavaScript frameworks and cloud technologies.",
      specialties: ["React/Node.js", "Cloud Architecture", "DevOps"],
      certifications: [
        "AWS Solutions Architect",
        "Google Cloud Professional",
        "React Certification",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Wilfred Mutwiri",
      role: "Full Stack Developer",
      // image: "/api/placeholder/300/300",
      bio: "Experienced full stack developer with a strong background in building scalable web applications, REST APIs, and modern user interfaces. Passionate about writing clean, maintainable code and delivering robust solutions across the stack.",
      specialties: [
        "React,Node.js & Django",
        "RESTful API Development",
        "Database Design & Optimization",
      ],
      certifications: [
        "Meta Full-Stack Developer Certificate",
        "MongoDB Developer Certification",
        "AWS Certified Developer – Associate",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Mwaitsi Dolphine",
      role: "Corporate Training Director",
      // image: "/api/placeholder/300/300",
      bio: "Learning and development specialist focused on creating effective cybersecurity training programs for enterprise clients.",
      specialties: [
        "Training Development",
        "Learning Strategy",
        "Enterprise Solutions",
      ],
      certifications: ["CPTM", "CISSP", "Project Management Professional"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Faith Chepkemoi",
      role: "Creative Technologist & Full-Stack Developer",
      image: faithImg,
      bio: "A multidisciplinary tech expert with a passion for building intuitive digital experiences. Faith brings together strong skills in software development, UI/UX design, and visual branding to deliver user-centered web and mobile solutions.",
      specialties: ["Software Developer", "UI/UX Designer", "Graphic Designer"],
      certifications: [
        "Google UX Design Certificate",
        "Meta Front-End Developer Certificate",
        "Adobe Certified Expert (ACE)",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
  name: "Audrey Aluoch",
  role: "Communications & Investigative Journalism Specialist",
  image:aundry,
  bio: "A passionate communication and journalism professional with a strong interest in business, investigative, and health reporting. Audrey combines her storytelling expertise with strategic communication to inform, educate, and drive impact. Her journey is marked by creativity, a hunger for elegance, and an unwavering pursuit of excellence in all forms of communication.",
  specialties: [
    "Investigative Journalism",
    "Strategic Communication",
    "Copywriting & Brand Storytelling",
    "Digital Marketing",
    "Career Counseling",
  ],
  certifications: [
    "Take The Lead Program - Leadership in Communication",
    "Certified Copywriting Essentials",
    "Digital Marketing Foundations",
  ],
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#"
  }
}];

// handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpenModal(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <section id="team" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Award className="h-4 w-4 text-cyber-green" />
            <span className="text-sm text-cyber-green font-medium">
              Our Team
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team consists of industry veterans, certified professionals, and
            passionate educators dedicated to your success in cybersecurity and
            technology.
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
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-10/12 h-auto object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-cyber-blue">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-cyber-blue font-medium">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">
                      Specialties
                    </h4>
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
                    <h4 className="text-sm font-medium text-foreground">
                      Certifications
                    </h4>
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
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:text-cyber-blue"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:text-cyber-blue"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:text-cyber-blue"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white"
            onClick={() => setOpenModal(true)}
          >
            Join Our Team
          </Button>
        </div>

                {/* Join Modal */}
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogContent className="max-w-lg space-y-6 bg-background border border-border p-8 rounded-xl">
            {submitted ? (
              <div className="text-center space-y-4">
                <CheckCircle className="mx-auto text-green-500 h-12 w-12" />
                <h3 className="text-xl font-semibold">Application Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. Our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Join Our Team</h3>
                  <button onClick={() => setOpenModal(false)}>
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input type="email" placeholder="Email" required />
                  <Input type="tel" placeholder="Phone Number" required />
                  <Input type="text" placeholder="Qualifications" required />
                  <Textarea placeholder="Optional message..." rows={4} />
                  <Button type="submit" className="w-full bg-cyber-purple text-white">
                    Submit Application
                  </Button>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Team;
