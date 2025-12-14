import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
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
            ${price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert('Added to cart!');
            }}
            className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
          >
            <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
