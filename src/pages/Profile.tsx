import { 
  User, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone,
  Download,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'Figma', level: 88, category: 'Design' },
    { name: 'Adobe Creative', level: 82, category: 'Design' }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Startup Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading frontend development for a SaaS platform serving 10k+ users. Built responsive interfaces using React, TypeScript, and modern development practices.',
      achievements: [
        'Improved app performance by 40%',
        'Led team of 3 junior developers',
        'Implemented design system used across 5 products'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      location: 'Jakarta, ID',
      description: 'Developed web applications for various clients using MERN stack. Collaborated with designers and product managers to deliver high-quality solutions.',
      achievements: [
        'Delivered 15+ client projects',
        'Maintained 98% client satisfaction rate',
        'Mentored 2 intern developers'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Studio',
      period: '2020 - 2021',
      location: 'Jakarta, ID',
      description: 'Started my professional journey building websites and learning modern development practices. Focused on frontend development and UI implementation.',
      achievements: [
        'Completed 20+ website projects',
        'Learned React and modern JS ecosystem',
        'Contributed to open source projects'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google UX Design Certificate',
    'Meta Frontend Developer Certificate',
    'Scrum Master Certified'
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 3+ years of experience creating digital solutions that make a difference
          </p>
        </div>

        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 glass">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary/20">
              <User className="w-4 h-4 mr-2" />
              About Me
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-primary/20">
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-primary/20">
              <Award className="w-4 h-4 mr-2" />
              Skills
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <Card className="lg:col-span-1 glass border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-foreground">
                      YN
                    </div>
                    <div className="absolute inset-0 bg-gradient-glow rounded-full blur-lg opacity-30"></div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                  <p className="text-primary font-medium mb-4">Creative Developer & UI Designer</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-3" />
                      Jakarta, Indonesia
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-3" />
                      hello@example.com
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-3" />
                      +62 812 3456 7890
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </CardContent>
              </Card>

              {/* About Description */}
              <Card className="lg:col-span-2 glass border-border/50">
                <CardHeader>
                  <CardTitle className="gradient-text">My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Hello! I'm a passionate creative developer with over 3 years of experience in building 
                    beautiful and functional digital experiences. My journey started with a curiosity about 
                    how websites work, and it has evolved into a deep love for creating solutions that combine 
                    aesthetic appeal with technical excellence.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in frontend development with React, TypeScript, and modern CSS frameworks, 
                    but I also enjoy working on backend technologies and exploring new tools. When I'm not coding, 
                    you can find me experimenting with UI/UX design, contributing to open source projects, 
                    or sharing knowledge with the developer community.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">What I'm Currently Up To:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Building a SaaS platform for content creators
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Learning Three.js for 3D web experiences
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Contributing to React ecosystem open source projects
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text">Certifications & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg bg-muted/20 border border-border/30">
                      <Award className="w-5 h-5 text-primary mr-3" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-8">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex items-center text-primary font-medium mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {['Frontend', 'Backend', 'Database', 'Design'].map((category) => (
                <Card key={category} className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="gradient-text">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline" className="border-primary/50 text-primary">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="gradient-text">Additional Skills & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Git & GitHub',
                    'Docker',
                    'AWS',
                    'GraphQL',
                    'REST APIs',
                    'Testing (Jest)',
                    'Agile/Scrum',
                    'Responsive Design',
                    'SEO',
                    'Performance Optimization',
                    'Accessibility',
                    'Mentoring'
                  ].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="justify-center p-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;