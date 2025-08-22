
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mountain, Users, Award, Camera, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const popularTours = [
    {
      title: "Everest Base Camp Trek",
      duration: "14 days",
      difficulty: "Challenging",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Annapurna Circuit",
      duration: "12 days", 
      difficulty: "Moderate",
      price: "$899",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Chitwan Safari",
      duration: "3 days",
      difficulty: "Easy",
      price: "$299",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "Pawan made our Everest Base Camp trek absolutely incredible. His knowledge and care for safety were outstanding!",
      rating: 5
    },
    {
      name: "Marco Rossi", 
      country: "Italy",
      text: "Best guide in Nepal! The cultural tour of Kathmandu was fascinating. Highly recommend Pawan's services.",
      rating: 5
    },
    {
      name: "Emma Watson",
      country: "UK", 
      text: "Amazing experience in Chitwan. Pawan's expertise in wildlife and local culture made it unforgettable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Namaste! <br />
            <span className="text-blue-400">Explore Nepal</span> with Pawan
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Your personal guide to unforgettable adventures in the heart of the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              <Link to="/tours">View Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Meet Your Guide</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 10 years of experience guiding adventurers through Nepal's most spectacular landscapes, 
                I'm passionate about sharing the beauty and culture of my homeland. From the towering peaks of 
                the Himalayas to the rich cultural heritage of ancient cities, every journey is crafted to create 
                lasting memories.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Happy Travelers</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <Button asChild className="hover-scale">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pawan Karki - Professional Guide"
                className="rounded-lg shadow-2xl w-full h-96 object-cover hover-scale"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-semibold">Certified Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tours</h2>
            <p className="text-lg text-gray-600">Discover Nepal's most breathtaking destinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover-scale group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{tour.price}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{tour.duration}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tour.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      tour.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/tours">
                View All Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Travelers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real adventurers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Nepal Adventure?</h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied travelers who have experienced the magic of Nepal with a trusted local guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <Link to="/booking">Book Your Tour Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale">
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
