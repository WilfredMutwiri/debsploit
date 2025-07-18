import { ArrowRight, Shield, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen mt-24 md:mt-20 flex items-center relative overflow-hidden hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card animated-border">
                <Shield className="h-4 w-4 text-cyber-green" />
                <span className="text-sm text-cyber-green font-medium">Trusted Cybersecurity Experts</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="gradient-text">Transform</span> Your{" "}
                <span className="text-cyber-blue">Future</span> With Technology
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Master cutting-edge tech skills with our comprehensive training programs and professional service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="cyber-glow bg-cyber-blue hover:bg-cyber-blue-glow transition-all duration-300 text-white text-lg px-8 py-6"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-background transition-all duration-300 text-lg px-8 py-6"
              >
                Meet Our Team
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-green">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-purple">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Floating Service Cards */}
          <div className="relative">
            <div className="space-y-6">
              <div className="glass-card p-6 cyber-glow transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/20">
                    <Shield className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Cybersecurity</h3>
                    <p className="text-muted-foreground">Advanced security training</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 cyber-glow transform hover:scale-105 transition-all duration-300 ml-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-cyber-green/20">
                    <Code className="h-8 w-8 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Web Development</h3>
                    <p className="text-muted-foreground">Modern web technologies</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 cyber-glow transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-cyber-purple/20">
                    <Zap className="h-8 w-8 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Penetration Testing</h3>
                    <p className="text-muted-foreground">Ethical hacking skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;