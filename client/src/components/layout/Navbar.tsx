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
  Mail,
  Bed,
  Sparkles
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

  return (
    <>
      {/* Contact information bar - will fade and collapse smoothly on scroll */}
      <div 
        ref={topBarRef}
        className={`bg-[hsl(var(--vitality-green))] text-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
          scrolled ? 'transform -translate-y-full' : 'transform translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center h-8">
            <div className="flex items-center gap-4 text-sm">
              <a href="tel:1300395852" className="flex items-center gap-1.5 text-white hover:text-white/85 transition-colors">
                <Phone size={16} />
                1300 395 852
              </a>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="hidden md:flex items-center gap-1.5 text-white hover:text-white/85 transition-colors">
                <Mail size={16} />
                contact@vitalitycommunitycare.com.au
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/careers" className="px-5 py-1 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all text-sm">
                Career
              </Link>
              <Link href="/referral" className="px-5 py-1 rounded-full bg-[hsl(var(--vitality-blue))] text-white font-medium hover:bg-[hsl(var(--vitality-blue))/90] transition-all text-sm">
                Referral
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar - sticky, with padding to account for top bar when visible */}
      <div className={`sticky z-[100] transition-all duration-300 ease-out ${
        scrolled ? 'top-0' : 'top-[44px]'  /* Adjusted height of contact bar */
      }`}>
        <div className="bg-white shadow-sm">
          <div 
            className={`container mx-auto px-4 transition-all duration-300 ease-out ${
              scrolled ? "py-3" : "py-5"
            }`}
          >
            <div className="flex justify-between items-center">
              {/* Logo - increased size */}
              <Link href="/" className="flex items-center">
                <PuzzleLogo variant="full" size="xl" />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-10">
                <Link href="/about" className={`flex items-center gap-1.5 text-lg font-bold transition-colors ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
                  About Us
                </Link>
                
                <Link 
                  href="/ndis" 
                  className={`flex items-center gap-1.5 text-lg font-bold transition-colors ${location === '/ndis' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}
                >
                  NDIS
                </Link>
                
                <Link 
                  href="/aged-care" 
                  className={`flex items-center gap-1.5 text-lg font-bold transition-colors ${location === '/aged-care' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}
                >
                  Aged Care
                </Link>
                
                <Link 
                  href="/accommodation" 
                  className={`flex items-center gap-1.5 text-lg font-bold transition-colors ${location === '/accommodation' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}
                >
                  Accommodation
                </Link>
                
                <Link href="/blog" className={`flex items-center gap-1.5 text-lg font-bold transition-colors ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
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
                      <Menu size={24} />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full max-w-xs p-0">
                    <div className="flex flex-col h-full">
                      <div className="p-6 border-b">
                        <PuzzleLogo variant="full" size="lg" />
                      </div>
                      <div className="flex-1 overflow-auto py-4">
                        <nav className="flex flex-col space-y-1 px-4">
                          <SheetClose asChild>
                            <Link href="/" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Home size={18} className="mr-3" />
                              Home
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/about" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/about' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Info size={18} className="mr-3" />
                              About Us
                            </Link>
                          </SheetClose>
                          
                          <SheetClose asChild>
                            <Link href="/ndis" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/ndis' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Heart size={18} className="mr-3" />
                              NDIS
                            </Link>
                          </SheetClose>
                          
                          <SheetClose asChild>
                            <Link href="/aged-care" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/aged-care' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Sparkles size={18} className="mr-3" />
                              Aged Care
                            </Link>
                          </SheetClose>
                          
                          <SheetClose asChild>
                            <Link href="/accommodation" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/accommodation' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Bed size={18} className="mr-3" />
                              Accommodation
                            </Link>
                          </SheetClose>
                          
                          <SheetClose asChild>
                            <Link href="/blog" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/blog' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Book size={18} className="mr-3" />
                              Blog
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/contact" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/contact' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <Phone size={18} className="mr-3" />
                              Contact
                            </Link>
                          </SheetClose>
                          
                          <SheetClose asChild>
                            <Link href="/referral" className={`py-3 px-4 rounded-md font-bold flex items-center ${location === '/referral' ? 'bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]' : ''}`}>
                              <FileText size={18} className="mr-3" />
                              Make a Referral
                            </Link>
                          </SheetClose>
                        </nav>
                      </div>
                      <div className="p-6 border-t">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Phone size={18} className="text-[hsl(var(--vitality-blue))]" />
                            <a href="tel:1300395852" className="text-[hsl(var(--vitality-blue))] hover:underline">1300 395 852</a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={18} className="text-[hsl(var(--vitality-blue))]" />
                            <a href="mailto:contact@vitalitycommunitycare.com.au" className="text-[hsl(var(--vitality-blue))] hover:underline text-sm">contact@vitalitycommunitycare.com.au</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
