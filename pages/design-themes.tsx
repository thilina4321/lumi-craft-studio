import { useState } from 'react';
import Head from 'next/head';
import { ExternalLink } from 'lucide-react';
import ModelViewerModal from '@/components/ModelViewerModal';

export default function DesignThemes() {
  const [selectedModel, setSelectedModel] = useState<{ url: string; name: string } | null>(null);

  const signatureThemes = [
    {
      id: 1,
      name: 'Nordic Minimalist',
      description:
        'Nordic Minimalist is created with sleek lines and neutral light shades.',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      // Replace with your actual 3D model URL (.glb or .gltf file)
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    },
    {
      id: 2,
      name: 'Bohemian Chic',
      description:
        'Bohemian chic is a creative blend of vibrant patterns and bold textures styles.',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb',
    },
    {
      id: 3,
      name: 'Industrial Loft',
      description:
        'Industrial loft is a style to maintain raw, exposed elements and edgy industrial designs.',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf',
    },
  ];

  const specialEventCreations = [
    {
      id: 1,
      title: 'Wedding Aisle Decor',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    },
    {
      id: 2,
      title: 'Corporate Gala Lighting',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    },
    {
      id: 3,
      title: 'Corporate Lighting',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    },
    {
      id: 4,
      title: 'New Valiant Event Decor',
      image: 'https://ii1.pepperfry.com/media/catalog/product/g/r/800x880/grey-fabric-shade-table-lamp-with-ceramic-base-by-aapno-rajasthan-grey-fabric-shade-table-lamp-with--xcgf8b.jpg',
    },
  ];

  const antiqueConversions = [
    {
      id: 1,
      name: 'Old Camera Lamp',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
    {
      id: 2,
      name: 'Vintagae Vase Lamp',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
    {
      id: 3,
      name: 'Verbase Customer iliac Lamp',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
    {
      id: 4,
      name: 'Vintagae Vase Front Lamp',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
  ];

  return (
    <>
      <Head>
        <title>Design Themes - LumiCraft Studio</title>
        <meta
          name="description"
          content="Explore our curated design themes and special event creations"
        />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              Design Themes
            </h1>
            <p className="text-base md:text-xl opacity-90 max-w-2xl">
              Explore our curated collections and special event creations
            </p>
          </div>
        </div>

        {/* Signature Themes */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">
              Signature Themes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {signatureThemes.map((theme) => (
                <div
                  key={theme.id}
                  className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="h-48 md:h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${theme.image})` }}
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-display font-semibold mb-2">
                      {theme.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {theme.description}
                    </p>
                    <button
                      onClick={() => setSelectedModel({ url: theme.modelUrl, name: theme.name })}
                      className="inline-flex items-center text-sm md:text-base text-primary-700 font-medium hover:text-primary-800 transition-colors"
                    >
                      View 3D Model
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Event Creations */}
        <section className="py-12 md:py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">
              Special Event Creations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {specialEventCreations.map((event) => (
                <div
                  key={event.id}
                  className="card overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Antique Conversions */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">
              Antique Conversions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {antiqueConversions.map((item) => (
                <div
                  key={item.id}
                  className="card overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary-50 to-cream-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Contact us for a custom design consultation. We'll work with you to
              create the perfect lighting solution.
            </p>
            <a href="/about" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>
        </section>
      </div>

      {/* 3D Model Viewer Modal */}
      <ModelViewerModal
        isOpen={selectedModel !== null}
        onClose={() => setSelectedModel(null)}
        modelUrl={selectedModel?.url || ''}
        title={selectedModel?.name || ''}
      />
    </>
  );
}