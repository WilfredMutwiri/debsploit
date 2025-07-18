import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Cybersecurity Training", href: "#services" },
        { name: "Web Development", href: "#services" },
        { name: "Penetration Testing", href: "#services" },
        { name: "Security Consulting", href: "#services" },
        { name: "Corporate Training", href: "#services" },
        { name: "Digital Marketing", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "White Papers", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Community", href: "#" },
        { name: "Support", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Data Protection", href: "#" },
        { name: "Compliance", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "cyber-blue" },
    { icon: Twitter, href: "#", color: "cyber-blue" },
    { icon: Github, href: "#", color: "cyber-green" },
    { icon: Facebook, href: "#", color: "cyber-purple" }
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logoImg} className="h-8 w-8 text-cyber-blue" />
              <span className="text-2xl font-heading font-bold gradient-text">
                Debsploit Solutions
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering individuals and organizations with cutting-edge cybersecurity 
              training, penetration testing, and technology solutions. Your trusted 
              partner in digital security.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-cyber-blue" />
                <span>info@debsploitsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-cyber-green" />
                <span>+254 7468383</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-cyber-purple" />
                <span>Moi Avenue, Nairobi City, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className={`hover:text-${social.color} hover:bg-${social.color}/20 transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-heading font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-cyber-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="glass-card p-8 cyber-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-semibold">
                  Stay Updated with{" "}
                  <span className="gradient-text">Debsploit Insights</span>
                </h3>
                <p className="text-muted-foreground">
                  Get the latest cybersecurity trends, industry insights, and 
                  exclusive training offers delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all"
                />
                <Button className="cyber-glow bg-cyber-blue hover:bg-cyber-blue-glow text-white px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Debsploit Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></div>
                <span>System Status: All services operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;