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
        <p className="text-lg mb-4 font-medium">{vacancy.title}</p>
        <p className="mb-4 text-[hsl(var(--neutral-dark))]">The rent you will pay is equivalent to {vacancy.rent}</p>
        
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
            <Square size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Toilet: {vacancy.features.toilets}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Standard parking: {vacancy.features.standardParking}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Accessible parking: {vacancy.features.accessibleParking ? 'Available' : 'Not Available'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed size={20} className="text-[hsl(var(--vitality-green))]" />
            <span>Bedrooms available: {vacancy.features.bedroomsAvailable}</span>
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

      <section className="bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green-75))] text-white pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Housing Vacancies</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Make a Referral
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
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
                      Heidelberg West, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/2" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Bundoora, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/3" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Laverton, VIC
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