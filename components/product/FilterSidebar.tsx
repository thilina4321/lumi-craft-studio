import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  filters?: Record<string, string[]>;
  onFilterChange: (filters: Record<string, string[]>) => void;
  onClearAll?: () => void;
}

const FilterSidebar = ({ filters, onFilterChange, onClearAll }: FilterSidebarProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    designType: true,
    lampType: true,
    specialServices: true,
  });

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    designType: [],
    lampType: [],
    specialServices: [],
  });

  // Sync with parent filters when they change
  useEffect(() => {
    if (filters) {
      setSelectedFilters(filters);
    }
  }, [filters]);

  const filterSections = {
    designType: {
      title: 'DESIGN TYPE',
      options: ['Drum', 'Oval', 'Rectangle', 'Square', 'Conical Tier', 'Wall Light'],
    },
    lampType: {
      title: 'LAMP TYPE',
      options: ['Bedside lamp', 'Hanging lamp', 'Wall Lamp', 'Floor Stand lamp'],
    },
    specialServices: {
      title: 'SPECIAL SERVICES',
      options: ['Event deco', 'Theme deco'],
    },
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section: string, option: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[section] || [];
      const newFilters = currentFilters.includes(option)
        ? currentFilters.filter((f) => f !== option)
        : [...currentFilters, option];

      const updated = { ...prev, [section]: newFilters };
      onFilterChange(updated);
      return updated;
    });
  };

  const clearAllFilters = () => {
    const emptyFilters = {
      designType: [],
      lampType: [],
      specialServices: [],
    };
    setSelectedFilters(emptyFilters);
    
    if (onClearAll) {
      onClearAll();
    } else {
      onFilterChange(emptyFilters);
    }
  };

  const hasActiveFilters = Object.values(selectedFilters).some(
    (filters) => filters.length > 0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs md:text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4 md:space-y-6">
        {Object.entries(filterSections).map(([key, section]) => (
          <div key={key} className="border-b border-gray-200 pb-4 last:border-b-0">
            <button
              onClick={() => toggleSection(key)}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="text-sm md:text-base font-medium text-gray-900">{section.title}</h3>
              {openSections[key] ? (
                <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              )}
            </button>

            {openSections[key] && (
              <div className="space-y-2">
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters[key]?.includes(option) || false}
                      onChange={() => handleFilterChange(key, option)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-xs md:text-sm text-gray-700 group-hover:text-gray-900">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;