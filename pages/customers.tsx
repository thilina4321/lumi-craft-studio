import { useState } from 'react';
import Head from 'next/head';
import { X, Star } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  image: string;
  room: string;
  theme: string;
  testimonial: string;
  rating: number;
}

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const customers: Customer[] = [
    {
      id: '1',
      name: 'Sarah',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Cozy Living Room',
      theme: 'Nordic Minimalist',
      testimonial: 'Absolutely love the warm glow and design!',
      rating: 5,
    },
    {
      id: '2',
      name: 'James',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Bedroom Room',
      theme: 'Bohemian Chic',
      testimonial: 'Perfect addition to our reading nook - James',
      rating: 5,
    },
    {
      id: '3',
      name: 'Ben',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Cozy Living Room',
      theme: 'Bohemian',
      testimonial:
        'Bohemian chic is manifold ornesa decorative, ambience and felt inviting...',
      rating: 5,
    },
    {
      id: '4',
      name: 'Ben',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Perfect addition',
      theme: 'Nordic Minimalist',
      testimonial: 'Perfect addition to our reading nook.',
      rating: 5,
    },
    {
      id: '5',
      name: 'Sarah',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Cozy Living Room',
      theme: 'Nordic Minimalist',
      testimonial: 'Absolutely love the warm glow and design!',
      rating: 5,
    },
    {
      id: '6',
      name: 'James',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Cozy Living Room',
      theme: 'Nordic Minimalist',
      testimonial: 'Absolutely love the warm glow and design!',
      rating: 5,
    },
    {
      id: '7',
      name: 'Ben',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Bedroom Decor',
      theme: 'Bohemian Chic',
      testimonial: 'Perfect addition to our reading nook, and left space - James',
      rating: 5,
    },
    {
      id: '8',
      name: 'James',
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      room: 'Cozy Living Room',
      theme: 'Bohemian Chic',
      testimonial: 'Perfect addition to our reading nook.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Customer Gallery - LumiCraft Studio</title>
        <meta
          name="description"
          content="See how our customers style their LumiCraft lamps"
        />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 md:mb-4">
              Customer Showcase & Reviews
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              See how our community brings light into their homes
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="card overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCustomer(customer)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${customer.image})` }}
                  />
                </div>

                <div className="p-2 md:p-4">
                  <div className="flex items-center space-x-2 mb-1 md:mb-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                        {customer.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 mb-1 md:mb-2 line-clamp-2">
                    {customer.room} - {customer.theme}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-1 md:mb-2">
                    {customer.testimonial}
                  </p>
                  <StarRating rating={customer.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              Share Your Story
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              We'd love to see how you've styled your LumiCraft pieces!
            </p>
            <button className="btn-primary">Submit Your Photo</button>
          </div>
        </div>
      </div>

      {/* Responsive Photo Modal */}
      {selectedCustomer && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedCustomer(null)}
        >
          <button
            onClick={() => setSelectedCustomer(null)}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div
                className="aspect-square md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedCustomer.image})` }}
              />

              {/* Content */}
              <div className="p-4 md:p-8">
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full" />
                  <div>
                    <h3 className="text-lg md:text-2xl font-display font-semibold">
                      {selectedCustomer.name}
                    </h3>
                    <StarRating rating={selectedCustomer.rating} />
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm text-primary-700 font-medium uppercase tracking-wider mb-2">
                    Room & Theme
                  </p>
                  <p className="text-base md:text-lg font-semibold mb-1">
                    {selectedCustomer.room}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {selectedCustomer.theme}
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                    Testimonial
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "{selectedCustomer.testimonial}"
                  </p>
                </div>

                <button className="btn-primary w-full">
                  Shop Similar Style
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
