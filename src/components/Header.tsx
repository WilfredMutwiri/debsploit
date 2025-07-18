import { useState } from "react";
import { Menu, X, Shield, Code, Users, FileText, MessageSquare, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Shield },
    { name: "About", href: "#about", icon: UserCheck },
    { name: "Services", href: "#services", icon: Code },
    { name: "Portfolio", href: "#portfolio", icon: FileText },
    { name: "Team", href: "#team", icon: Users },
    { name: "Blog", href: "#blog", icon: FileText },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoImg} className="h-10 w-10"/>
            <span className="text-2xl font-heading font-bold gradient-text">
              Debsploit Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-cyber-blue transition-colors duration-300 flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          {/* <div className="hidden md:block">
            <Button className="cyber-glow bg-cyber-blue hover:bg-cyber-blue-glow text-white">
              Get Started
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-cyber-blue transition-colors duration-300 flex items-center space-x-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <Button className="cyber-glow bg-cyber-blue hover:bg-cyber-blue-glow text-white mt-4">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;