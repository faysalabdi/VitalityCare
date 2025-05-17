import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Phone, Mail, MapPin, Building, Bed, Bath, Car, Square, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Link } from "wouter";
import housingVacancies from "@/data/housingVacancies";

const HousingCard = ({ vacancy }: { vacancy: typeof housingVacancies[0] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <img 
          src={vacancy.images[0]} 
          alt={vacancy.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-[hsl(var(--vitality-green))] text-white font-medium px-4 py-2 rounded-br-lg">
          SIL Approved
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--vitality-blue))]">{vacancy.location}</h3>
        <p className="text-lg mb-1 font-medium">{vacancy.title}</p>
        <p className="text-base mb-4 font-medium text-[hsl(var(--vitality-green))]">{vacancy.type}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 mb-6">
          <div className="flex items-center gap-2">
            <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Bedroom: {vacancy.features.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Bathroom: {vacancy.features.bathrooms}</span>
          </div>

          <div className="flex items-center gap-2">
            <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Vacancies available: {vacancy.features.bedroomsAvailable}</span>
          </div>
        </div>
        
        <Button asChild className="w-full rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))]">
          <Link to={`/accommodation/${vacancy.id}`}>View House <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  );
};

const Accommodation = () => {
  return (
    <>
      <Helmet>
        <title>Housing Vacancies | Vitality Community Care</title>
        <meta name="description" content="Explore our Supported Independent Living (SIL) housing vacancies across Melbourne, providing flexible living arrangements with personalized support." />
        <meta property="og:title" content="SIL Housing Vacancies | Vitality Community Care" />
        <meta property="og:description" content="Find quality supported independent living accommodation options tailored to your needs." />
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
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Housing Vacancies</h1>
            <p className="text-xl mb-8 opacity-90">
              For supported independent living.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Home size={16} />
                <span>Supported Independent Living (SIL)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <MapPin size={16} />
                <span>Multiple Locations</span>
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
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-[hsl(var(--vitality-blue))]">Housing Vacancies</span>
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

      {/* Housing Vacancies Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {housingVacancies.map((vacancy) => (
              <HousingCard key={vacancy.id} vacancy={vacancy} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[hsl(var(--vitality-green))] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">(03) 9068 5795</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[hsl(var(--vitality-green))] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">info@vitalitycommunitycare.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/accommodation/1" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Broadmeadows, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/2" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                    Strathtulloh, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/3" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                    Mickleham, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/4" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                    Dandenong North, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/5" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                    Gosnells, WA
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/6" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                    Southern River, WA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation; 