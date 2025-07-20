import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "debsploit@gmail.com ",
      subContent: "support@debsploitsolutions.com",
      color: "cyber-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: " +254 746838304",
      subContent: " +254 745567568",
      color: "cyber-green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Eldoret CBD",
      subContent: "Eldoret City , Kenya",
      color: "cyber-purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subContent: "Sat: 10:00 AM - 2:00 PM",
      color: "cyber-blue"
    }
  ];

  return (
    <section id="contact" className="py-24 relative w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <MessageSquare className="h-4 w-4 text-cyber-purple" />
            <span className="text-sm text-cyber-purple font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Ready to Start Your{" "}
            <span className="gradient-text">Tech Journey</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or ready to get started? 
            Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card p-8 cyber-glow">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-semibold">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity-training">Cybersecurity Training</option>
                    <option value="web-development">Web Development</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="security-consulting">Security Consulting</option>
                    <option value="corporate-training">Corporate Training</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-all resize-none"
                    placeholder="Tell us about your project or what you'd like to learn..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full cyber-glow bg-cyber-blue hover:bg-cyber-blue-glow text-white"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're here to help you transform your career in cybersecurity and technology. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 cyber-glow hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-${info.color}/20 flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 text-${info.color}`} />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                      <p className="text-muted-foreground text-sm">{info.subContent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;