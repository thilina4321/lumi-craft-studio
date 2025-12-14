import { useState } from 'react';
import Head from 'next/head';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/product/FilterSidebar';
import { Grid, List, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  // Update your products to include designType:
const allProducts = [
  {
    id: '1',
    name: 'L-vamp Lamp',
    price: 290.00,
    image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    category: 'Bedside lamp',
    designType: 'Drum', // Add this
  },
  {
    id: '2',
    name: 'Oval Lamp',
    price: 175.00,
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    category: 'Hanging lamp',
    designType: 'Oval', // Add this
  },
  {
    id: '3',
    name: 'Square Lamp',
    price: 180.00,
    image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    category: 'Wall Lamp',
    designType: 'Square', // Add this
  },
  {
    id: '4',
    name: 'Conical Tier',
    price: 120.00,
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    category: 'Hanging lamp',
    designType: 'Conical Tier', // Add this
  },
  {
    id: '5',
    name: 'Bedside lamp Light Fixtures',
    price: 125.00,
    image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    category: 'Bedside lamp',
    designType: 'Drum', // Add this
  },
  {
    id: '6',
    name: 'Hanging lamp',
    price: 125.00,
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    category: 'Hanging lamp',
    designType: 'Oval', // Add this
  },
  {
    id: '7',
    name: 'Wall Lamp',
    price: 75.00,
    image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    category: 'Wall Lamp',
    designType: 'Wall Light', // Add this
  },
  {
    id: '8',
    name: 'Floor Stand lamp',
    price: 100.00,
    image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    category: 'Floor Stand lamp',
    designType: 'Rectangle', // Add this
  },
];

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
  };

  // Replace the filtering logic with this:
const filteredProducts = allProducts.filter((product) => {
  // If no filters are selected, show all products
  if (Object.values(filters).every(arr => arr.length === 0)) {
    return true;
  }

  // Check designType filter
  if (filters.designType && filters.designType.length > 0) {
    if (!filters.designType.includes(product.designType)) {
      return false;
    }
  }

  // Check lampType filter (matches product.category)
  if (filters.lampType && filters.lampType.length > 0) {
    if (!filters.lampType.includes(product.category)) {
      return false;
    }
  }

  // Note: specialServices filter would need a corresponding field in products

  return true;
});

  return (
    <>
      <Head>
        <title>Products - LumiCraft Studio</title>
        <meta
          name="description"
          content="Browse our collection of handcrafted lamps and lighting solutions"
        />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900">
              All Products
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              Explore our handcrafted lighting collection
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <FilterSidebar onFilterChange={handleFilterChange} />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="lg:hidden flex items-center space-x-2 px-3 md:px-4 py-2 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition-colors text-sm"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      <span>Filters</span>
                    </button>
                    <span className="text-xs md:text-sm text-gray-600">
                      {filteredProducts.length} products
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Grid className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list'
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <List className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden mb-6">
                  <FilterSidebar onFilterChange={handleFilterChange} />
                </div>
              )}

              {/* Products Grid */}
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}