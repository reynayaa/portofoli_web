import { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance. Built with Next.js and deployed on Vercel.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      description: 'Complete restaurant management system with order tracking, inventory management, and customer relationship features.',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App UI Kit',
      description: 'Comprehensive UI kit for mobile applications with 50+ screens, components, and design patterns for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'design',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'design', name: 'Design', count: projects.filter(p => p.category === 'design').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, design, and problem-solving
          </p>
        </div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 glass max-w-md mx-auto">
            <TabsTrigger value="featured" className="data-[state=active]:bg-primary/20">
              Featured Work
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20">
              All Projects
            </TabsTrigger>
          </TabsList>

          {/* Featured Projects */}
          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="glass border-border/50 overflow-hidden group hover:shadow-card transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                          <Eye className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id 
                      ? "bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      : "border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  }
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="glass border-border/50 overflow-hidden group hover:shadow-card hover-scale transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="glass border-border/50 overflow-hidden relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <CardContent className="relative p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Like What You See?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's work together to bring your ideas to life. I'm always excited about new challenges and creative projects.
              </p>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;