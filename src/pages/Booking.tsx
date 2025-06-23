import React, { useState } from 'react';
import { Calendar, Users, Clock, Mountain, CheckCircle, AlertCircle, CreditCard, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Booking = () => {
  const [selectedTour, setSelectedTour] = useState('');
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    tour: '',
    date: '',
    groupSize: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      emergencyContact: '',
      emergencyPhone: ''
    },
    preferences: {
      dietaryRequirements: '',
      medicalConditions: '',
      fitnessLevel: '',
      previousExperience: '',
      specialRequests: ''
    },
    agreement: false
  });

  const tours = [
    {
      id: 'ebc',
      name: 'Everest Base Camp Trek',
      duration: '14 days',
      difficulty: 'Challenging',
      price: 1299,
      maxGroup: 12,
      description: 'The ultimate Himalayan adventure to the base of the world\'s highest peak.',
      includes: ['Professional guide', 'All permits', 'Tea house accommodation', 'Meals during trek', 'Airport transfers'],
      highlights: ['Everest Base Camp', 'Kala Patthar viewpoint', 'Sherpa culture', 'Mountain flights']
    },
    {
      id: 'annapurna',
      name: 'Annapurna Circuit Trek',
      duration: '12 days',
      difficulty: 'Moderate',
      price: 899,
      maxGroup: 15,
      description: 'Classic circuit trek through diverse landscapes and traditional villages.',
      includes: ['Licensed guide', 'TIMS & permits', 'Lodge accommodation', 'All meals', 'Transportation'],
      highlights: ['Thorong La Pass', 'Diverse landscapes', 'Hot springs', 'Ancient villages']
    },
    {
      id: 'cultural',
      name: 'Kathmandu Cultural Heritage Tour',
      duration: '3 days',
      difficulty: 'Easy',
      price: 199,
      maxGroup: 20,
      description: 'Explore the rich cultural heritage of Nepal\'s historic capital.',
      includes: ['Expert guide', 'Entry fees', 'Transportation', 'Cultural experiences'],
      highlights: ['UNESCO World Heritage Sites', 'Local markets', 'Traditional crafts', 'Temple visits']
    },
    {
      id: 'chitwan',
      name: 'Chitwan National Park Safari',
      duration: '3 days',
      difficulty: 'Easy',
      price: 299,
      maxGroup: 16,
      description: 'Wildlife adventure in Nepal\'s first national park.',
      includes: ['Nature guide', 'Park fees', 'Resort accommodation', 'All meals', 'Activities'],
      highlights: ['Rhino spotting', 'Jungle walks', 'Canoeing', 'Cultural shows']
    }
  ];

  const handleInputChange = (section, field, value) => {
    if (section) {
      setBookingData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const selectedTourData = tours.find(tour => tour.id === selectedTour);
  const totalPrice = selectedTourData ? selectedTourData.price * (parseInt(bookingData.groupSize) || 1) : 0;
  const deposit = Math.round(totalPrice * 0.25);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingData);
    alert('Thank you for your booking! I will contact you within 24 hours to confirm your adventure.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Book Your Adventure</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in">
              Start your journey to the heart of the Himalayas with a trusted local guide
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Booking Details</CardTitle>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step > num ? <CheckCircle className="h-4 w-4" /> : num}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1: Tour Selection */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Select Your Tour</h3>
                      
                      <div className="space-y-4">
                        {tours.map(tour => (
                          <div 
                            key={tour.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedTour === tour.id 
                                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => {
                              setSelectedTour(tour.id);
                              handleInputChange(null, 'tour', tour.id);
                            }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg">{tour.name}</h4>
                                <p className="text-gray-600 mt-1">{tour.description}</p>
                                <div className="flex items-center space-x-4 mt-3 text-sm">
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4 text-gray-500" />
                                    <span>{tour.duration}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Mountain className="h-4 w-4 text-gray-500" />
                                    <span>{tour.difficulty}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <span>Max {tour.maxGroup}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600">${tour.price}</div>
                                <div className="text-sm text-gray-500">per person</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Start Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingData.date}
                            onChange={(e) => handleInputChange(null, 'date', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="groupSize">Group Size</Label>
                          <Select value={bookingData.groupSize} onValueChange={(value) => handleInputChange(null, 'groupSize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select group size" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(selectedTourData?.maxGroup || 10)].map((_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {i + 1} {i === 0 ? 'person' : 'people'}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={bookingData.personalInfo.firstName}
                            onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={bookingData.personalInfo.lastName}
                            onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={bookingData.personalInfo.email}
                            onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={bookingData.personalInfo.phone}
                            onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country of Residence *</Label>
                        <Input
                          id="country"
                          value={bookingData.personalInfo.country}
                          onChange={(e) => handleInputChange('personalInfo', 'country', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                          <Input
                            id="emergencyContact"
                            value={bookingData.personalInfo.emergencyContact}
                            onChange={(e) => handleInputChange('personalInfo', 'emergencyContact', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                          <Input
                            id="emergencyPhone"
                            type="tel"
                            value={bookingData.personalInfo.emergencyPhone}
                            onChange={(e) => handleInputChange('personalInfo', 'emergencyPhone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Preferences & Requirements */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Preferences & Requirements</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fitnessLevel">Fitness Level</Label>
                        <Select value={bookingData.preferences.fitnessLevel} onValueChange={(value) => handleInputChange('preferences', 'fitnessLevel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your fitness level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner - Little to no hiking experience</SelectItem>
                            <SelectItem value="intermediate">Intermediate - Regular hiker, good fitness</SelectItem>
                            <SelectItem value="advanced">Advanced - Experienced trekker, excellent fitness</SelectItem>
                            <SelectItem value="expert">Expert - Mountaineering experience</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="previousExperience">Previous Trekking Experience</Label>
                        <Textarea
                          id="previousExperience"
                          value={bookingData.preferences.previousExperience}
                          onChange={(e) => handleInputChange('preferences', 'previousExperience', e.target.value)}
                          placeholder="Describe your previous trekking or hiking experience..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                        <Textarea
                          id="dietaryRequirements"
                          value={bookingData.preferences.dietaryRequirements}
                          onChange={(e) => handleInputChange('preferences', 'dietaryRequirements', e.target.value)}
                          placeholder="Any dietary restrictions, allergies, or preferences..."
                          rows={2}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="medicalConditions">Medical Conditions</Label>
                        <Textarea
                          id="medicalConditions"
                          value={bookingData.preferences.medicalConditions}
                          onChange={(e) => handleInputChange('preferences', 'medicalConditions', e.target.value)}
                          placeholder="Any medical conditions I should be aware of..."
                          rows={2}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={bookingData.preferences.specialRequests}
                          onChange={(e) => handleInputChange('preferences', 'specialRequests', e.target.value)}
                          placeholder="Any special accommodations or requests..."
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review & Payment */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Review & Confirmation</h3>
                      
                      {selectedTourData && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Booking Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Tour:</span>
                              <span className="font-medium">{selectedTourData.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Start Date:</span>
                              <span>{bookingData.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Group Size:</span>
                              <span>{bookingData.groupSize} {parseInt(bookingData.groupSize) === 1 ? 'person' : 'people'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span>{selectedTourData.duration}</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between font-semibold">
                              <span>Total Price:</span>
                              <span>${totalPrice}</span>
                            </div>
                            <div className="flex justify-between text-blue-600 font-semibold">
                              <span>Deposit Required:</span>
                              <span>${deposit}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="agreement"
                            checked={bookingData.agreement}
                            onCheckedChange={(checked) => handleInputChange(null, 'agreement', checked)}
                          />
                          <Label htmlFor="agreement" className="text-sm leading-relaxed">
                            I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and 
                            <a href="#" className="text-blue-600 hover:underline ml-1">cancellation policy</a>. 
                            I understand that a 25% deposit is required to confirm the booking.
                          </Label>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div className="text-sm">
                              <p className="font-medium text-blue-900">What happens next?</p>
                              <p className="text-blue-700 mt-1">
                                After submitting this form, I'll contact you within 24 hours to confirm details and arrange payment. 
                                No payment is required at this stage - this is just a booking request.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      Previous
                    </Button>
                    
                    {step < 4 ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        disabled={
                          (step === 1 && (!selectedTour || !bookingData.date || !bookingData.groupSize)) ||
                          (step === 2 && (!bookingData.personalInfo.firstName || !bookingData.personalInfo.lastName || !bookingData.personalInfo.email))
                        }
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button 
                        type="submit"
                        disabled={!bookingData.agreement}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Submit Booking Request
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Tour Details */}
            {selectedTourData && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{selectedTourData.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{selectedTourData.difficulty}</Badge>
                    <Badge variant="outline">{selectedTourData.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">What's Included:</h4>
                      <ul className="text-sm space-y-1">
                        {selectedTourData.includes.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Highlights:</h4>
                      <ul className="text-sm space-y-1">
                        {selectedTourData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Mountain className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Price Summary */}
            {selectedTourData && bookingData.groupSize && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Price Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Price per person:</span>
                      <span>${selectedTourData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of people:</span>
                      <span>{bookingData.groupSize}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total Price:</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-blue-600 font-semibold">
                      <span>Deposit (25%):</span>
                      <span>${deposit}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Remaining balance (${totalPrice - deposit}) due 30 days before departure
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Support */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Have questions about your booking? I'm here to help!
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Call: +977-9841234567
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
