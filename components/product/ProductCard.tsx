import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  designType?: string;
}

const ProductCard = ({ id, name, price, image, category, designType }: ProductCardProps) => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
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
    <div className="card overflow-hidden group cursor-pointer">
      <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>

      <div className="p-3 md:p-4">
        <p className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-primary-700">
            Rs. {price.toFixed(2)}
          </span>
          <button
            onClick={handleWhatsAppClick}
            className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
            title="Contact via WhatsApp"
          >
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;