import { useState } from 'react';
import Head from 'next/head';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/product/FilterSidebar';
import { Grid, List, SlidersHorizontal, X } from 'lucide-react';

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  // Update your products to include designType:
  const allProducts = [
    {
      id: '1',
      name: 'The Botanical Beacon',
      price: 12000.00,
      image: '/lamps/Botanical_Beacon.jpeg',
      category: 'Detail',
      designType: 'Drum',
    },
    {
      id: '2',
      name: 'Oval Lamp',
      price: 175.00,
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      category: 'Hanging lamp',
      designType: 'Oval',
    },
    {
      id: '3',
      name: 'Square Lamp',
      price: 180.00,
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      category: 'Wall Lamp',
      designType: 'Square',
    },
    {
      id: '4',
      name: 'Conical Tier',
      price: 120.00,
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      category: 'Hanging lamp',
      designType: 'Conical Tier',
    },
    {
      id: '5',
      name: 'Bedside lamp Light Fixtures',
      price: 125.00,
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      category: 'Bedside lamp',
      designType: 'Drum',
    },
    {
      id: '6',
      name: 'Hanging lamp',
      price: 125.00,
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      category: 'Hanging lamp',
      designType: 'Oval',
    },
    {
      id: '7',
      name: 'Wall Lamp',
      price: 75.00,
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      category: 'Wall Lamp',
      designType: 'Wall Light',
    },
    {
      id: '8',
      name: 'Floor Stand lamp',
      price: 100.00,
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      category: 'Floor Stand lamp',
      designType: 'Rectangle',
    },
  ];

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  // Count active filters
  const activeFilterCount = Object.values(filters).reduce(
    (count, arr) => count + arr.length,
    0
  );

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
              <FilterSidebar 
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearFilters}
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="lg:hidden flex items-center space-x-2 px-3 md:px-4 py-2 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition-colors text-sm relative"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      <span>Filters</span>
                      {activeFilterCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {activeFilterCount}
                        </span>
                      )}
                    </button>
                    <span className="text-xs md:text-sm text-gray-600">
                      {filteredProducts.length} products
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {activeFilterCount > 0 && (
                      <button
                        onClick={handleClearFilters}
                        className="hidden sm:flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <X className="w-3 h-3" />
                        <span>Clear all</span>
                      </button>
                    )}
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
                <div className="lg:hidden mb-6 bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterSidebar 
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearAll={handleClearFilters}
                  />
                  <div className="mt-4 pt-4 border-t border-gray-200 flex gap-3">
                    <button
                      onClick={handleClearFilters}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Apply ({filteredProducts.length})
                    </button>
                  </div>
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