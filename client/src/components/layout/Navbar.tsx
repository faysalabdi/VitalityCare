import { useState, useEffect } from "react";
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
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <PuzzleLogo size="md" />
            <div>
              <h1 className="text-xl font-semibold text-[hsl(var(--vitality-green))] leading-tight">VITALITY</h1>
              <p className="text-sm text-[hsl(var(--vitality-blue))] leading-tight -mt-1">COMMUNITY CARE</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium transition-colors ${location === '/' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center font-medium transition-colors focus:outline-none ${location.startsWith('/services') ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services#daily-living" className="cursor-pointer">Daily Living Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#personal-care" className="cursor-pointer">Personal Care</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#community-participation" className="cursor-pointer">Community Participation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#therapy" className="cursor-pointer">Therapy Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/about" className={`font-medium transition-colors ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              About Us
            </Link>
            
            <Link href="/team" className={`font-medium transition-colors ${location === '/team' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              Our Team
            </Link>
            
            <Link href="/blog" className={`font-medium transition-colors ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              Blog
            </Link>
            
            <Link href="/contact" className={`font-medium transition-colors ${location === '/contact' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--vitality-green))]'}`}>
              Contact
            </Link>
          </nav>
          
          {/* Action Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:block rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <Link href="/contact">Get Started</Link>
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
                    <Link href="/" className="flex items-center gap-2">
                      <PuzzleLogo size="sm" />
                      <div>
                        <h2 className="font-semibold text-[hsl(var(--vitality-green))]">VITALITY</h2>
                        <p className="text-xs text-[hsl(var(--vitality-blue))]">COMMUNITY CARE</p>
                      </div>
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/" 
                      className={`py-2 font-medium transition-colors ${location === '/' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      Home
                    </Link>
                  </SheetClose>
                  
                  <div className="py-2">
                    <h3 className="font-medium mb-2">Services</h3>
                    <div className="flex flex-col space-y-2 pl-4">
                      <SheetClose asChild>
                        <Link 
                          href="/services#daily-living" 
                          className="text-[hsl(var(--neutral-dark))]"
                        >
                          Daily Living Support
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#personal-care" 
                          className="text-[hsl(var(--neutral-dark))]"
                        >
                          Personal Care
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#community-participation" 
                          className="text-[hsl(var(--neutral-dark))]"
                        >
                          Community Participation
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/services#therapy" 
                          className="text-[hsl(var(--neutral-dark))]"
                        >
                          Therapy Services
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/about" 
                      className={`py-2 font-medium transition-colors ${location === '/about' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      About Us
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/team" 
                      className={`py-2 font-medium transition-colors ${location === '/team' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      Our Team
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/blog" 
                      className={`py-2 font-medium transition-colors ${location === '/blog' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      Blog
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      href="/contact" 
                      className={`py-2 font-medium transition-colors ${location === '/contact' ? 'text-[hsl(var(--vitality-green))]' : 'text-[hsl(var(--neutral-dark))]'}`}
                    >
                      Contact
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Button asChild className="mt-4 w-full rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                      <Link href="/contact">Get Started</Link>
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
