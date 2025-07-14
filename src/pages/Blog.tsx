import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Building Responsive Layouts with CSS Grid and Flexbox',
      excerpt: 'Learn how to create flexible and responsive layouts using modern CSS techniques. We\'ll explore practical examples and best practices.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=300&fit=crop',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'CSS',
      tags: ['CSS', 'Responsive Design', 'Web Development'],
      featured: true
    },
    {
      id: 2,
      title: 'React Performance Optimization: Tips and Tricks',
      excerpt: 'Discover advanced techniques to optimize your React applications. From memo to useMemo, learn when and how to use each optimization.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'React',
      tags: ['React', 'Performance', 'JavaScript'],
      featured: true
    },
    {
      id: 3,
      title: 'The Future of Web Development: What to Expect in 2024',
      excerpt: 'Explore upcoming trends and technologies that will shape web development. From AI integration to new frameworks.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Trends',
      tags: ['Web Development', 'Trends', 'Future'],
      featured: false
    },
    {
      id: 4,
      title: 'Mastering TypeScript: Advanced Types and Patterns',
      excerpt: 'Deep dive into TypeScript\'s advanced type system. Learn about utility types, conditional types, and design patterns.',
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=300&fit=crop',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'Programming', 'Best Practices'],
      featured: false
    },
    {
      id: 5,
      title: 'Creating Beautiful Animations with Framer Motion',
      excerpt: 'Learn how to add delightful animations to your React applications using Framer Motion. From basic transitions to complex gestures.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Animation',
      tags: ['React', 'Animation', 'Framer Motion'],
      featured: false
    },
    {
      id: 6,
      title: 'Building a Design System from Scratch',
      excerpt: 'Step-by-step guide to creating a comprehensive design system. Learn about tokens, components, and documentation.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop',
      date: '2023-12-15',
      readTime: '18 min read',
      category: 'Design System',
      tags: ['Design System', 'UI/UX', 'Components'],
      featured: true
    }
  ];

  const categories = ['All', 'React', 'CSS', 'TypeScript', 'Design System', 'Animation', 'Trends'];
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 4);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, design, and technology
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="glass border-border/50 overflow-hidden group hover:shadow-card transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <Card className="glass border-border/50 p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 bg-background/50 border-border/50"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="glass border-border/50 overflow-hidden group hover:shadow-card hover-scale transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="p-2 group-hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold gradient-text">All Articles</h2>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-all duration-300">
              View All Posts
            </Button>
          </div>
          <div className="space-y-6">
            {posts.slice(2).map((post) => (
              <Card key={post.id} className="glass border-border/50 overflow-hidden group hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="group-hover:text-primary transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20">
          <Card className="glass border-border/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <CardContent className="relative p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter and get notified about new articles, tutorials, and insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 bg-background/50 border-border/50"
                />
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;