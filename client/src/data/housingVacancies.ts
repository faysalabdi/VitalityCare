// Housing vacancy data for SIL properties
import beaconPlace1 from '@/assets/houses/Beacon-place1.png';
import beaconPlace2 from '@/assets/houses/Beacon-place2.png';
import beaconPlace3 from '@/assets/houses/Beacon-place3.png';
import silverFern1 from '@/assets/houses/Silver-fern-house1.png';
import silverFern2 from '@/assets/houses/Silver-fern-house2.png';
import silverFern3 from '@/assets/houses/Silver-fern-house3.png';
import auroraHouse1 from '@/assets/houses/Aurora-house1.png';
import auroraHouse2 from '@/assets/houses/Aurora-house2.png';
import auroraHouse3 from '@/assets/houses/Aurora-house3.png';
import edenGrove1 from '@/assets/houses/Eden-grove1.png';
import edenGrove2 from '@/assets/houses/Eden-grove2.png';
import edenGrove3 from '@/assets/houses/Eden-grove3.png';
import serenityPlace1 from '@/assets/houses/Serenity-place1.png';
import serenityPlace2 from '@/assets/houses/Serenity-place2.png';
import serenityPlace3 from '@/assets/houses/Serenity-place3.png';
import harmonyLodge1 from '@/assets/houses/Harmony-lodge1.png';
import harmonyLodge2 from '@/assets/houses/Harmony-lodge2.png';
import harmonyLodge3 from '@/assets/houses/Harmony-lodge3.png';

const housingVacancies = [
  {
    id: 1,
    location: "Beacon Place",
    title: "Broadmeadows, VIC 3047",
    type: "SIL - Improved Liveability",
    description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
    images: [
      beaconPlace3,
      beaconPlace2,
      beaconPlace1
    ],
    features: {
      bedrooms: 4,
      bathrooms: 2,
      accessibleParking: true,
      bedroomsAvailable: 2
    },
    propertyFeatures: [
      "Heating", "Cooling", "Dishwasher", "Outdoor Area", "Wheelchair Accessible", 
      "Accessible Features", "Built-in Wardrobes", "Doorway Widths > 950mm"
    ],
    fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home, located in Melbourne's northern suburbs. This exceptional home offers:\n\n* **Modern, Pupose-built, Accomodation**: Open-plan design, Spacious, high-quality home designed to meet high-intensity support needs.\n* **Safety & Accessibility Features**: Robust accessible with built-in robes and individual split system units and secure premises.\n* **Community Integration**: Close to essential services, transport and community hubs.\n* **24/7 Support **: Dedicated team of allied health & support workers available for personalised care.."
  },
  {
    id: 2,
    location: "Silver Fern House",
    title: "Strathtulloh, VIC 3338",
    type: "SIL - High Fully Accessible",
    description: "A contemporary supported living environment designed to promote independence and community engagement in a vibrant neighborhood.",
    images: [
      silverFern1,
      silverFern2,
      silverFern3
    ],
    features: {
      bedrooms: 4,
      bathrooms: 3,
      accessibleParking: true,
      bedroomsAvailable: 3
    },
    propertyFeatures: [
      "Heating", "Cooling", "Solar Panels", "Intercom", "Furnished", 
      "Wheelchair Accessible", "Accessible Features", "Energy Efficient"
    ],
    fullDescription: "Welcome to our modern SIL home in Bundoora, featuring:\n\n* **Support for Psychosocial & Physical Needs**: Accessible bathrooms and a safe, supportive environment tailored to participants requiring additional mental and physical health assistance.\n* **Comfortable & Secure Living**: Contemporary architecture with an open-plan layout, maximizing space and natural light.\n* **Health & Well-being Focused**: Close to therapy services, medical centres, and community support networks.\n* **Allied Health Staff**: Access to quality allied health staff and support workers.\n\nThis home provides the perfect balance of independence and support in a vibrant community setting."
  },
  {
    id: 3,
    location: "Aurora House",
    title: "Mickleham, VIC 3064",
    type: "SIL - Improved Liveability",
    description: "This exceptional SIL home features fully furnished bedrooms with kitchenettes, private ensuites, and spacious common areas in Melbourne's vibrant Western suburbs.",
    images: [
      auroraHouse1,
      auroraHouse2,
      auroraHouse3
    ],
    features: {
      bedrooms: 3,
      bathrooms: 2,
      accessibleParking: true,
      bedroomsAvailable: 2
    },
    propertyFeatures: [
      "Heating", "Cooling", "Dishwasher", "Study", "Furnished", 
      "Wheelchair Accessible", "Solar Panels", "Outdoor Area"
    ],
    fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home, located in the heart of Melbourne's vibrant Western suburbs. This exceptional home offers:\n\n* **Modern Design**: Contemporary architecture with an open-plan layout, maximizing space and natural light.\n* **Bedrooms**: Three spacious bedrooms, each equipped with built-in wardrobes.\n* **Bathrooms**: Two well-appointed bathrooms featuring modern fixtures and fittings.\n* **Kitchen**: A fully equipped kitchen with stainless steel appliances\n* **Climate Control**: Ducted heating and split system cooling"
  },

{
  id: 4,
  location: "Eden Grove",
  title: "Dandenong North, VIC 3175",
  type: "SIL - Improved Liveability",
  description: "A welcoming SIL home offering accessible living spaces, modern amenities, and a supportive environment in a peaceful neighborhood of Melbourne's eastern suburbs. Perfect for those seeking independence with dedicated support.",
  images: [
    edenGrove1,
    edenGrove2,
    edenGrove3
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating", "Cooling", "Dishwasher", "Study", "Furnished", 
    "Wheelchair Accessible", "Solar Panels", "Outdoor Area"
  ],
  fullDescription: "Welcome to this exceptional Supported Independent Living (SIL) Home. This property features:\n\n* **Modern Design**: Freshly renovated single-level home with an open-plan layout, maximizing space and natural light.\n* **Bedrooms**: Three spacious bedrooms, each equipped with built-in wardrobes.\n* **Bathrooms**: Two well-appointed bathrooms featuring modern fixtures and fittings.\n* **Kitchen**: A fully equipped kitchen with stainless steel appliances, ample storage.\n* **Climate Control**: Ducted heating and split system cooling to ensure year-round comfort.\n* **Energy Efficiency**: Energy-efficient lighting and insulation to reduce utility costs."
},

{
  id: 5,
  location: "Serenity Place",
  title: "Gosnells, WA 6110",
  type: "SIL - High Physical Support",
  description: "A modern SIL home nestled in Perth's southeastern suburbs, offering spacious accessible living areas, contemporary amenities, and a tranquil garden setting. Ideal for residents seeking a supportive community environment with independence.",
  images: [
    serenityPlace1,
    serenityPlace2,
    serenityPlace3
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating", "Cooling", "Dishwasher", "Study", "Furnished", 
    "Wheelchair Accessible", "Solar Panels", "Outdoor Area"
  ],
  fullDescription: "Welcome to this exceptional Supported Independent Living (SIL) Home. This property features:\n\n* **Modern Design**: Open-plan living spaces with wheelchair accessibility and integrated assistive technology throughout.\n* **Safety Features**: Secure premises with 24/7 on-site support staff and emergency response systems.\n* **Proximity to Amenities**: Conveniently located near shopping centres, parks, medical facilities and public transport options.\n* **Lifestyle & Community**: Regular social outings and community participation activities available nearby, fostering an engaging lifestyle."
},

{
  id: 6,
  location: "Harmony Lodge",
  title: "Southern River, WA 6110",
  type: "SIL Robust",
  description: "A welcoming SIL residence in Southern River featuring contemporary design, accessible living spaces, and a vibrant community atmosphere. This thoughtfully designed home provides 24/7 support while promoting independence, with easy access to local amenities and recreational activities.",
  images: [
    harmonyLodge1,
    harmonyLodge2,
    harmonyLodge3
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating", "Cooling", "Dishwasher", "Study", "Furnished", 
    "Wheelchair Accessible", "Solar Panels", "Outdoor Area"
  ],
  fullDescription: "Welcome to this exceptional Supported Independent Living (SIL) Home. This property features:\n\n* **Renovated Home**: Wheelchair accessible door, assistive technology throughout the property.\n* **Safety Features**: Secure premises with 24/7 support staff and emergency response systems.\n* **Proximity to Amenities**: Only 4 min drive from shops, parks and community centre."
},

];

export default housingVacancies; 