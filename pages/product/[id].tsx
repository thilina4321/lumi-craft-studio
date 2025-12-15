import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Minus, 
  Plus,
  Truck,
  Shield,
  RefreshCw,
  Star,
  Check
} from 'lucide-react';

interface ProductDetails {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  designType: string;
  description?: string;
  story?: string;
  targetAudience?: string;
  concept?: string;
  keyMessage?: string;
  features?: string[];
  specifications?: Array<{ label: string; value: string }>;
}

// This would typically come from an API or database
const productsData: Record<string, ProductDetails> = {
  '1': {
    id: '1',
    name: 'The Botanical Beacon',
    price: 12000.00,
    image: '/lamps/Botanical_Beacon.jpeg',
    category: 'Detail',
    designType: 'Accent/Ambient Table Lamp',
    story: '"……..Elara called it her "portable garden." In a city made of grey concrete and steel glass, where the only green she saw was the flicker of a traffic light, this lamp was her sanctuary……"',
    targetAudience: 'Urban dwellers, students, and young professionals who live in smaller, often sterile apartments or dorms and seek ways to personalize and soften their living spaces.',
    description: 'The Botanical Beacon is your personal slice of twilight garden, always in bloom. It offers a warm, visual hug that turns off the noise of the day and turns on the calm of the night.',
    concept: 'Domestic Biophilia: Cultivating Calm Through Contained Light',
    keyMessage: 'Sanctuary in Shadow',
    features: [
      'Handcrafted rectangular shade with botanical patterns',
      'Warm ambient lighting perfect for evening relaxation',
      'Compact design ideal for small spaces',
      'Natural materials for authentic biophilic experience',
      'Energy-efficient LED compatible',
      'Dimmable light option'
    ],
    specifications: [
      { label: 'Product Type', value: 'Accent/Ambient Table Lamp (Rectangular Shade)' },
      { label: 'Dimensions', value: '12" H x 6" W x 6" D' },
      { label: 'Shade Material', value: 'Botanical-pressed fabric' },
      { label: 'Base Material', value: 'Solid walnut wood' },
      { label: 'Bulb Type', value: 'E26 LED (included)' },
      { label: 'Wattage', value: '40W equivalent' },
      { label: 'Color Temperature', value: '2700K (Warm White)' },
      { label: 'Weight', value: '2.5 lbs' }
    ]
  },
  
  // ... add more products as needed
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications' | 'philosophy' | 'reviews'>('features');

  // Get product data
  const product = id ? productsData[id as string] : null;

  // If product not found or still loading
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  // Mock additional images
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toFixed(2)}`;
  };

  const handleAddToCart = () => {
    // Implement your add to cart logic
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description || '',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} - LumiCraft Studio</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Products
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Favorite & Share Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart 
                      className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx 
                        ? 'border-primary-600 shadow-md scale-105' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Category & Design Type */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {product.designType}
                </span>
              </div>

              {/* Product Name */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                {product.keyMessage && (
                  <p className="text-sm text-gray-500 italic">{product.keyMessage}</p>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(127 reviews)</span>
              </div>

              {/* Price */}
              <div className="py-4 border-y border-gray-200">
                <div className="text-4xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </div>
                <p className="text-sm text-gray-500 mt-1">Price includes tax</p>
              </div>

              {/* Story Section */}
              {product.story && (
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">The Story</h3>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    {product.story}
                  </p>
                </div>
              )}

              {/* Description */}
              {product.description && (
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="px-6 py-3 font-medium text-gray-900 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  {quantity > 1 && (
                    <span className="text-sm text-gray-500">
                      Total: {formatPrice(product.price * quantity)}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                    <p className="text-xs text-gray-500">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">2 Year Warranty</p>
                    <p className="text-xs text-gray-500">Quality guaranteed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                    <p className="text-xs text-gray-500">30-day policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Tab Headers */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  <button 
                    onClick={() => setActiveTab('features')}
                    className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'features' 
                        ? 'text-primary-600 border-primary-600' 
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    }`}
                  >
                    Features
                  </button>
                  {product.specifications && (
                    <button 
                      onClick={() => setActiveTab('specifications')}
                      className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === 'specifications' 
                          ? 'text-primary-600 border-primary-600' 
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      Specifications
                    </button>
                  )}
                  {product.concept && (
                    <button 
                      onClick={() => setActiveTab('philosophy')}
                      className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === 'philosophy' 
                          ? 'text-primary-600 border-primary-600' 
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      Design Philosophy
                    </button>
                  )}
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'reviews' 
                        ? 'text-primary-600 border-primary-600' 
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6 lg:p-8">
                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      Key Features
                    </h3>
                    {product.features && product.features.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 bg-primary-100 rounded-full">
                              <Check className="w-4 h-4 text-primary-600" />
                            </div>
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">Product features coming soon...</p>
                    )}

                    {/* Target Audience Section */}
                    {product.targetAudience && (
                      <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">Designed For</h4>
                        <p className="text-gray-700 leading-relaxed">{product.targetAudience}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Specifications Tab */}
                {activeTab === 'specifications' && product.specifications && (
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      Technical Specifications
                    </h3>
                    <div className="divide-y divide-gray-200">
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <dt className="font-medium text-gray-900">{spec.label}</dt>
                          <dd className="text-gray-700">{spec.value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Philosophy Tab */}
                {activeTab === 'philosophy' && product.concept && (
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      Design Philosophy
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-primary-600">
                        <h4 className="font-semibold text-gray-900 mb-2">Core Concept</h4>
                        <p className="text-gray-700 italic">"{product.concept}"</p>
                      </div>
                      {product.description && (
                        <div className="mt-6">
                          <p className="text-gray-700 leading-relaxed">{product.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      Customer Reviews
                    </h3>
                    <div className="text-center py-12 text-gray-500">
                      <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Customer reviews coming soon...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}