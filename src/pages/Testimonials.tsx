
import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Calendar, MapPin, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [filterTour, setFilterTour] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Everest Base Camp Trek",
      date: "March 2024",
      text: "Pawan made our Everest Base Camp trek absolutely incredible. His knowledge of the mountains, local culture, and commitment to safety were outstanding. He went above and beyond to ensure we were comfortable and prepared for each day. The stories he shared about Sherpa culture and mountain history made the journey so much more meaningful. I can't recommend him highly enough!",
      highlights: ["Excellent guide", "Great safety record", "Cultural insights"],
      verified: true
    },
    {
      id: 2,
      name: "Marco Rossi",
      country: "Italy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Kathmandu Cultural Tour",
      date: "February 2024",
      text: "Best guide in Nepal! Pawan's cultural tour of Kathmandu was fascinating. He has deep knowledge of the history and traditions, and his connections with local artisans made the experience authentic. We visited places that most tourists never see. His English is excellent and he's very patient with questions. Highly recommend!",
      highlights: ["Authentic experiences", "Local connections", "Historical knowledge"],
      verified: true
    },
    {
      id: 3,
      name: "Emma Watson",
      country: "United Kingdom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Chitwan Safari",
      date: "January 2024",
      text: "Amazing experience in Chitwan! Pawan's expertise in wildlife and local ecology made our safari unforgettable. We saw rhinos, tigers, and countless bird species. He knew exactly when and where to spot wildlife. His respect for nature and commitment to conservation was inspiring. A perfect guide for nature lovers!",
      highlights: ["Wildlife expertise", "Conservation minded", "Great photographer"],
      verified: true
    },
    {
      id: 4,
      name: "Hans Mueller",
      country: "Germany",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Annapurna Circuit",
      date: "November 2023",
      text: "Pawan guided us through the Annapurna Circuit and it was the adventure of a lifetime. His fitness level and mountain experience are impressive. He helped us acclimatize properly and his weather knowledge kept us safe. The tea house recommendations were perfect and the cultural interactions he facilitated were wonderful.",
      highlights: ["Excellent fitness", "Weather expertise", "Cultural connections"],
      verified: true
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      country: "Japan",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Langtang Valley Trek",
      date: "October 2023",
      text: "Pawan is an exceptional guide. Our Langtang Valley trek was beautifully organized. He's very knowledgeable about the local Tamang culture and helped us understand the rebuilding efforts after the earthquake. His positive attitude and encouragement helped me complete my first major trek. Absolutely wonderful experience!",
      highlights: ["Cultural sensitivity", "Encouraging", "Well organized"],
      verified: true
    },
    {
      id: 6,
      name: "Sophie Dubois",
      country: "France",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Bhaktapur & Patan Tour",
      date: "September 2023",
      text: "Pawan showed us the most beautiful aspects of Bhaktapur and Patan. His knowledge of architecture and art history is impressive. We learned so much about traditional crafts and met amazing local artists. He made arrangements for us to try pottery making - such a special memory! Professional and passionate guide.",
      highlights: ["Art expertise", "Hands-on experiences", "Professional"],
      verified: true
    },
    {
      id: 7,
      name: "James Thompson",
      country: "Australia",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 4,
      tour: "Paragliding Pokhara",
      date: "August 2023",
      text: "Great paragliding experience with Pawan. He coordinated everything perfectly with the flight operators and made sure we were comfortable. The views of the Annapurna range were breathtaking. Only minor issue was some communication with the flight company, but Pawan sorted it out quickly. Would definitely book again!",
      highlights: ["Well coordinated", "Problem solver", "Great views"],
      verified: true
    },
    {
      id: 8,
      name: "Maria Gonzalez",
      country: "Spain",
      avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Bardia Jungle Safari",
      date: "July 2023",
      text: "Incredible wildlife experience in Bardia! Pawan's tracking skills are amazing - we spotted tigers, elephants, and so much more. He's very respectful of the animals and their habitat. His jungle knowledge and safety awareness made us feel secure throughout. The local community interactions he arranged were also very meaningful.",
      highlights: ["Tracking skills", "Safety conscious", "Community connections"],
      verified: true
    },
    {
      id: 9,
      name: "Michael O'Connor",
      country: "Ireland",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      tour: "Everest Base Camp Trek",
      date: "May 2023",
      text: "Pawan is simply the best! Our EBC trek was challenging but he supported us every step of the way. His experience showed in how well he managed our group's different fitness levels. The acclimatization schedule was perfect. He's also a great storyteller and kept our spirits up during tough sections. Cannot recommend highly enough!",
      highlights: ["Group management", "Perfect pacing", "Great storyteller"],
      verified: true
    }
  ];

  const tours = [
    'Everest Base Camp Trek',
    'Annapurna Circuit',
    'Kathmandu Cultural Tour',
    'Chitwan Safari',
    'Langtang Valley Trek',
    'Bhaktapur & Patan Tour',
    'Paragliding Pokhara',
    'Bardia Jungle Safari'
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const ratingMatch = filterRating === 'all' || testimonial.rating.toString() === filterRating;
    const tourMatch = filterTour === 'all' || testimonial.tour === filterTour;
    return ratingMatch && tourMatch;
  });

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const totalTestimonials = testimonials.length;
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
  const fourStarCount = testimonials.filter(t => t.rating === 4).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">What Travelers Say</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Real experiences from adventurers who have explored Nepal with Pawan
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="flex items-center space-x-1">
                  <span className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                  <Star className="h-8 w-8 text-yellow-400 fill-current" />
                </div>
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">{totalTestimonials}+</p>
              <p className="text-gray-600">Total Reviews</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">{Math.round((fiveStarCount / totalTestimonials) * 100)}%</p>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">100%</p>
              <p className="text-gray-600">Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-100 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter Reviews:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterTour} onValueChange={setFilterTour}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Filter by Tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tours</SelectItem>
                  {tours.map(tour => (
                    <SelectItem key={tour} value={tour}>{tour}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredTestimonials.length} of {totalTestimonials} reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-scale h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{testimonial.country}</span>
                        </div>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {testimonial.tour}
                    </Badge>
                    <div className="relative">
                      <Quote className="h-6 w-6 text-blue-200 absolute -top-1 -left-1" />
                      <p className="text-gray-700 leading-relaxed pl-5 italic">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No reviews match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setFilterRating('all');
                  setFilterTour('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Review Submission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have you traveled with Pawan? We'd love to hear about your adventure! Your review helps future travelers discover the magic of Nepal.
          </p>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
            <p className="text-gray-600 mb-6">
              Reviews are carefully verified and help maintain the quality of our service. 
              Please share your honest experience to help fellow adventurers.
            </p>
            <Button size="lg" className="hover-scale">
              Submit Your Review
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Own Adventure?</h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied travelers who have experienced the magic of Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale">
              <Link to="/tours">Explore Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
