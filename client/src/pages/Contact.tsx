import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { useLocation } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle,
  Briefcase,
  ArrowRight,
  Clock,
  Building,
  Map,
  Headphones,
  Send,
  CalendarClock
} from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Melbourne (Head Office)",
    address: "Corporate One, 84 Hotham St, Preston, 3072",
    icon: <Building className="h-6 w-6 text-[hsl(var(--vitality-green))]" />,
    primary: true
  },
  {
    city: "Perth (Western Australia)",
    address: "2232B Albany Hwy, Gosnells, 6110 WA",
    icon: <MapPin className="h-6 w-6 text-[hsl(var(--vitality-blue))]" />
  },
  {
    city: "Adelaide (South Australia)",
    address: "33 Warwick St, Walkerville, 5081 SA",
    icon: <MapPin className="h-6 w-6 text-[hsl(var(--vitality-blue))]" />
  },
  {
    city: "Brisbane (Queensland)",
    address: "477 Boundary St, Spring Hill, 4000 QLD",
    icon: <MapPin className="h-6 w-6 text-[hsl(var(--vitality-blue))]" />
  },
  {
    city: "Sydney (NSW)",
    address: "8 Parramatta Square, Parramatta, 2150 NSW",
    icon: <MapPin className="h-6 w-6 text-[hsl(var(--vitality-blue))]" />
  }
];

const Contact = () => {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const careerInquiry = searchParams.get('careers') === 'true';

  return (
    <>
      <Helmet>
        <title>Contact Us | Vitality Community Care</title>
        <meta name="description" content="Get in touch with Vitality Community Care for personalized disability support services or to join our team." />
        <meta property="og:title" content="Contact Us | Vitality Community Care" />
        <meta property="og:description" content="Reach out to learn about our services or to schedule a consultation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-0 -right-0 opacity-20 animate-rotate" />
        <PuzzlePiece variant="blue" size="md" className="absolute -top-0 -left-0 opacity-20 animate-rotate-reverse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20">
                <Headphones className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              {careerInquiry ? "Join Our Team" : "Contact Us"}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {careerInquiry 
                ? "Interested in a rewarding career supporting others? Get in touch with us today." 
                : "Get in touch with us today! Whether it's a quick query or a detailed discussion, we're just a call or email away."}
            </p>
            
            {/* Quick contact buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="tel:1300395852" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <Phone size={18} />
                <span>1300 395 852</span>
              </a>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <Mail size={18} />
                <span>Email Us</span>
              </a>
              <a href="#location" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <Map size={18} />
                <span>Find Us</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '120px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="border-l-4 border-[hsl(var(--vitality-green))] pl-4 mb-8">
                <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))]">
                  Our Contact Details
                </h2>
                <p className="text-[hsl(var(--vitality-green))]">We're here to help</p>
              </div>
              <p className="text-lg mb-8">
                Our friendly team is here to answer your questions and help you find the right support for your needs.
              </p>
              
              <div className="space-y-10 mb-10">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[hsl(var(--vitality-green))]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-2">
                      Our Phone
                    </h3>
                    <a href="tel:1300395852" className="font-medium text-xl hover:text-[hsl(var(--vitality-green))] transition-colors block">
                      1300 395 852
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[hsl(var(--vitality-blue))]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-2">
                      Opening Hours
                    </h3>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-[hsl(var(--vitality-blue))]" />
                      <p className="text-lg">Mon – Sun: 9 am to 5 pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[hsl(var(--vitality-green))]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-2">
                      Our Email
                    </h3>
                    <a href="mailto:contact@vitalitycommunitycare.com.au" className="font-medium text-lg hover:text-[hsl(var(--vitality-blue))] transition-colors break-all">
                      contact@vitalitycommunitycare.com.au
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="border-l-4 border-[hsl(var(--vitality-blue))] pl-4 mb-8" id="location">
                  <h3 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))]">
                    Our Locations
                  </h3>
                  <p className="text-[hsl(var(--vitality-blue))]">Find us nationwide</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {locations.map((loc, index) => (
                    <div 
                      key={index} 
                      className={`p-5 rounded-xl ${loc.primary 
                        ? "bg-gradient-to-br from-[hsl(var(--vitality-green-10))] to-[hsl(var(--vitality-blue-10))] border border-[hsl(var(--vitality-green-25))]" 
                        : "bg-[hsl(var(--neutral-light))]"}`}
                    >
                      <div className="flex items-start gap-3">
                        {loc.icon}
                        <div>
                          <h4 className="font-medium text-lg">{loc.city}</h4>
                          <p>{loc.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-green))] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))]">
                      Let's Get In Touch
                    </h3>
                    <p className="text-sm text-gray-500">Fill out the form below</p>
                  </div>
                </div>
                
                <p className="mb-6">
                  If you have questions or want to discuss your needs, feel free to contact us. We're eager to hear from you and help.
                </p>
                
                <ContactForm isCareerForm={careerInquiry} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] flex items-center justify-center">
                <Map className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-3">
              Find Us on the Map
            </h2>
            <p className="text-lg">
              Visit our main office or contact us for directions to any of our locations
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative">
            <div className="aspect-w-16 aspect-h-9 w-full h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.5909581695236!2d138.60876729999998!3d-34.9056151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced687a3c9c9%3A0xe1f9eae4a4b17f48!2s84%20Hotham%20St%2C%20Preston%20VIC%203072!5e0!3m2!1sen!2sau!4v1623903498717!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vitality Community Care head office location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[hsl(var(--vitality-green-10))] to-[hsl(var(--vitality-blue-10))] p-8 rounded-xl text-center border border-[hsl(var(--vitality-green-25))]">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--vitality-green))] flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Get Your Custom Care Plan, Contact Us Today!</h3>
            <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <a href="/referral" className="flex items-center gap-2">
                Make a Referral
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
