import { Shield, Users, Award, Target, BrainCircuit, Building2, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreAbout = () => {
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

  const services = [
    {
      icon: BrainCircuit,
      title: "Digital Strategy & Consultation",
      description: "Helping founders and small businesses align tech with their goals."
    },
    {
      icon: Workflow,
      title: "Custom Package Development",
      description: "Tailored tech solutions including websites, apps, and infrastructure."
    },
    {
      icon: Award,
      title: "Delivery Excellence",
      description: "Consistent track record of reliable, high-quality service delivery."
    }
  ];

  const approach = [
    "Consultation & Discovery",
    "Tailored Solution Design",
    "Implementation & Support",
    "Results & Optimization"
  ];

  return (
    <section id="MoreAbout" className="py-24 relative w-11/12 mx-auto mt-10">
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
                Why Choose <span className="gradient-text">Debsploit Solutions</span>?
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Debsploit Solutions is a Nairobi-based IT firm empowering small businesses and startups across East Africa with strategic, affordable, and scalable technology solutions.
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

        {/* Our Mission */}
        <section className="mt-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">Our Mission</h2>
            <p className="text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To enable small and emerging tech-driven organisations to harness digital innovation
              for sustainable growth, ensuring they have the tools, expertise, and support they need
              to compete and thrive in a digital world.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mt-24 space-y-12">
          <h2 className="text-center text-3xl font-bold">What We Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6">
                <div className="mb-4">
                  <service.icon className="h-8 w-8 text-cyber-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mt-24 space-y-6">
          <h2 className="text-center text-3xl font-bold">Our Approach</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            {approach.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-muted/20 p-4 px-6 rounded-xl shadow-md"
              >
                <span className="text-cyber-purple font-bold">{i + 1}</span>
                <span className="text-muted-foreground">{step}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default MoreAbout;
