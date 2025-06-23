
import React, { useState } from 'react';
import { Camera, Play, Heart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'trekking',
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Everest Base Camp Trail",
      description: "Beautiful morning views on the way to Everest Base Camp",
      likes: 124,
      views: 892
    },
    {
      id: 2,
      type: 'video',
      category: 'cultural',
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kathmandu Durbar Square",
      description: "Traditional architecture and daily life in historic square",
      likes: 89,
      views: 543
    },
    {
      id: 3,
      type: 'image',
      category: 'wildlife',
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Rhino in Chitwan",
      description: "One-horned rhinoceros spotted during jungle safari",
      likes: 156,
      views: 1023
    },
    {
      id: 4,
      type: 'image',
      category: 'trekking',
      src: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Annapurna Sunrise",
      description: "Spectacular sunrise views from Poon Hill",
      likes: 203,
      views: 1456
    },
    {
      id: 5,
      type: 'video',
      category: 'adventure',
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Paragliding Over Pokhara",
      description: "Aerial adventure with stunning mountain backdrop",
      likes: 98,
      views: 734
    },
    {
      id: 6,
      type: 'image',
      category: 'cultural',
      src: "https://images.unsplash.com/photo-1559664158-66e64c4b60f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bhaktapur Pottery",
      description: "Traditional pottery making in ancient city",
      likes: 77,
      views: 445
    },
    {
      id: 7,
      type: 'image',
      category: 'trekking',
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Langtang Valley",
      description: "Serene valley views and mountain reflections",
      likes: 134,
      views: 876
    },
    {
      id: 8,
      type: 'image',
      category: 'people',
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Happy Trekkers",
      description: "Celebrating successful completion of Everest Base Camp trek",
      likes: 245,
      views: 1289
    },
    {
      id: 9,
      type: 'video',
      category: 'wildlife',
      src: "https://images.unsplash.com/photo-1474418103743-7d1ed4d67925?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bardia Wildlife",
      description: "Tiger tracking expedition in Bardia National Park",
      likes: 167,
      views: 934
    },
    {
      id: 10,
      type: 'image',
      category: 'cultural',
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Prayer Flags",
      description: "Colorful prayer flags in the Himalayas",
      likes: 98,
      views: 623
    },
    {
      id: 11,
      type: 'image',
      category: 'adventure',
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "River Rafting",
      description: "Thrilling white water rafting adventure",
      likes: 112,
      views: 756
    },
    {
      id: 12,
      type: 'image',
      category: 'people',
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Local Village Life",
      description: "Meeting local families in remote mountain villages",
      likes: 89,
      views: 567
    }
  ];

  const categories = [
    { value: 'all', label: 'All Photos & Videos' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'people', label: 'Happy Travelers' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Capturing the magic of Nepal through stunning photography and videos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-scale group cursor-pointer">
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-200">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                        <Play className="h-8 w-8 text-gray-900" />
                      </div>
                    </div>
                  )}
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/60 text-white">
                      {item.type === 'video' ? <Play className="h-3 w-3 mr-1" /> : <Camera className="h-3 w-3 mr-1" />}
                      {item.type === 'video' ? 'Video' : 'Photo'}
                    </Badge>
                  </div>
                  
                  {/* Overlay with stats */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{item.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  
                  <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory('all')}
              >
                View All
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* User Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Your Adventure</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have photos from your Nepal adventure? We'd love to feature them in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale">
                Submit Your Photos
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                Follow Us on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600">Hear from travelers who have experienced Nepal with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sarah's Everest Base Camp Experience",
                thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                duration: "2:34"
              },
              {
                title: "Marco's Cultural Journey",
                thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                duration: "1:45"
              },
              {
                title: "Emma's Wildlife Adventure",
                thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                duration: "3:12"
              }
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden hover-scale group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-200">
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                      <Play className="h-8 w-8 text-gray-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
