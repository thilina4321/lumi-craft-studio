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
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      icon: <Recycle className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Zero Waste Production',
      description:
        'Our workshop operates on zero-waste principles with complete recycling programs.',
      gradient: 'from-blue-400 to-cyan-600',
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Fair Trade Practices',
      description:
        'We work directly with artisan communities, ensuring fair wages and safe conditions.',
      gradient: 'from-purple-400 to-pink-600',
    },
    {
      icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Local Manufacturing',
      description:
        'All products are handcrafted locally, reducing carbon footprint.',
      gradient: 'from-orange-400 to-red-600',
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Community Impact',
      description:
        '5% of profits go to environmental conservation and artisan training programs.',
      gradient: 'from-rose-400 to-red-600',
    },
    {
      icon: <TreePine className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Carbon Neutral Shipping',
      description:
        'We offset 100% of shipping emissions with biodegradable packaging.',
      gradient: 'from-teal-400 to-green-600',
    },
  ];

  const stats = [
    {
      value: '10K+',
      label: 'Trees Planted',
      icon: <TreePine className="w-8 h-8 md:w-10 md:h-10" />,
      color: 'from-green-500 to-emerald-600',
    },
    {
      value: '95%',
      label: 'Sustainable Materials',
      icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" />,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      value: '0',
      label: 'Waste to Landfill',
      icon: <Recycle className="w-8 h-8 md:w-10 md:h-10" />,
      color: 'from-purple-500 to-pink-600',
    },
    {
      value: '100+',
      label: 'Artisans Supported',
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      color: 'from-orange-500 to-red-600',
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

        {/* Our Commitments - IMPROVED UI */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream-50 to-green-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Our Sustainability Commitments
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Every decision we make considers its impact on the planet and future generations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${commitment.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${commitment.gradient} text-white rounded-2xl mb-5 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {commitment.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">
                    {commitment.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats - IMPROVED UI */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from our commitment to sustainability
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {stat.icon}
                    </div>

                    {/* Value */}
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </p>

                    {/* Label */}
                    <p className="text-base md:text-lg text-gray-300 font-medium">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}