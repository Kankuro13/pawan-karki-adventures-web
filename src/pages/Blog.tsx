
import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Essential Packing Guide for Everest Base Camp Trek",
      excerpt: "Complete checklist of gear and clothing you'll need for the world's most famous trek. From layering systems to emergency equipment, everything you need to know.",
      content: "Detailed guide covering...",
      author: "Pawan Karki",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Preparation",
      tags: ["Packing", "Everest", "Trekking", "Gear"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Hidden Gems: 5 Secret Viewpoints in the Annapurna Region",
      excerpt: "Discover lesser-known vantage points that offer breathtaking mountain views without the crowds. Local guide's secret spots revealed.",
      content: "Off the beaten path...",
      author: "Pawan Karki",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Destinations",
      tags: ["Annapurna", "Hidden Gems", "Photography", "Views"],
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Understanding Sherpa Culture: Traditions and Beliefs",
      excerpt: "Deep dive into the rich cultural heritage of the Sherpa people. Learn about their traditions, Buddhism, and mountain spirituality.",
      content: "Cultural exploration...",
      author: "Pawan Karki",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Culture",
      tags: ["Sherpa", "Culture", "Buddhism", "Traditions"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Altitude Sickness: Prevention and Management Tips",
      excerpt: "Comprehensive guide to understanding and preventing altitude sickness. Essential knowledge for high-altitude trekking safety.",
      content: "Safety first...",
      author: "Pawan Karki",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Health & Safety",
      tags: ["Health", "Safety", "Altitude", "Prevention"],
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Best Time to Visit Nepal: Seasonal Guide",
      excerpt: "Month-by-month breakdown of Nepal's weather patterns, festivals, and optimal times for different activities and regions.",
      content: "Weather insights...",
      author: "Pawan Karki",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Travel Planning",
      tags: ["Weather", "Seasons", "Planning", "Festivals"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Wildlife Photography in Chitwan: Pro Tips",
      excerpt: "Master the art of wildlife photography in Nepal's premier national park. Camera settings, behavior tips, and ethical guidelines.",
      content: "Photography techniques...",
      author: "Pawan Karki",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Photography",
      tags: ["Photography", "Wildlife", "Chitwan", "Tips"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 7,
      title: "Traditional Nepalese Cuisine: Must-Try Dishes",
      excerpt: "Explore the flavors of Nepal through its traditional dishes. From dal bhat to momos, discover the culinary delights of the Himalayas.",
      content: "Culinary journey...",
      author: "Pawan Karki",
      date: "February 10, 2024",
      readTime: "6 min read",
      category: "Culture",
      tags: ["Food", "Cuisine", "Culture", "Local"],
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 8,
      title: "Sustainable Trekking: Leave No Trace Principles",
      excerpt: "Learn how to minimize your environmental impact while trekking in Nepal. Responsible tourism practices for conscious travelers.",
      content: "Sustainable practices...",
      author: "Pawan Karki",
      date: "February 5, 2024",
      readTime: "8 min read",
      category: "Environment",
      tags: ["Sustainability", "Environment", "Responsible Tourism"],
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  const categories = [
    'all', 'Preparation', 'Destinations', 'Culture', 'Health & Safety', 
    'Travel Planning', 'Photography', 'Environment'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Travel Blog</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Travel tips, cultural insights, and stories from the heart of the Himalayas
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Article</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Latest from the Trail</h2>
            </div>
            
            <Card className="overflow-hidden hover-scale group cursor-pointer max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <Button className="hover-scale">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPosts.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-scale group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles match your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest travel tips, cultural insights, and adventure stories delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Your email address"
              className="flex-1"
            />
            <Button className="hover-scale">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Join 500+ travelers who get our weekly newsletter. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
