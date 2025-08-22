
import React from 'react';
import { Award, Heart, Shield, Leaf, Camera, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is my top priority. I'm certified in first aid and carry emergency equipment on all treks."
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description: "I love sharing the beauty of Nepal with visitors. Every tour is crafted with genuine care and enthusiasm."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Tourism",
      description: "Committed to sustainable practices that preserve Nepal's natural beauty for future generations."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Certified guide with extensive training and years of experience in Nepal's diverse terrain."
    }
  ];

  const certifications = [
    "Nepal Tourism Board Licensed Guide",
    "Wilderness First Aid Certified",
    "Mountain Guide Association Member",
    "Eco-Tourism Specialist",
    "Cultural Heritage Expert"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">About Pawan Karki</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Your trusted local guide to the wonders of Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">My Journey as Your Guide</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Born and raised in the foothills of the majestic Himalayas, I've been exploring Nepal's 
                breathtaking landscapes since childhood. What started as a love for my homeland's natural 
                beauty has grown into a passionate career spanning over a decade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I became a professional guide because I believe that Nepal's true magic isn't just in 
                its stunning vistas, but in the stories, culture, and connections that make each journey 
                unique. Every trek, every cultural tour, every wildlife safari is an opportunity to 
                share the Nepal I know and love.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My mission is simple: to ensure that your adventure in Nepal is not only safe and 
                memorable, but transformative. I take pride in creating personalized experiences that 
                go beyond the typical tourist path, connecting you with local communities and hidden 
                gems that only a true local can share.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pawan Karki in the mountains"
                className="rounded-lg shadow-2xl w-full h-96 object-cover hover-scale"
              />
              <div className="absolute -top-4 -left-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Values & Commitment</h2>
            <p className="text-lg text-gray-600">What guides every adventure we take together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-blue-600 group-hover:text-green-600 transition-colors duration-200" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stats */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <p className="text-4xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-700 font-medium">Happy Travelers</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <p className="text-4xl font-bold text-green-600">1000+</p>
                  <p className="text-gray-700 font-medium">Treks Completed</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <p className="text-4xl font-bold text-orange-600">25+</p>
                  <p className="text-gray-700 font-medium">Countries Served</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <p className="text-4xl font-bold text-purple-600">0</p>
                  <p className="text-gray-700 font-medium">Safety Incidents</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Credentials & Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Memories from the Trail</h2>
            <p className="text-lg text-gray-600">Capturing moments with fellow adventurers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover-scale group">
                <img 
                  src={image} 
                  alt={`Adventure moment ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Together?</h2>
          <p className="text-xl mb-8">
            Let's create unforgettable memories in the heart of the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <Link to="/booking">Start Your Adventure</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
