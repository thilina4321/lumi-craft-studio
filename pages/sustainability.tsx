import Head from 'next/head';
import { Leaf, Recycle, Users, Factory, Heart, TreePine, ArrowRight } from 'lucide-react';

export default function Sustainability() {
  const newsArticles = [
    {
      id: 1,
      title: 'Eco-Friendly Materials Initiative',
      excerpt: 'LumiCraft pioneers new materials sourcing...',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      link: '#',
    },
    {
      id: 2,
      title: 'Reducing Our Carbon Footprint',
      excerpt: 'Steps we\'re taking towards carbon neutrality...',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      link: '#',
    },
    {
      id: 3,
      title: 'Community & Craft',
      excerpt: 'Supporting artisans and sustainable practices!',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
      link: '#',
    },
  ];

  // YouTube video IDs - extract from your YouTube URLs
  // Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> video ID is "dQw4w9WgXcQ"
  const videos = [
    {
      id: 1,
      title: 'The Sustainable Craftsmanship Journey',
      videoId: 'DS6g1VHYh7s', // Replace with your actual video ID
    },
    {
      id: 2,
      title: 'Eco Crafts Craftsmanship Journey',
      videoId: 'DS6g1VHYh7s', // Replace with your actual video ID
    },
    {
      id: 3,
      title: 'LumiCraft\'s Green Future',
      videoId: 'DS6g1VHYh7s', // Replace with your actual video ID
    },
  ];

  const commitments = [
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Eco-Friendly Materials',
      description:
        'We source sustainable materials including bamboo, recycled glass, and FSC-certified wood.',
    },
    {
      icon: <Recycle className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Zero Waste Production',
      description:
        'Our workshop operates on zero-waste principles with complete recycling programs.',
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Fair Trade Practices',
      description:
        'We work directly with artisan communities, ensuring fair wages and safe conditions.',
    },
    {
      icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Local Manufacturing',
      description:
        'All products are handcrafted locally, reducing carbon footprint.',
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Community Impact',
      description:
        '5% of profits go to environmental conservation and artisan training programs.',
    },
    {
      icon: <TreePine className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Carbon Neutral Shipping',
      description:
        'We offset 100% of shipping emissions with biodegradable packaging.',
    },
  ];

  return (
    <>
      <Head>
        <title>Sustainability - LumiCraft Studio</title>
        <meta
          name="description"
          content="Learn about our commitment to sustainable, ethical craftsmanship"
        />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        

        {/* Latest News */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">
              Latest News on Sustainability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="h-40 md:h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <a
                      href={article.link}
                      className="inline-flex items-center text-sm md:text-base text-primary-700 font-medium hover:text-primary-800"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Stories */}
        <section className="py-12 md:py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">
              Video Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden bg-black rounded-t-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
                Our Sustainability Commitments
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Every decision we make considers its impact on the planet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="card p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    {commitment.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 md:py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Our Impact in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-2">
                  10K+
                </p>
                <p className="text-sm md:text-base text-gray-600">Trees Planted</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-2">
                  95%
                </p>
                <p className="text-sm md:text-base text-gray-600">Sustainable Materials</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-2">
                  0
                </p>
                <p className="text-sm md:text-base text-gray-600">Waste to Landfill</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-2">
                  100+
                </p>
                <p className="text-sm md:text-base text-gray-600">Artisans Supported</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}