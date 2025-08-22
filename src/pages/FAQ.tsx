
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, FileText, Shield, CreditCard, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const faqCategories = [
    {
      id: 'documents',
      title: 'Travel Documents & Permits',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'health',
      title: 'Health & Safety',
      icon: Shield,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'payment',
      title: 'Payment & Cancellation',
      icon: CreditCard,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'booking',
      title: 'Booking & Planning',
      icon: Calendar,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const faqs = [
    {
      id: 1,
      category: 'documents',
      question: "What documents do I need to enter Nepal?",
      answer: "You need a valid passport with at least 6 months validity remaining and a tourist visa. Tourist visas can be obtained on arrival at Tribhuvan International Airport or at land borders. You'll need a passport photo and the visa fee (USD $30 for 15 days, $50 for 30 days, $125 for 90 days). You can also apply for an e-visa online before arrival.",
      popular: true
    },
    {
      id: 2,
      category: 'documents',
      question: "Do I need special permits for trekking?",
      answer: "For most trekking routes including Everest Base Camp and Annapurna Circuit, you need TIMS (Trekkers' Information Management System) card and national park permits. For restricted areas like Upper Mustang or Manaslu, special permits are required. I'll help you obtain all necessary permits as part of our service.",
      popular: true
    },
    {
      id: 3,
      category: 'health',
      question: "What vaccinations do I need for Nepal?",
      answer: "No vaccinations are mandatory for Nepal, but recommended ones include Hepatitis A and B, Typhoid, Japanese Encephalitis (if visiting during monsoon), and routine vaccines (MMR, DPT, flu). For malaria prevention, medication may be needed if visiting Terai region during certain seasons. Consult your doctor 4-6 weeks before travel.",
      popular: false
    },
    {
      id: 4,
      category: 'health',
      question: "How do you handle altitude sickness?",
      answer: "I'm trained in altitude sickness prevention and management. We follow proper acclimatization schedules, monitor symptoms closely, and carry emergency oxygen and medications. Rest days are built into itineraries, and I know the evacuation procedures. If serious symptoms occur, immediate descent is the priority.",
      popular: true
    },
    {
      id: 5,
      category: 'health',
      question: "Is travel insurance required?",
      answer: "While not legally required, comprehensive travel insurance is absolutely essential and mandatory for all my tours. Your insurance must cover high-altitude trekking (up to 5,500m), helicopter evacuation, and medical expenses. I can recommend suitable insurance providers that specifically cover Nepal trekking.",
      popular: true
    },
    {
      id: 6,
      category: 'payment',
      question: "What is your payment and cancellation policy?",
      answer: "A 25% deposit is required to confirm your booking, with the balance due 30 days before departure. Cancellations more than 30 days before: 10% fee. 15-30 days: 25% fee. 7-14 days: 50% fee. Less than 7 days: 75% fee. Weather-related cancellations are handled differently, and I always try to reschedule when possible.",
      popular: true
    },
    {
      id: 7,
      category: 'payment',
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, PayPal, and major credit cards through secure payment gateways. For international transfers, please allow 3-5 business days for processing. Cash payments can be made in USD or Nepali Rupees upon arrival, though advance payment is preferred for permits and bookings.",
      popular: false
    },
    {
      id: 8,
      category: 'booking',
      question: "How far in advance should I book?",
      answer: "For peak seasons (October-November and March-May), book 2-3 months in advance. Off-season treks can be booked 4-6 weeks ahead. Popular routes and festivals require earlier booking. Custom trips need more planning time. I recommend booking early to secure permits, flights, and accommodations.",
      popular: false
    },
    {
      id: 9,
      category: 'booking',
      question: "What's included in your tour packages?",
      answer: "My packages typically include: professional guide service, all permits and fees, accommodation as specified, meals during treks, transportation, first aid kit, and emergency support. International flights, personal equipment, travel insurance, drinks, and personal expenses are not included. Each tour has a detailed inclusion list.",
      popular: true
    },
    {
      id: 10,
      category: 'booking',
      question: "Can you customize tours for specific needs?",
      answer: "Absolutely! I specialize in customized tours based on your fitness level, interests, time constraints, and budget. Whether you want photography focus, cultural immersion, challenging peaks, or family-friendly options, I can design the perfect itinerary. Contact me to discuss your specific requirements.",
      popular: false
    },
    {
      id: 11,
      category: 'documents',
      question: "Can I extend my visa while in Nepal?",
      answer: "Yes, tourist visas can be extended at the Department of Immigration in Kathmandu or Pokhara. Extensions cost $2 per day for up to 150 days per calendar year. You'll need your passport, visa extension form, passport photos, and the extension fee. The process usually takes a few hours to one day.",
      popular: false
    },
    {
      id: 12,
      category: 'health',
      question: "What should I pack for different seasons?",
      answer: "Spring/Autumn: Layered clothing, warm jacket, rain gear, good trekking boots. Winter: Heavy insulation, down jacket, warm sleeping bag, winter boots. Monsoon: Waterproof everything, quick-dry clothes, extra socks. I provide detailed packing lists specific to your trek and season. Quality gear rental is available in Kathmandu.",
      popular: true
    },
    {
      id: 13,
      category: 'booking',
      question: "What if I need to change my travel dates?",
      answer: "Date changes are possible depending on availability and timing. Changes made more than 45 days before departure are usually free. Changes within 45 days may incur fees based on permit costs, accommodation bookings, and seasonal pricing differences. I always try to accommodate changes when possible.",
      popular: false
    },
    {
      id: 14,
      category: 'health',
      question: "How physically fit do I need to be?",
      answer: "Fitness requirements vary by trek. Day hikes: basic fitness. Multi-day treks: good cardio and leg strength. High altitude treks: excellent fitness and endurance. I provide fitness guidelines and training recommendations for each trip. Most importantly, start preparing months in advance with regular cardio and hiking practice.",
      popular: true
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Everything you need to know about traveling to Nepal and booking your adventure
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find answers organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category) => {
              const CategoryIcon = category.icon;
              const categoryCount = faqs.filter(faq => faq.category === category.id).length;
              
              return (
                <Card key={category.id} className="hover-scale cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <CategoryIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600">{categoryCount} questions</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      {!searchTerm && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Questions</h2>
              <p className="text-gray-600">Quick answers to the questions we get asked most often</p>
            </div>
            
            <div className="space-y-4">
              {popularFaqs.map((faq) => {
                const category = faqCategories.find(cat => cat.id === faq.category);
                const CategoryIcon = category?.icon || HelpCircle;
                
                return (
                  <Card key={faq.id} className="overflow-hidden">
                    <Collapsible open={openItems.has(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`p-2 rounded-lg ${category?.color || 'bg-gray-50 text-gray-600'}`}>
                                <CategoryIcon className="h-5 w-5" />
                              </div>
                              <div className="text-left">
                                <CardTitle className="text-lg">{faq.question}</CardTitle>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {category?.title || 'General'}
                                  </Badge>
                                  {faq.popular && (
                                    <Badge className="text-xs bg-orange-100 text-orange-800">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            {openItems.has(faq.id) ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {searchTerm ? 'Search Results' : 'All Questions'}
            </h2>
            <p className="text-gray-600">
              {searchTerm ? 
                `Found ${filteredFaqs.length} questions matching "${searchTerm}"` :
                'Complete list of frequently asked questions'
              }
            </p>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const category = faqCategories.find(cat => cat.id === faq.category);
              const CategoryIcon = category?.icon || HelpCircle;
              
              return (
                <Card key={faq.id} className="overflow-hidden">
                  <Collapsible open={openItems.has(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${category?.color || 'bg-gray-50 text-gray-600'}`}>
                              <CategoryIcon className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-lg">{faq.question}</CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {category?.title || 'General'}
                                </Badge>
                                {faq.popular && (
                                  <Badge className="text-xs bg-orange-100 text-orange-800">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          {openItems.has(faq.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-4">No questions found matching your search.</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? I'm here to help with any questions about your Nepal adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <Link to="/booking">Book a Consultation</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            I typically respond to inquiries within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
