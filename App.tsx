import React from 'react';
import {
  Sprout, Users, TrendingUp, ShoppingCart, Phone, ChevronRight, Tractor, LeafyGreen,
  Truck, Shield, Award, Star, MapPin, Calendar, BarChart3, MessageSquare, Leaf, HandCoins
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Transforming Agriculture</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Farmers,</span>
                <span className="block text-green-600">Connecting Consumers</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                FarmYug is revolutionizing Punjab's agricultural sector by directly connecting farmers with consumers, ensuring fair prices and fresh produce for everyone.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left space-x-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 hover:bg-green-50">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1595074475099-699a5f10c035?auto=format&fit=crop&q=80&w=800"
                  alt="Punjab farmer in field"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <div className="text-sm text-gray-600 mt-2">Active Farmers</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600 mt-2">Happy Customers</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600">₹2Cr+</div>
              <div className="text-sm text-gray-600 mt-2">Monthly Sales</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600 mt-2">Districts Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose FarmYug?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're building a sustainable ecosystem that benefits both farmers and consumers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <Tractor className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Farmer Empowerment</h3>
                <p className="mt-2 text-base text-gray-500">
                  Direct market access and fair prices for farmers, eliminating middlemen and increasing profits.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <LeafyGreen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fresh Produce</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get farm-fresh products directly from local farmers to your table within 24 hours of harvest.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Transparent Pricing</h3>
                <p className="mt-2 text-base text-gray-500">
                  Fair and transparent pricing with real-time market rates and price predictions.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Quality Assured</h3>
                <p className="mt-2 text-base text-gray-500">
                  Rigorous quality checks and organic certification verification for all products.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-base text-gray-500">
                  Same-day delivery for local orders and cold chain logistics for perishables.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <HandCoins className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Secure Payments</h3>
                <p className="mt-2 text-base text-gray-500">
                  Multiple payment options with instant settlements for farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How FarmYug Works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Simple, transparent process for both farmers and consumers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Register</h3>
              <p className="mt-2 text-sm text-gray-500">
                Quick sign up with KYC verification for farmers and consumers
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-4">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">List Products</h3>
              <p className="mt-2 text-sm text-gray-500">
                Farmers list their produce with prices and available quantities
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Purchase</h3>
              <p className="mt-2 text-sm text-gray-500">
                Consumers buy directly with secure payment options
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Delivery</h3>
              <p className="mt-2 text-sm text-gray-500">
                Fast, reliable delivery with real-time tracking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Our Community Says
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  alt="Farmer testimonial"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Gurpreet Singh</h4>
                  <p className="text-sm text-gray-600">Farmer, Amritsar</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "FarmYug has transformed my farming business. I now get better prices for my crops and have direct access to customers."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Consumer testimonial"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Consumer, Chandigarh</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "The quality of produce is exceptional, and I love knowing that I'm directly supporting local farmers."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
                  alt="Business testimonial"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Restaurant Owner, Ludhiana</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "FarmYug helps me source the freshest ingredients directly from farmers. My customers can taste the difference."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Additional Features</h2>
            <p className="mt-4 text-green-200">Comprehensive solutions for the agricultural ecosystem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
              <p className="text-green-200">Real-time delivery tracking and route optimization</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Harvest Planning</h3>
              <p className="text-green-200">Crop calendar and harvest scheduling tools</p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-8 w-8 mx-auto text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analytics</h3>
              <p className="text-green-200">Price trends and demand forecasting</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 mx-auto text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-green-200">24/7 customer service and agricultural experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-extrabold mb-4">Download Our Mobile App</h2>
            <p className="text-xl mb-8">Get started with FarmYug on your smartphone</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center space-x-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.35C4.43 17.01 3.47 12.11 5.91 9.15c1.32-1.6 2.93-1.91 4.11-.92.93.77 1.91.77 2.84 0 1.18-.99 2.79-.68 4.11.92.48.58.82 1.27 1.02 2.07-2.67 1.63-2.27 5.89.93 6.96-.47 1.1-.95 2.16-1.87 3.1z"/>
                  <path d="M15.05 6.35c-.38 2.03-2.77 3.25-4.41 2.18.27-1.79 2.7-3.27 4.41-2.18z"/>
                </svg>
                <span>App Store</span>
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center space-x-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.5 20.5v-17c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5H5c-.83 0-1.5-.67-1.5-1.5zm2-15.5v14h13v-14h-13z"/>
                  <path d="M7 8h10v1.5H7zm0 2.5h10v1.5H7zm0 2.5h10v1.5H7z"/>
                </svg>
                <span>Play Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-green-600">Join FarmYug today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Register as Farmer
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Register as Consumer
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About FarmYug</h3>
              <p className="text-gray-400">
                Revolutionizing agriculture through technology and direct farmer-consumer connections.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@farmyug.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: Sector 17, Chandigarh</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © 2024 FarmYug. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;