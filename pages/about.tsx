import Head from 'next/head';
            import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'; 


export default function About() {
  const boardMembers = [
    {
      name: 'Ava Chen',
      role: 'Founder & CEO',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
    {
      name: 'Ben Carter',
      role: 'Head of Design',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
    {
      name: 'Sofia Khan',
      role: 'Sustainability Lead',
      image: 'https://i5.walmartimages.com/asr/9834e053-3e1d-4b55-9e65-6615c5bd3a02_1.d4e8898a6240db8d35d5efd5e63c8b48.jpeg',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - LumiCraft Studio</title>
        <meta
          name="description"
          content="Learn about LumiCraft Studio's mission, team, and values"
        />
      </Head>

      <div className="bg-cream-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              About Us
            </h1>
            <p className="text-base md:text-xl opacity-90">
              Discover our story, mission, and the team behind LumiCraft Studio
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Company Profile */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6">
                Company Profile
              </h2>
              <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  LumiCraft Studio is pioneer in bespoke lighting design, founded on a
                  deeprooted the sustainability, craftsmanship, and customization, and
                  innovation. We specialize unique handcrafted lighting line fixtures, from
                  contemporarilary to intricate conversions.
                </p>
                <p>
                  Our mission is thus illuminate spaces with illuminates you beautifuly but
                  responsible and reflective of individual stories.
                </p>
                <p className="font-medium text-primary-700 mt-6">
                  Company Name: Brooklyn, NY, USA
                  <br />
                  Address: 123 Artisan Way, Studio 5B, Brooklyn, N11201
                  <br />
                  Contact: info@lumicraft.com | +1 (555) 123-4567
                </p>
              </div>
            </div>

            {/* Contact & Inquiries */}

<div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
  <h2 className="text-xl md:text-2xl font-display font-bold mb-6">
    Contact & Inquiries
  </h2>

  {/* Contact Info */}
  <div className="space-y-4 mb-8">
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-2">
        Company Name: Brooklyn, NY, USA
      </p>
    </div>
    <div className="flex items-start space-x-3">
      <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm font-semibold text-gray-700">Address:</p>
        <p className="text-sm text-gray-600">
          123 Artisan Way, Studio 5B, Brooklyn, N11201
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <Mail className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm font-semibold text-gray-700">Contact:</p>
        <p className="text-sm text-gray-600">info@lumicraft.com</p>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
      </div>
    </div>
    
    {/* WhatsApp Contact */}
    <a
      href="https://wa.me/94774576201?text=Hello!%20I'm%20interested%20in%20your%20handcrafted%20lamps.%20Can%20you%20provide%20more%20information?"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start space-x-3 group cursor-pointer hover:bg-green-50 p-2 rounded-md transition-colors"
    >
      <MessageCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
      <div>
        <p className="text-sm font-semibold text-gray-700 group-hover:text-green-700">
          WhatsApp:
        </p>
        <p className="text-sm text-gray-600 group-hover:text-green-600">
          +94 77 457 6201
        </p>
      </div>
    </a>
  </div>

  {/* Inquiry Form */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Inquiry Form</h3>
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>
      <div>
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send
      </button>
    </form>
  </div>
</div>
          </div>
        </div>

        {/* Our Leadership */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Our Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-primary-600 font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
}
