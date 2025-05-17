import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { useRoute, Link } from "wouter";
import { ArrowRight, Home, Phone, Mail, MapPin, Building, Bed, Bath, Car, Square, ShieldCheck, CheckCircle, Users, User, Calendar } from "lucide-react";
import { useState } from "react";
import housingVacancies from "@/data/housingVacancies";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-[hsl(var(--neutral-light))] rounded-lg overflow-hidden mb-4 h-[400px]">
                <img 
                  src={property.images[activeImage]} 
                  alt={`${property.location} - View ${activeImage + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                      activeImage === index 
                        ? 'border-[hsl(var(--vitality-blue))]' 
                        : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.location} - Thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{property.title}</h2>

              <div className="mb-8">
                <div className="grid grid-cols-2 gap-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
                    <span>Bedroom: {property.features.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={20} className="text-[hsl(var(--vitality-green))]" />
                    <span>Bathroom: {property.features.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
                    <span>Bedrooms available: {property.features.bedroomsAvailable}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Contact Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[hsl(var(--vitality-green))] mr-3" />
                      <span>(03) 9068 5795</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[hsl(var(--vitality-green))] mr-3" />
                      <span>info@vitalitycommunitycare.com.au</span>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                  <Link to="/contact">Contact Us</Link>
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