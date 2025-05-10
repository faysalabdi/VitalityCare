import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { useLocation } from "wouter";

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
      <section className="bg-gradient-to-r from-[hsl(var(--vitality-blue-25))] to-[hsl(var(--vitality-green-25))] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              {careerInquiry ? "Join Our Team" : "Contact Us"}
            </h1>
            <p className="text-lg mb-8">
              {careerInquiry 
                ? "Interested in a rewarding career supporting others? Get in touch with us today." 
                : "Have questions about our services or ready to start your journey? Reach out to our friendly team."}
            </p>
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
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-2">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))]">Phone</p>
                        <p className="font-medium">1800 123 456</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))]">Email</p>
                        <p className="font-medium">info@vitalitycare.com.au</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))]">Office</p>
                        <p className="font-medium">123 Community Drive</p>
                        <p className="font-medium">Sydney NSW 2000</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-2">Hours of Operation</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-[hsl(var(--neutral-dark))]">Monday - Friday</span>
                      <span className="font-medium">8:30am - 5:30pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[hsl(var(--neutral-dark))]">Saturday</span>
                      <span className="font-medium">9:00am - 2:00pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[hsl(var(--neutral-dark))]">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-[hsl(var(--neutral-dark))] text-sm">In-home support hours may vary based on service arrangements.</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-[hsl(var(--vitality-green))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--vitality-green-75))] transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[hsl(var(--vitality-blue))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--vitality-blue-75))] transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[hsl(var(--vitality-green))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--vitality-green-75))] transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[hsl(var(--vitality-blue))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--vitality-blue-75))] transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">Our Service Areas</h3>
                <p className="mb-2">We proudly serve communities throughout:</p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sydney</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Newcastle</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Central Coast</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wollongong</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">We also offer services in surrounding areas. Contact us to check availability in your location.</p>
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
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Find Us</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Visit our office or contact us to arrange an in-home consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
