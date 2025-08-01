import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star, Code, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing efficient, maintainable, and scalable code that follows best practices.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces that enhance user experience.'
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance across all devices.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-primary/30 to-secondary/20 rounded-full blur-3xl float animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-accent/25 to-warning/15 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-success/20 to-primary/15 rounded-full blur-3xl float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tl from-secondary/20 to-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '6s' }}></div>
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-warning rounded-full animate-ping" style={{ animationDelay: '7s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
         

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">HI, I'M</span>
            <br />
            <span className="text-foreground hover:gradient-text transition-all duration-500">REY NAYA SARI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A Social Media Analyst and Writer passionate about how data and content shape perception and create real connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent hover:shadow-glow hover:scale-105 transition-all duration-300 group border-0 text-white font-semibold"
            >
              <Link to="/portfolio">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Do <span className="gradient-text">Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining creativity with technical expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-border/50 hover:shadow-card hover-scale transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass border-border/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <CardContent className="relative p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something amazing together. 
                I'm excited to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Link to="/profile">Learn More About Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;