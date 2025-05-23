import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import NDIS from "@/pages/NDIS";
import AgedCare from "@/pages/AgedCare";
import Accommodation from "@/pages/Accommodation";
import AccommodationDetail from "@/pages/accommodation/[id]";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Referral from "@/pages/Referral";
import Career from "@/pages/Career";
import NotFound from "@/pages/not-found";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/ndis" component={NDIS} />
          <Route path="/aged-care" component={AgedCare} />
          <Route path="/accommodation" component={Accommodation} />
          <Route path="/accommodation/:id" component={AccommodationDetail} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/referral" component={Referral} />
          <Route path="/career" component={Career} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <AccessibilityWidget />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
