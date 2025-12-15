import Link from 'next/link';
import { MessageCircle, Eye } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  designType?: string;
}

const ProductCard = ({ id, name, price, image, category, designType }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigation when clicking WhatsApp button
    
    // Format the WhatsApp message with line breaks
    const message = `Hi! I'm interested in this product:

*${name}*

📦 Category: ${category}${designType ? `\n🎨 Design: ${designType}` : ''}
💰 Price: Rs. ${price.toFixed(2)}

I would like to know more details about this product.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL (works for both web and mobile)
    const whatsappUrl = `https://wa.me/94774576201?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Link href={`/product/${id}`}>
      <div 
        className="card overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          
          {/* View Details Badge - Shows on hover */}
          <div className={`absolute top-3 right-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
              <Eye className="w-3 h-3 text-primary-600" />
              <span className="text-xs font-medium text-primary-600">View Details</span>
            </div>
          </div>
        </div>

        <div className="p-3 md:p-4">
          <p className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg md:text-xl font-bold text-primary-700">
              Rs. {price.toFixed(2)}
            </span>
            <button
              onClick={handleWhatsAppClick}
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-sm hover:shadow-md z-10 relative"
              title="Contact via WhatsApp"
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;