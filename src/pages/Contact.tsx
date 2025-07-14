import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@example.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 812 3456 7890',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      description: 'Available for remote work worldwide'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-300' }
  ];

  const services = [
    'Frontend Development',
    'Full Stack Development',
    'UI/UX Design',
    'Website Optimization',
    'Consulting',
    'Code Review'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life. 
            I'm always excited to work on new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge 
                          key={service} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary/20 hover:border-primary transition-all duration-200 border-border/50"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      required 
                      rows={6}
                      className="resize-none bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Status</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Available
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Accepting new projects</p>
                    <p>• Response time: 24 hours</p>
                    <p>• Timezone: GMT+7 (Jakarta)</p>
                  </div>
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="sm"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text">Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 hover:bg-primary/20 hover:border-primary transition-all duration-300 border-border/50"
                    >
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Follow me for updates on projects and tutorials
                </p>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need a quick answer? Send me a direct message on any platform.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    WhatsApp Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about working together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most websites take 2-4 weeks, while larger applications can take 1-3 months."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with different timezones and communication preferences."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. I also have experience with design tools like Figma."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, I offer maintenance packages and ongoing support to ensure your project stays updated and performs optimally."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;