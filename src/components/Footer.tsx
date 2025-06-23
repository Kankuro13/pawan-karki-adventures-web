
import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Explore with Pawan</h3>
                <p className="text-sm text-gray-400">Your Nepal Adventure Guide</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Experience the beauty of Nepal with a trusted local guide. From the majestic Himalayas to cultural heritage sites, we create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Pawan</Link>
              <Link to="/tours" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Popular Tours</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Gallery</Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Testimonials</Link>
              <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Travel Blog</Link>
              <Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">FAQ</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+977-9841234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">pawan@explorenepal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Thamel, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300 text-sm">Stay updated with our latest tours and travel tips!</p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Explore with Pawan Karki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
