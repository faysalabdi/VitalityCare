import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Phone, Mail, MapPin, Bed, Bath, Users, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import SmartImageDisplay from "@/components/shared/SmartImageDisplay";
import { Link } from "wouter";
import housingVacancies from "@/data/housingVacancies";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// ─── Region mapping ───────────────────────────────────────────────────────────
const REGION_MAP: Record<string, { state: string; region: string }> = {
  // NSW – Sydney
  "Auburn, NSW": { state: "NSW", region: "Sydney" },
  "Old Guildford, NSW": { state: "NSW", region: "Sydney" },

  // VIC – Northern Melbourne
  "Beveridge, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Broadmeadows, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Donnybrook, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Epping, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Kingsbury, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Sunbury, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Wollert, VIC": { state: "Victoria", region: "Northern Melbourne" },
  "Woodstock, VIC": { state: "Victoria", region: "Northern Melbourne" },

  // VIC – South East Melbourne
  "Berwick, VIC": { state: "Victoria", region: "South East Melbourne" },
  "Mount Waverley, VIC": { state: "Victoria", region: "South East Melbourne" },

  // VIC – Western Melbourne
  "Ardeer, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Deanside, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Mambourin, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Melton South, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Rockbank, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Strathtulloh, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Tarneit, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Truganina, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Weir Views, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Werribee, VIC": { state: "Victoria", region: "Western Melbourne" },
  "Wyndham Vale, VIC": { state: "Victoria", region: "Western Melbourne" },

  // WA – Perth North of the river
  "Bennett Springs, WA": { state: "Western Australia", region: "Perth North of the river" },
  "Ellenbrook, WA": { state: "Western Australia", region: "Perth North of the river" },
  "Midland, WA": { state: "Western Australia", region: "Perth North of the river" },

  // WA – Perth South of the river
  "Baldivis, WA": { state: "Western Australia", region: "Perth South of the river" },
  "Gosnells, WA": { state: "Western Australia", region: "Perth South of the river" },
  "Haynes, WA": { state: "Western Australia", region: "Perth South of the river" },
  "Maddington, WA": { state: "Western Australia", region: "Perth South of the river" },
  "Wellard, WA": { state: "Western Australia", region: "Perth South of the river" },
};

const STATE_REGIONS: Record<string, string[]> = {
  NSW: ["Sydney"],
  Victoria: ["Northern Melbourne", "South East Melbourne", "Western Melbourne"],
  "Western Australia": ["Perth North of the river", "Perth South of the river"],
};

// ─── SDA category matching ────────────────────────────────────────────────────
const SDA_CATEGORIES = [
  "High physical support (HPS)",
  "Robust",
  "Improved Livability (IL)",
  "Fully accessible",
  "Non-SDA / SIL Only",
] as const;

type SdaCategory = typeof SDA_CATEGORIES[number];

function matchesSdaCategory(type: string, category: SdaCategory): boolean {
  const t = type.toLowerCase();
  switch (category) {
    case "High physical support (HPS)":
      return t.includes("hps") || t.includes("high physical support");
    case "Robust":
      return t.includes("robust");
    case "Improved Livability (IL)":
      return t.includes("improved") || t.includes("liveability") || t.includes("livability");
    case "Fully accessible":
      return t.includes("fully accessible");
    case "Non-SDA / SIL Only":
      return (
        t.includes("standard") ||
        t.includes("normal") ||
        (!t.includes("sda") && t.includes("sil"))
      );
  }
}

// ─── Housing card ─────────────────────────────────────────────────────────────
const HousingCard = ({ vacancy }: { vacancy: typeof housingVacancies[0] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 hover:shadow-xl transition-shadow flex flex-col h-full">
      <div className="relative h-64 bg-gray-100">
        <SmartImageDisplay
          src={vacancy.images[0]}
          alt={vacancy.title}
          title={`${vacancy.location} - Property Brochure`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-[hsl(var(--vitality-green))] text-white font-medium px-4 py-2 rounded-br-lg z-10">
          SIL Approved
        </div>
      </div>
      <div className="p-6 pt-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--vitality-blue))]">{vacancy.location}</h3>
          <p className="text-base mb-1 font-medium text-gray-700">{vacancy.title}</p>
          <p className="text-sm mb-6 font-semibold text-[hsl(var(--vitality-green))]">{vacancy.type}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--vitality-green-5))] rounded-full flex items-center justify-center">
                <Bed size={16} className="text-[hsl(var(--vitality-green))]" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-600">Bedroom:</span>
                <span className="ml-2 font-semibold text-gray-900">{vacancy.features.bedrooms}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--vitality-blue-5))] rounded-full flex items-center justify-center">
                <Bath size={16} className="text-[hsl(var(--vitality-blue))]" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-600">Bathroom:</span>
                <span className="ml-2 font-semibold text-gray-900">{vacancy.features.bathrooms}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--vitality-green-5))] rounded-full flex items-center justify-center">
                <Users size={16} className="text-[hsl(var(--vitality-green))]" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-600">Vacancies available:</span>
                <span className="ml-2 font-semibold text-gray-900">{vacancy.features.bedroomsAvailable}</span>
              </div>
            </div>
          </div>
        </div>

        <Button asChild className="w-full rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))] mt-auto">
          <Link to={`/accommodation/${vacancy.id}`}>View House <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  );
};

// ─── Filter panel ─────────────────────────────────────────────────────────────
interface FilterState {
  state: string;
  region: string;
  sdaCategories: SdaCategory[];
}

const defaultFilters: FilterState = { state: "", region: "", sdaCategories: [] };

const FilterPanel = ({
  filters,
  onChange,
  onClear,
}: {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  onClear: () => void;
}) => {
  const [stateOpen, setStateOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  const availableRegions = filters.state ? STATE_REGIONS[filters.state] ?? [] : [];

  const hasActiveFilters =
    filters.state !== "" ||
    filters.region !== "" ||
    filters.sdaCategories.length > 0;

  const handleStateChange = (value: string) => {
    onChange({ ...filters, state: value, region: "" });
    setStateOpen(false);
  };

  const handleRegionChange = (value: string) => {
    onChange({ ...filters, region: value });
    setRegionOpen(false);
  };

  const toggleCategory = (cat: SdaCategory) => {
    const current = filters.sdaCategories;
    const next = current.includes(cat)
      ? current.filter((c) => c !== cat)
      : [...current, cat];
    onChange({ ...filters, sdaCategories: next });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-[hsl(var(--vitality-blue))] font-semibold text-lg">
          <SlidersHorizontal size={20} />
          Filter Properties
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X size={14} /> Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ── A. State ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">State</p>
          <div className="relative">
            <button
              onClick={() => { setStateOpen((o) => !o); setRegionOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm hover:border-[hsl(var(--vitality-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--vitality-blue))] transition-colors"
            >
              <span className={filters.state ? "text-gray-900" : "text-gray-400"}>
                {filters.state || "All states"}
              </span>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${stateOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {stateOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleStateChange("")}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${filters.state === "" ? "text-[hsl(var(--vitality-blue))] font-medium" : "text-gray-700"}`}
                  >
                    All states
                  </button>
                  {Object.keys(STATE_REGIONS).map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStateChange(s)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${filters.state === s ? "text-[hsl(var(--vitality-blue))] font-medium" : "text-gray-700"}`}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── B. Region ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Suburb / Region</p>
          <div className="relative">
            <button
              disabled={!filters.state}
              onClick={() => { setRegionOpen((o) => !o); setStateOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm hover:border-[hsl(var(--vitality-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--vitality-blue))] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className={filters.region ? "text-gray-900" : "text-gray-400"}>
                {filters.region || (filters.state ? "All regions" : "Select a state first")}
              </span>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${regionOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {regionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleRegionChange("")}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${filters.region === "" ? "text-[hsl(var(--vitality-blue))] font-medium" : "text-gray-700"}`}
                  >
                    All regions
                  </button>
                  {availableRegions.map((r) => (
                    <button
                      key={r}
                      onClick={() => handleRegionChange(r)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${filters.region === r ? "text-[hsl(var(--vitality-blue))] font-medium" : "text-gray-700"}`}
                    >
                      {r}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── C. SDA Design Category ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">SDA Design Category</p>
          <div className="space-y-2">
            {SDA_CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <Checkbox
                  id={`sda-${cat}`}
                  checked={filters.sdaCategories.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
                  className="data-[state=checked]:bg-[hsl(var(--vitality-blue))] data-[state=checked]:border-[hsl(var(--vitality-blue))]"
                />
                <Label htmlFor={`sda-${cat}`} className="text-sm text-gray-700 cursor-pointer font-normal">
                  {cat}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main page ────────────────────────────────────────────────────────────────
const Accommodation = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredVacancies = useMemo(() => {
    return housingVacancies.filter((v) => {
      // State filter
      if (filters.state) {
        const mapping = REGION_MAP[v.title];
        if (!mapping || mapping.state !== filters.state) return false;
      }

      // Region filter
      if (filters.region) {
        const mapping = REGION_MAP[v.title];
        if (!mapping || mapping.region !== filters.region) return false;
      }

      // SDA category filter
      if (filters.sdaCategories.length > 0) {
        const matches = filters.sdaCategories.some((cat) =>
          matchesSdaCategory(v.type, cat)
        );
        if (!matches) return false;
      }

      return true;
    });
  }, [filters]);

  const hasActiveFilters =
    filters.state !== "" ||
    filters.region !== "" ||
    filters.sdaCategories.length > 0;

  return (
    <>
      <Helmet>
        <title>Accommodations | Vitality Community Care</title>
        <meta name="description" content="Immediate SIL Vacancies & Specialist Disability Accommodation. Explore our Supported Independent Living (SIL) accommodations across Melbourne, providing flexible living arrangements with personalized support." />
        <meta property="og:title" content="Accommodations | Vitality Community Care" />
        <meta property="og:description" content="Immediate SIL Vacancies & Specialist Disability Accommodation. Find quality supported independent living accommodation options tailored to your needs." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green-75))] text-white pt-20 pb-0 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>

        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-10 -right-20 opacity-20 animate-rotate" />
        <PuzzlePiece variant="green" size="md" className="absolute -top-0 -left-1 opacity-20 animate-rotate-reverse" />

        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white">
                <Home size={28} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Accommodations</h1>
            <p className="text-xl mb-8 opacity-90">
              Immediate SIL Vacancies & Specialist Disability Accommodation
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Home size={16} />
                <span>Supported Independent Living</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <MapPin size={16} />
                <span>Specialist Disability Accommodation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '140px', width: '100%', display: 'block', marginBottom: '-30px' }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      <section className="bg-white pt-0 pb-8">
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
                    <span className="text-sm font-medium text-[hsl(var(--vitality-blue))]">Accommodations</span>
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
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters(defaultFilters)}
          />

          {hasActiveFilters && (
            <p className="text-sm text-gray-500 mb-6">
              Showing <span className="font-semibold text-gray-800">{filteredVacancies.length}</span> of {housingVacancies.length} properties
            </p>
          )}

          {filteredVacancies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVacancies.map((vacancy) => (
                <HousingCard key={vacancy.id} vacancy={vacancy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg font-medium text-gray-600 mb-2">No properties match your filters.</p>
              <p className="text-sm text-gray-400 mb-6">Try adjusting your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => setFilters(defaultFilters)}
                className="rounded-full"
              >
                Clear filters
              </Button>
            </div>
          )}
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
                      <p className="font-medium">1300 395 852</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[hsl(var(--vitality-green))] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">contact@vitalitycommunitycare.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/accommodation/1" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Broadmeadows, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/2" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Strathtulloh, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/3" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Mickleham, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/4" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Dandenong North, VIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/5" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Gosnells, WA
                    </Link>
                  </li>
                  <li>
                    <Link to="/accommodation/6" className="text-[hsl(var(--vitality-blue))] hover:underline font-medium">
                      Southern River, WA
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
