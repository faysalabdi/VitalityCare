import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [linkHighlight, setLinkHighlight] = useState(false);

  // Update body classes for accessibility options
  const updateAccessibilitySettings = () => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    
    if (contrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    
    if (grayscale) {
      document.body.classList.add("grayscale");
    } else {
      document.body.classList.remove("grayscale");
    }
    
    if (linkHighlight) {
      document.body.classList.add("highlight-links");
    } else {
      document.body.classList.remove("highlight-links");
    }
  };

  // Reset all accessibility settings
  const resetSettings = () => {
    setFontSize(100);
    setContrast(false);
    setGrayscale(false);
    setLinkHighlight(false);
    
    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove("high-contrast", "grayscale", "highlight-links");
  };

  // Apply settings whenever they change
  useState(() => {
    updateAccessibilitySettings();
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open accessibility menu"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))] shadow-lg z-50 p-0 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>Accessibility Options</SheetTitle>
          <SheetDescription>
            Customize your browsing experience. Changes will be applied immediately.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Font Size Control */}
          <div>
            <label className="text-sm font-medium mb-2 block">Text Size</label>
            <div className="flex items-center space-x-2">
              <span className="text-xs">A</span>
              <Slider
                value={[fontSize]}
                min={80}
                max={150}
                step={10}
                onValueChange={(value) => {
                  setFontSize(value[0]);
                  document.documentElement.style.fontSize = `${value[0]}%`;
                }}
                className="flex-1"
              />
              <span className="text-lg font-bold">A</span>
            </div>
          </div>
          
          {/* Contrast Mode */}
          <div className="flex items-center justify-between">
            <label htmlFor="contrast-toggle" className="text-sm font-medium">
              High Contrast
            </label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant={contrast ? "default" : "outline"}
                    className={`w-16 h-8 rounded-full ${contrast ? 'bg-[hsl(var(--vitality-green))]' : ''}`}
                    onClick={() => setContrast(!contrast)}
                    id="contrast-toggle"
                    aria-pressed={contrast}
                  >
                    <span className="sr-only">{contrast ? 'Disable' : 'Enable'} high contrast</span>
                    <span className={`block w-6 h-6 rounded-full bg-white transition transform ${contrast ? 'translate-x-2' : '-translate-x-2'}`}></span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{contrast ? 'Disable' : 'Enable'} high contrast mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {/* Grayscale Mode */}
          <div className="flex items-center justify-between">
            <label htmlFor="grayscale-toggle" className="text-sm font-medium">
              Grayscale
            </label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant={grayscale ? "default" : "outline"}
                    className={`w-16 h-8 rounded-full ${grayscale ? 'bg-[hsl(var(--vitality-green))]' : ''}`}
                    onClick={() => setGrayscale(!grayscale)}
                    id="grayscale-toggle"
                    aria-pressed={grayscale}
                  >
                    <span className="sr-only">{grayscale ? 'Disable' : 'Enable'} grayscale</span>
                    <span className={`block w-6 h-6 rounded-full bg-white transition transform ${grayscale ? 'translate-x-2' : '-translate-x-2'}`}></span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{grayscale ? 'Disable' : 'Enable'} grayscale mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {/* Highlight Links */}
          <div className="flex items-center justify-between">
            <label htmlFor="links-toggle" className="text-sm font-medium">
              Highlight Links
            </label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant={linkHighlight ? "default" : "outline"}
                    className={`w-16 h-8 rounded-full ${linkHighlight ? 'bg-[hsl(var(--vitality-green))]' : ''}`}
                    onClick={() => setLinkHighlight(!linkHighlight)}
                    id="links-toggle"
                    aria-pressed={linkHighlight}
                  >
                    <span className="sr-only">{linkHighlight ? 'Disable' : 'Enable'} link highlighting</span>
                    <span className={`block w-6 h-6 rounded-full bg-white transition transform ${linkHighlight ? 'translate-x-2' : '-translate-x-2'}`}></span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{linkHighlight ? 'Disable' : 'Enable'} link highlighting</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="pt-4">
            <SheetClose asChild>
              <Button
                onClick={resetSettings}
                variant="outline"
                className="w-full"
              >
                Reset All Settings
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccessibilityWidget;
