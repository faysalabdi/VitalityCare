import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { useLocation } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Users
} from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

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
      <section className="relative py-20 overflow-hidden">
        {/* Background with split colors */}
        <div className="absolute top-0 left-0 w-full h-full bg-[hsl(var(--neutral-light))]"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[hsl(var(--vitality-blue))] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--vitality-green))] opacity-5"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 hidden md:block">
          <PuzzlePiece className="w-20 h-20 bg-[hsl(var(--vitality-blue))] opacity-10 animate-float" />
        </div>
        <div className="absolute bottom-10 right-10 hidden md:block">
          <PuzzlePiece className="w-16 h-16 bg-[hsl(var(--vitality-green))] opacity-10 animate-float-delay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Icon badge */}
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] text-white">
                {careerInquiry ? <Briefcase size={28} /> : <MessageCircle size={28} />}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              {careerInquiry ? "Join Our Team" : "Contact Us"}
            </h1>
            <p className="text-lg mb-8">
              {careerInquiry 
                ? "Interested in a rewarding career supporting others? Get in touch with us today." 
                : "Have questions about our services or ready to start your journey? Reach out to our friendly team."}
            </p>
            
            {/* Quick contact buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="tel:1800123456" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-25))] transition-colors">
                <Phone size={16} />
                <span>1800 123 456</span>
              </a>
              <a href="mailto:info@vitalitycare.com.au" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-25))] transition-colors">
                <Mail size={16} />
                <span>Email Us</span>
              </a>
              <a href="#location" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-25))] transition-colors">
                <MapPin size={16} />
                <span>Find Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                {careerInquiry ? "Work With Vitality" : "Get in Touch"}
              </h2>
              <p className="text-lg mb-8">
                {careerInquiry
                  ? "Join our team of dedicated professionals making a difference in the lives of the people we support."
                  : "Our friendly team is here to answer your questions and help you find the right support for your needs."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] mr-2">
                      <Users size={16} />
                    </div>
                    Contact Information
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] group-hover:bg-[hsl(var(--vitality-green))] group-hover:text-white transition-colors">
                          <Phone size={18} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-1">Phone</p>
                        <a href="tel:1800123456" className="font-medium text-lg hover:text-[hsl(var(--vitality-green))] transition-colors">1800 123 456</a>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] group-hover:bg-[hsl(var(--vitality-blue))] group-hover:text-white transition-colors">
                          <Mail size={18} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-1">Email</p>
                        <a href="mailto:info@vitalitycare.com.au" className="font-medium text-lg hover:text-[hsl(var(--vitality-blue))] transition-colors break-all">info@vitalitycare.com.au</a>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] group-hover:bg-[hsl(var(--vitality-green))] group-hover:text-white transition-colors">
                          <MapPin size={18} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-1">Office</p>
                        <a href="#location" className="font-medium hover:text-[hsl(var(--vitality-green))] transition-colors">
                          <p>123 Community Drive</p>
                          <p>Sydney NSW 2000</p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))] mr-2">
                      <Clock size={16} />
                    </div>
                    Hours of Operation
                  </h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                            <span className="text-xs font-semibold">M-F</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Monday - Friday</span>
                        </div>
                        <span className="font-medium bg-[hsl(var(--vitality-green-5))] text-[hsl(var(--vitality-green))] px-3 py-1 rounded-full text-sm">8:30am - 5:30pm</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                            <span className="text-xs font-semibold">SA</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Saturday</span>
                        </div>
                        <span className="font-medium bg-[hsl(var(--vitality-blue-5))] text-[hsl(var(--vitality-blue))] px-3 py-1 rounded-full text-sm">9:00am - 2:00pm</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--neutral-light))] flex items-center justify-center text-[hsl(var(--neutral-dark))] mr-3">
                            <span className="text-xs font-semibold">SU</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Sunday</span>
                        </div>
                        <span className="font-medium bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">Closed</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 text-[hsl(var(--neutral-dark))] text-sm flex items-center">
                    <span className="text-[hsl(var(--vitality-blue))] mr-2">
                      <Clock size={14} />
                    </span>
                    In-home support hours may vary based on service arrangements.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] mr-2">
                    <Users size={16} />
                  </div>
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-green-75))] to-[hsl(var(--vitality-green))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-green))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      FB
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-blue-75))] to-[hsl(var(--vitality-blue))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-blue))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      TW
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-green-75))] to-[hsl(var(--vitality-green))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-green))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      IG
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-blue-75))] to-[hsl(var(--vitality-blue))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-blue))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      IN
                    </div>
                  </a>
                </div>
                <p className="mt-4 text-sm text-[hsl(var(--neutral-dark))]">
                  Follow us on social media for updates, helpful resources, and community stories.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))] mr-2">
                    <MapPin size={16} />
                  </div>
                  Our Service Areas
                </h3>
                <p className="mb-4 text-[hsl(var(--neutral-dark))]">We proudly serve communities throughout:</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center bg-[hsl(var(--vitality-green-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Sydney</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-blue-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Newcastle</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-green-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Central Coast</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-blue-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Wollongong</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[hsl(var(--vitality-green))] mt-0.5 mr-2">
                    <MapPin size={14} />
                  </div>
                  <p className="text-sm text-[hsl(var(--neutral-dark))]">
                    We also offer services in surrounding areas. Contact us to check availability in your location.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))] mb-6">
                  {careerInquiry ? "Apply to Join Our Team" : "Send Us a Message"}
                </h3>
                
                <ContactForm isCareerForm={careerInquiry} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] text-white">
                <MapPin size={24} />
              </div>
            </div>
            
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Find Us</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Visit our office or contact us to arrange an in-home consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
              <MapPin className="text-[hsl(var(--vitality-green))]" size={16} />
              <span className="font-medium">Vitality Community Care</span>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 w-full h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52890.21468286991!2d151.16449151121455!3d-33.86882203356731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1623903498717!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vitality Community Care office location"
              ></iframe>
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[hsl(var(--vitality-blue))]">
                  <Phone size={16} className="mr-1" />
                  <span className="text-sm font-medium">1800 123 456</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center text-[hsl(var(--vitality-green))]">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm font-medium">Sydney NSW 2000</span>
                </div>
              </div>
              
              <a href="https://maps.google.com/?q=Sydney+NSW+2000" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center">
                Get Directions
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
