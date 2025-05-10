import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PuzzleLogo from "@/components/shared/PuzzleLogo";
import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  Home, 
  FileText, 
  Users, 
  Book, 
  Info, 
  Phone,
  ArrowRight,
  Heart,
  HelpingHand,
  Activity,
  Award
} from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      {/* Colored bar at the top of navbar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <PuzzleLogo variant="full" size="md" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`flex items-center gap-1.5 font-medium transition-colors ${location === '/' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              <Home size={16} />
              Home
            </Link>

            <Link href="/about" className={`flex items-center gap-1.5 font-medium transition-colors ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              <Info size={16} />
              About Us
            </Link>
            
            {/* Services Navigation with both link and dropdown */}
            <div 
              ref={servicesDropdownRef}
              className="flex items-center relative"
            >
              <Link 
                href="/services" 
                className={`flex items-center gap-1.5 font-medium transition-colors ${location.startsWith('/services') ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}
              >
                <FileText size={16} />
                Services
              </Link>
              
              <button 
                onClick={() => setServicesOpen(!servicesOpen)} 
                className="ml-1 h-8 w-8 inline-flex items-center justify-center focus:outline-none"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    href="/services#daily-living" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Heart size={14} className="text-[hsl(var(--vitality-green))]" />
                    Daily Living Support
                  </Link>
                  <Link 
                    href="/services#personal-care" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <HelpingHand size={14} className="text-[hsl(var(--vitality-blue))]" />
                    Personal Care
                  </Link>
                  <Link 
                    href="/services#community-participation" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Users size={14} className="text-[hsl(var(--vitality-green))]" />
                    Community Participation
                  </Link>
                  <Link 
                    href="/services#therapy" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Activity size={14} className="text-[hsl(var(--vitality-blue))]" />
                    Therapy Services
                  </Link>
                  <Link 
                    href="/services#support-coordination" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <FileText size={14} className="text-[hsl(var(--vitality-green))]" />
                    Support Coordination
                  </Link>
                  <Link 
                    href="/services#supported-independent-living" 
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Home size={14} className="text-[hsl(var(--vitality-blue))]" />
                    Supported Independent Living
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/blog" className={`flex items-center gap-1.5 font-medium transition-colors ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              <Book size={16} />
              Blog
            </Link>
            
            <Link href="/contact" className={`flex items-center gap-1.5 font-medium transition-colors ${location === '/contact' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              <Phone size={16} />
              Contact
            </Link>
          </nav>
          
          {/* Action Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex items-center gap-1.5 rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <Link href="/contact">
                GET STARTED
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center">
                      <PuzzleLogo variant="full" size="sm" />
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/" 
                      className={`py-2 font-medium transition-colors flex items-center gap-2 ${location === '/' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      <Home size={18} />
                      Home
                    </Link>
                  </SheetClose>
                  
                  <div className="py-2">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <FileText size={18} />
                      <SheetClose asChild>
                        <Link href="/services">Services</Link>
                      </SheetClose>
                    </h3>
                    <div className="flex flex-col space-y-2 pl-8">
                      <SheetClose asChild>
                        <Link 
                          href="/services#daily-living" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <Heart size={14} className="text-[hsl(var(--vitality-green))]" />
                          Daily Living Support
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#personal-care" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <HelpingHand size={14} className="text-[hsl(var(--vitality-blue))]" />
                          Personal Care
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#community-participation" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <Users size={14} className="text-[hsl(var(--vitality-green))]" />
                          Community Participation
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#therapy" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <Activity size={14} className="text-[hsl(var(--vitality-blue))]" />
                          Therapy Services
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#support-coordination" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <FileText size={14} className="text-[hsl(var(--vitality-green))]" />
                          Support Coordination
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#supported-independent-living" 
                          className="text-[hsl(var(--neutral-dark))] flex items-center gap-2"
                        >
                          <Home size={14} className="text-[hsl(var(--vitality-blue))]" />
                          Supported Independent Living
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/about" 
                      className={`py-2 font-medium transition-colors flex items-center gap-2 ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      <Info size={18} />
                      About Us
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/blog" 
                      className={`py-2 font-medium transition-colors flex items-center gap-2 ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      <Book size={18} />
                      Blog
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/contact" 
                      className={`py-2 font-medium transition-colors flex items-center gap-2 ${location === '/contact' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      <Phone size={18} />
                      Contact
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Button asChild className="mt-4 w-full rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] flex items-center justify-center">
                      <Link href="/contact">
                        GET STARTED
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
