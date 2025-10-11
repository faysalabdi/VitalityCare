import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { useRoute, Link } from "wouter";
import { ArrowRight, Home, Phone, Mail, MapPin, Building, Bed, Bath, Car, Square, ShieldCheck, CheckCircle, Users, User, Calendar } from "lucide-react";
import { useState } from "react";
import housingVacancies from "@/data/housingVacancies";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import SmartImageDisplay from "@/components/shared/SmartImageDisplay";

const AccommodationDetail = () => {
  const [match, params] = useRoute('/accommodation/:id');
  const id = parseInt(params?.id || "1");
  const property = housingVacancies.find(v => v.id === id) || housingVacancies[0];
  
  const [activeImage, setActiveImage] = useState(0);
  
  // Parse the Markdown description
  const renderMarkdown = (text: string) => {
    return { __html: text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\* (.*?)(?:\n|$)/g, '<li>$1</li>')
      .replace(/<li>/g, '<ul class="list-disc ml-5 mb-2"><li>')
      .replace(/<\/li>(?!\n*<li>)/g, '</li></ul>')
    };
  };

  return (
    <>
      <Helmet>
        <title>{property.location} | Vitality Community Care</title>
        <meta name="description" content={property.description} />
        <meta property="og:title" content={`${property.title} | Vitality Community Care`} />
        <meta property="og:description" content={property.description} />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green-75))] text-white pt-20 pb-0 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-10 -right-20 opacity-20 animate-rotate" />
        <PuzzlePiece variant="green" size="md" className="absolute -top-0 -left-1 opacity-20 animate-rotate-reverse" />
        
        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-20 lg:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white">
                <Home size={28} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">{property.location}</h1>
            <p className="text-xl mb-8 opacity-90">
              {property.type}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <MapPin size={16} />
                <span>{property.title}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '140px', width: '100%', display: 'block', marginBottom: '-30px' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      <section className="bg-white pt-0 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[hsl(var(--vitality-blue))]">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/accommodation" className="text-sm font-medium text-gray-700 hover:text-[hsl(var(--vitality-blue))]">
                      Housing Vacancies
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-[hsl(var(--vitality-blue))]">{property.location}</span>
                  </div>
                </li>
              </ol>
            </nav>
            <Button asChild className="mt-4 md:mt-0 rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <Link to="/referral">Make A Referral</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="bg-[hsl(var(--neutral-light))] rounded-lg overflow-hidden mb-4 min-h-[500px]">
                <SmartImageDisplay 
                  src={property.images[activeImage]} 
                  alt={`${property.location} - ${property.images.length > 1 ? `Image ${activeImage + 1}` : 'Property Brochure'}`}
                  title={`${property.location} - Property Brochure`}
                  className="w-full h-full"
                />
              </div>
              
              {/* Thumbnail gallery for multiple images (PNG properties only) */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === index 
                          ? 'border-[hsl(var(--vitality-blue))] shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-[hsl(var(--vitality-green))] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${property.location} thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--vitality-blue))]">{property.title}</h2>

              <div className="space-y-6">
                {/* Property Stats */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--vitality-green-5))] rounded-full flex items-center justify-center">
                        <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Bedrooms</p>
                        <p className="font-semibold text-gray-900">{property.features.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--vitality-blue-5))] rounded-full flex items-center justify-center">
                        <Bath size={20} className="text-[hsl(var(--vitality-blue))]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Bathrooms</p>
                        <p className="font-semibold text-gray-900">{property.features.bathrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--vitality-green-5))] rounded-full flex items-center justify-center">
                        <Users size={20} className="text-[hsl(var(--vitality-green))]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Vacancies Available</p>
                        <p className="font-semibold text-gray-900">{property.features.bedroomsAvailable}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="text-lg font-bold mb-4 text-[hsl(var(--vitality-blue))]">Contact Details</h3>
                  <div className="space-y-3">
                    <a href="tel:0390685795" className="flex items-center gap-3 hover:text-[hsl(var(--vitality-green))] transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--vitality-green-5))] rounded-full flex items-center justify-center">
                        <Phone size={18} className="text-[hsl(var(--vitality-green))]" />
                      </div>
                      <span className="font-medium">(03) 9068 5795</span>
                    </a>
                    <a href="mailto:info@vitalitycommunitycare.com.au" className="flex items-center gap-3 hover:text-[hsl(var(--vitality-blue))] transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--vitality-blue-5))] rounded-full flex items-center justify-center">
                        <Mail size={18} className="text-[hsl(var(--vitality-blue))]" />
                      </div>
                      <span className="font-medium text-sm break-all">info@vitalitycommunitycare.com.au</span>
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" className="w-full rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] shadow-lg">
                  <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-12 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">{property.title}</h2>
            <div 
              className="prose max-w-none prose-headings:text-[hsl(var(--vitality-blue))] prose-strong:font-bold prose-ul:mt-2 prose-li:mt-1"
              dangerouslySetInnerHTML={renderMarkdown(property.fullDescription)}
            />

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Property features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {property.propertyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[hsl(var(--vitality-green))]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[hsl(var(--vitality-blue-5))] rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Interested in this property?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your accommodation needs or to arrange a viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))]">
                <Link to="/referral">Make a Referral</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccommodationDetail; 