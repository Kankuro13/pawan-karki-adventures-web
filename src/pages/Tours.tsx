
import React, { useState } from 'react';
import { Filter, Clock, Users, Star, Mountain, Leaf, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tours = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const tours = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      category: "Adventure",
      duration: "14 days",
      durationDays: 14,
      difficulty: "Challenging",
      price: "$1,299",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Everest Base Camp", "Kala Patthar viewpoint", "Sherpa culture", "Mountain flights"],
      description: "The ultimate trekking adventure to the base of the world's highest peak."
    },
    {
      id: 2,
      title: "Annapurna Circuit Trek",
      category: "Adventure",
      duration: "12 days",
      durationDays: 12,
      difficulty: "Moderate",
      price: "$899",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Thorong La Pass", "Diverse landscapes", "Hot springs", "Ancient villages"],
      description: "Classic circuit trek through diverse landscapes and traditional villages."
    },
    {
      id: 3,
      title: "Kathmandu Cultural Heritage Tour",
      category: "Cultural",
      duration: "3 days",
      durationDays: 3,
      difficulty: "Easy",
      price: "$199",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Durbar Squares", "Swayambhunath Temple", "Local markets", "Traditional crafts"],
      description: "Explore the rich cultural heritage of Nepal's historic capital city."
    },
    {
      id: 4,
      title: "Chitwan National Park Safari",
      category: "Wildlife",
      duration: "3 days",
      durationDays: 3,
      difficulty: "Easy",
      price: "$299",
      rating: 4.6,
      reviews: 93,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Rhino spotting", "Jungle walks", "Canoeing", "Cultural shows"],
      description: "Wildlife adventure in Nepal's first national park."
    },
    {
      id: 5,
      title: "Langtang Valley Trek",
      category: "Adventure",
      duration: "8 days",
      durationDays: 8,
      difficulty: "Moderate",
      price: "$649",
      rating: 4.8,
      reviews: 74,
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Langtang glacier", "Tamang culture", "Kyanjin Gompa", "Mountain views"],
      description: "Beautiful valley trek with stunning mountain views and Tamang culture."
    },
    {
      id: 6,
      title: "Bhaktapur & Patan Day Tour",
      category: "Cultural",
      duration: "1 day",
      durationDays: 1,
      difficulty: "Easy",
      price: "$89",
      rating: 4.5,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1559664158-66e64c4b60f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Medieval architecture", "Pottery workshops", "Local cuisine", "Art galleries"],
      description: "Discover two ancient cities filled with medieval art and architecture."
    },
    {
      id: 7,
      title: "Paragliding in Pokhara",
      category: "Adventure",
      duration: "Half day",
      durationDays: 0.5,
      difficulty: "Easy",
      price: "$149",
      rating: 4.9,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Aerial views", "Phewa Lake", "Annapurna range", "Professional instruction"],
      description: "Soar above Pokhara with breathtaking views of the Himalayas."
    },
    {
      id: 8,
      title: "Bardia Jungle Safari",
      category: "Wildlife",
      duration: "4 days",
      durationDays: 4,
      difficulty: "Easy",
      price: "$399",
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1474418103743-7d1ed4d67925?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Tiger tracking", "Elephant safari", "Dolphin watching", "Bird watching"],
      description: "Remote wilderness experience in Nepal's largest national park."
    }
  ];

  const filteredTours = tours.filter(tour => {
    const typeMatch = filterType === 'all' || tour.category.toLowerCase() === filterType;
    const durationMatch = filterDuration === 'all' || 
      (filterDuration === 'short' && tour.durationDays <= 3) ||
      (filterDuration === 'medium' && tour.durationDays > 3 && tour.durationDays <= 10) ||
      (filterDuration === 'long' && tour.durationDays > 10);
    const difficultyMatch = filterDifficulty === 'all' || tour.difficulty.toLowerCase() === filterDifficulty;
    
    return typeMatch && durationMatch && difficultyMatch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Adventure': return Mountain;
      case 'Cultural': return Camera;
      case 'Wildlife': return Leaf;
      default: return Mountain;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Explore Nepal Tours</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              From challenging mountain treks to cultural heritage tours and wildlife safaris
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter Tours:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tour Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDuration} onValueChange={setFilterDuration}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">Short (1-3 days)</SelectItem>
                  <SelectItem value="medium">Medium (4-10 days)</SelectItem>
                  <SelectItem value="long">Long (10+ days)</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="challenging">Challenging</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {tours.length} tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => {
              const CategoryIcon = getCategoryIcon(tour.category);
              
              return (
                <Card key={tour.id} className="overflow-hidden hover-scale group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900">
                        <CategoryIcon className="h-4 w-4 mr-1" />
                        {tour.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-900">{tour.price}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className={getDifficultyColor(tour.difficulty)}>
                        {tour.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{tour.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{tour.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{tour.rating}</span>
                        <span>({tour.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {tour.highlights.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{tour.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to="/booking">Book This Tour</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tours match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setFilterType('all');
                  setFilterDuration('all');
                  setFilterDifficulty('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            I can create a custom tour just for you! Get in touch to discuss your perfect Nepal adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <Link to="/contact">Request Custom Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale">
              <Link to="/booking">Book Existing Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
