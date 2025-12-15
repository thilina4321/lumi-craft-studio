import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Design Themes', href: '/design-themes' },
    { name: 'Customers', href: '/customers' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="LumiCraft Studio"
                fill
                className="object-contain transition-transform group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-tight">
                LumiCraft Studio
              </span>
              <span className="hidden sm:block text-xs text-gray-600 font-medium">
                Where Light Becomes Art
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  isActive(link.href)
                    ? 'text-primary-700 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive(link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;