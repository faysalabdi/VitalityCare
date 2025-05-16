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
  Award,
  BookOpen,
  UserPlus,
  Briefcase,
  ExternalLink,
  Mail
} from "lucide-react";

// Debounce function to smooth out scroll handling
const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Navbar = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const topBarHeight = useRef<number>(0);
  const lastScrollY = useRef<number>(0);

  // Get initial height of top bar for smooth transitions
  useEffect(() => {
    if (topBarRef.current) {
      topBarHeight.current = topBarRef.current.clientHeight;
    }
  }, []);

  // Improved scroll handler with debouncing
  useEffect(() => {
    // Threshold for minimum scroll movement to trigger state change (in px)
    const SCROLL_THRESHOLD = 3;
    
    const handleScroll = () => {
      // More nuanced scroll detection
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);
      
      // Only update state if scroll difference exceeds threshold
      if (scrollDifference >= SCROLL_THRESHOLD) {
        setScrolled(currentScrollY > 5);
        lastScrollY.current = currentScrollY;
      }
    };
    
    // Apply debounce to the scroll handler for smooth performance
    const debouncedHandleScroll = debounce(handleScroll, 10);
    
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

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
    <div className="relative">
      {/* Contact information bar - will fade and collapse smoothly on scroll */}
      <div 
        ref={topBarRef}
        className={`bg-[hsl(var(--vitality-green))] text-white transition-all duration-500 ease-out overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-[100px] py-3 opacity-100'
        }`}
        style={{
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transitionProperty: 'max-height, opacity, transform, padding',
          willChange: 'transform, max-height, opacity'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4 text-base">
              <a href="tel:1300395852" className="flex items-center gap-1.5 text-white hover:text-white/85 transition-colors">
                <Phone size={18} />
                1300 395 852
              </a>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="hidden md:flex items-center gap-1.5 text-white hover:text-white/85 transition-colors">
                <Mail size={18} />
                contact@vitalitycommunitycare.com.au
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/careers" className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all">
                Career
              </Link>
              <Link href="/referral" className="px-6 py-2 rounded-full bg-[hsl(var(--vitality-blue))] text-white font-medium hover:bg-[hsl(var(--vitality-blue))/90] transition-all">
                Referral
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar - sticky */}
      <header className="sticky top-0 z-50 w-full">
        <div 
          className={`bg-white transition-all duration-300 ease-out will-change-[padding,box-shadow] ${
            scrolled ? "py-3 shadow-sm" : "py-5"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo - increased size */}
              <Link href="/" className="flex items-center">
                <PuzzleLogo variant="full" size="xl" />
              </Link>
              
              {/* Desktop Navigation - removed Home link */}
              <nav className="hidden md:flex items-center space-x-10">
                <Link href="/about" className={`flex items-center gap-1.5 text-lg font-medium transition-colors ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
                  About Us
                </Link>
                
                {/* Services Navigation with both link and dropdown */}
                <div 
                  ref={servicesDropdownRef}
                  className="flex items-center relative"
                >
                  <Link 
                    href="/services" 
                    className={`flex items-center gap-1.5 text-lg font-medium transition-colors ${location.startsWith('/services') ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}
                  >
                    Services
                  </Link>
                  
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)} 
                    className="ml-1 h-8 w-8 inline-flex items-center justify-center focus:outline-none"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
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
                
                <Link href="/blog" className={`flex items-center gap-1.5 text-lg font-medium transition-colors ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
                  Blog
                </Link>
              </nav>
              
              {/* Action Button & Mobile Menu */}
              <div className="flex items-center gap-4">
                <Button asChild className="hidden md:flex items-center gap-1.5 px-6 py-6 text-base rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                  <Link href="/contact">
                    CONTACT US
                    <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                
                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-7 w-7" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px]">
                    <nav className="flex flex-col gap-6 mt-8">
                      <SheetClose asChild>
                        <Link href="/" className="flex items-center">
                          <PuzzleLogo variant="full" size="lg" />
                        </Link>
                      </SheetClose>
                      
                      <div className="py-2">
                        <h3 className="font-medium mb-2 flex items-center gap-2 text-lg">
                          <FileText size={20} />
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
                          className={`py-2 font-medium transition-colors flex items-center gap-2 text-lg ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                        >
                          <Info size={20} />
                          About Us
                        </Link>
                      </SheetClose>
                      
                      <SheetClose asChild>
                        <Link 
                          href="/blog" 
                          className={`py-2 font-medium transition-colors flex items-center gap-2 text-lg ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                        >
                          <Book size={20} />
                          Blog
                        </Link>
                      </SheetClose>
                      
                      <SheetClose asChild>
                        <Link 
                          href="/referral" 
                          className={`py-2 font-medium transition-colors flex items-center gap-2 text-lg ${location === '/referral' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                        >
                          <UserPlus size={20} />
                          Referral
                        </Link>
                      </SheetClose>
                      
                      <SheetClose asChild>
                        <Link 
                          href="/careers" 
                          className={`py-2 font-medium transition-colors flex items-center gap-2 text-lg ${location === '/careers' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                        >
                          <Briefcase size={20} />
                          Career
                        </Link>
                      </SheetClose>
                      
                      <SheetClose asChild>
                        <Button asChild className="mt-4 w-full py-6 rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] flex items-center justify-center text-base">
                          <Link href="/contact">
                            CONTACT US
                            <ArrowRight size={18} className="ml-1" />
                          </Link>
                        </Button>
                      </SheetClose>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
