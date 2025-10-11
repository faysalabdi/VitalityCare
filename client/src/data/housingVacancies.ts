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
// Melbourne - Inner
{
  id: 7,
  location: "Ardeer",
  title: "Holt Street, Ardeer, VIC",
  type: "High Physical Support/Robust",
  description: "This beautifully designed home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "holtStreetArdeer1",
    "holtStreetArdeer2",
    "holtStreetArdeer3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher",
    "Outdoor Area",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 31 Holt Street, Ardeer. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support/Robust needs.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes a car space and is pet-friendly.\n* **Personalisation**: Modifications are available if needed.\n* **Community Integration**: Located in Ardeer, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 Whitehorse Road, Box Hill, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 8,
  location: "Berwick",
  title: "Mansfield Street, Berwick, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "mansfieldStreetBerwick1",
    "mansfieldStreetBerwick2",
    "mansfieldStreetBerwick3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher",
    "Outdoor Area",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Mansfield Street, Berwick. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust support needs.\n* **Safety & Accessibility Features**: Three participant ensuites, a separate OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes one car space and is pet-friendly.\n* **Community Integration**: Located in Berwick, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},


{
  id: 9,
  location: "Essendon North",
  title: "Royal Avenue, Essendon North, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "royalAveEssendonNorth1",
    "royalAveEssendonNorth2",
    "royalAveEssendonNorth3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher",
    "Oven",
    "Private Courtyards",
    "Bariatric Standard",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Spacious Dining Area",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Royal Avenue, Essendon North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs.\n* **Safety & Accessibility Features**: Three participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Includes a dishwasher and oven, private courtyards, and two car spaces. It is also bariatric standard and pet-friendly.\n* **Community Integration**: Located 2 minutes from Woodland Park, Airport West, 3 minutes from DFO Essendon, and 10 minutes from John Fawkner Private Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 10,
  location: "Surrey Hills",
  title: "Warrigal Road, Surrey Hills, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "warrigalRoadSurreyHills1",
    "warrigalRoadSurreyHills2",
    "warrigalRoadSurreyHills3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher",
    "Oven",
    "Microwave",
    "Private Courtyards",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Warrigal Road, Surrey Hills. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs.\n* **Safety & Accessibility Features**: Three participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Includes a dishwasher, oven, microwave, TV, and private courtyards. It also has two car spaces and is pet-friendly.\n* **Community Integration**: Located 10 minutes from Box Hill Hospital, 9 minutes from Box Hill Central, and 1 minute from Wattle Park.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 11,
  location: "Kingsbury",
  title: "Dunne Street, Kingsbury, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "dunneStreetKingsbury1",
    "dunneStreetKingsbury2",
    "dunneStreetKingsbury3"
  ],
  features: {
    bedrooms: 4,
    bathrooms: 4,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "1 OOA Room",
    "Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Dunne Street, Kingsbury. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs, with 4 villas.\n* **Safety & Accessibility Features**: Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Kevin P Hardiman Reserve, 7 minutes from Northland Shopping Centre, and 3 minutes from La Trobe Private Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 12,
  location: "Mt Waverley",
  title: "Lawrence Road, Mount Waverley, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "lawrenceRoadMtWaverley1",
    "lawrenceRoadMtWaverley2",
    "lawrenceRoadMtWaverley3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Lawrence Road, Mount Waverley. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs, for 2 participants.\n* **Safety & Accessibility Features**: 2 Participant Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Pinewood Shopping Village, 3 minutes from Waverley Road Basin, and 12 minutes from Monash Hospital Clayton.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 13,
  location: "Hampton Park",
  title: "Horizon Boulevard, Hampton Park, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "horizonBlvdHamptonPark1",
    "horizonBlvdHamptonPark2",
    "horizonBlvdHamptonPark3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuite",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Horizon Boulevard, Hampton Park. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Hampton Park, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 13,
  location: "Croydon",
  title: "Norman Road, Croydon, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "normanRoadCroydon1",
    "normanRoadCroydon2",
    "normanRoadCroydon3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Norman Road, Croydon. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Croydon, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 14,
  location: "Coburg",
  title: "Gordon Street, Coburg, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "gordonStreetCoburg1",
    "gordonStreetCoburg2",
    "gordonStreetCoburg3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Private Courtyards",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "2 Car Space",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Gordon Street, Coburg. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes a dishwasher and oven, private courtyards, laundry, and 2 car spaces. It is also pet-friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Bridges Reserve, 5 minutes from Coles Coburg North, and 12 minutes from The Royal Melbourne Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

// Melbourne - West
{
  id: 15,
  location: "Aintree",
  title: "Exmoor Street, Aintree, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "exmoorStreetAintree1",
    "exmoorStreetAintree2",
    "exmoorStreetAintree3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Exmoor Street, Aintree. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Wiltshire Boulevard Reserve, and 18 minutes from Central Shopping Centre, and 30 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 16,
  location: "Brookfield",
  title: "Sumac Street, Brookfield, VIC",
  type: "High Physical Support / Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "sumacStBrookfield1",
    "sumacStBrookfield2",
    "sumacStBrookfield3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuite",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Sumac Street, Brookfield. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support / Robust needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Brookfield, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 17,
  location: "Deanside Village",
  title: "Cookhouse Street, Deanside, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "cookhouseStreetDeanside1",
    "cookhouseStreetDeanside2",
    "cookhouseStreetDeanside3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Cookhouse Street, Deanside. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Deanside Village, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 18,
  location: "Fraser Rise",
  title: "Clipstone Road, Fraser Rise, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "clipstoneRoadFraserRise1",
    "clipstoneRoadFraserRise2",
    "clipstoneRoadFraserRise3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Clipstone Road, Fraser Rise. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Memorial Park, and 6 minutes from Taylors Hill Village, and 24 minutes from Sunshine Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 19,
  location: "Fraser Rise",
  title: "Skyline Road, Fraser Rise, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "skylineRoadFraserRise1",
    "skylineRoadFraserRise2",
    "skylineRoadFraserRise3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Skyline Road, Fraser Rise. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Fraser Rise, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 20,
  location: "Harkness",
  title: "Wallangara Boulevard, Harkness, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "wallangaraBoulevardHarkness1",
    "wallangaraBoulevardHarkness2",
    "wallangaraBoulevardHarkness3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Wallangara Boulevard, Harkness. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Arnolds Creek Reserve, 8 minutes from Woodgrove Shopping Centre, and 10 minutes from Melton Health Hub.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 21,
  location: "Mambourin",
  title: "Bessie Street, Mambourin, VIC",
  type: "High Physical Support / Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "bessieStreetMambourin1",
    "bessieStreetMambourin2",
    "bessieStreetMambourin3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Bessie Street, Mambourin. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Barrabool Boulevard Playground, 8 minutes from Manor Lakes Central Shopping Centre, and 20 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},


{
  id: 22,
  location: "Mambourin",
  title: "Produce Drive, Mambourin, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "produceDriveMambourin1",
    "produceDriveMambourin2",
    "produceDriveMambourin3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Produce Drive, Mambourin. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Barrabool Boulevard Playground, 8 minutes from Manor Lakes Central Shopping Centre, and 20 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},


{
  id: 23,
  location: "Manor Lakes",
  title: "Corinth Street, Manor Lakes, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "corinthStreetManorLakes1",
    "corinthStreetManorLakes2",
    "corinthStreetManorLakes3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Corinth Street, Manor Lakes. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Alfresco, and Craft Room. It also has 1 Car Space, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Manor Lakes Central Shopping Centre, 12 minutes from Wyndham Park, and 17 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 24,
  location: "Melton South",
  title: "Bonito Street, Melton South, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "bonitoStreetMeltonSouth1",
    "bonitoStreetMeltonSouth2",
    "bonitoStreetMeltonSouth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Bonito Street, Melton South. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Melton Station Square, 9 minutes from Melton Health Hub.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 25,
  location: "Rockbank",
  title: "Rosette Crescent, Rockbank, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "rosetteCrescentRockbank1",
    "rosetteCrescentRockbank2",
    "rosetteCrescentRockbank3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Rosette Crescent, Rockbank. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 10 minutes from Frontier Park and Woodlea Town Centre, and 15 minutes from Melton Health.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 26,
  location: "Strathtulloh",
  title: "Westbourne Street, Strathtulloh, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "westbourneStreetStrathtulloh1",
    "westbourneStreetStrathtulloh2",
    "westbourneStreetStrathtulloh3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Westbourne Street, Strathtulloh. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Strathtulloh, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 27,
  location: "Sunshine West",
  title: "Hilma Street, Sunshine West, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "hilmaStreetSunshine1",
    "hilmaStreetSunshine2",
    "hilmaStreetSunshine3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Courtyard",
    "Garage",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Hilma Street, Sunshine West. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space, a courtyard, garage, alfresco, and laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Sunshine West, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 28,
  location: "Tarneit",
  title: "Eloquence Road, Tarneit, VIC",
  type: "Robust/FA/IL",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "eloquenceRoadTarneit1",
    "eloquenceRoadTarneit2",
    "eloquenceRoadTarneit3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Eloquence Road, Tarneit. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust/FA/IL needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Aeroplane Park Playground, 14 minutes from Tarneit Central Shopping Centre, and 16 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 29,
  location: "Tarneit",
  title: "Tolhurst Street, Tarneit, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "tolhurstStreetTarneit1",
    "tolhurstStreetTarneit2",
    "tolhurstStreetTarneit3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Tolhurst Street, Tarneit. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Navigation Park, 7 minutes from Tarneit Central Shopping Centre, and 19 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 30,
  location: "Tarneit",
  title: "Pink Avenue, Tarneit, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "pinkAvenueTarneit1",
    "pinkAvenueTarneit2",
    "pinkAvenueTarneit3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Pink Avenue, Tarneit. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 9 minutes from Tarneit Central Shopping Centre, 12 minutes from Presidents Park, and 15 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 31,
  location: "Tarneit",
  title: "Houdini Drive, Tarneit, VIC",
  type: "High Physical Support / Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "houdiniDriveTarneit1",
    "houdiniDriveTarneit2",
    "houdiniDriveTarneit3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Houdini Drive, Tarneit. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support / Robust needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, a laundry, and a craft room. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Tarneit, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 32,
  location: "Thornhill Park",
  title: "Aristides Crescent, Thornhill Park, VIC",
  type: "Robust/FA/IL",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "aristidesCrescentThornhillPark1",
    "aristidesCrescentThornhillPark2",
    "aristidesCrescentThornhillPark3"
  ],
  features: {
    bedrooms: 4,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Water Tank",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Aristides Crescent, Thornhill Park. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust/FA/IL needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Water Tank, and 1 Car Space. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Wiltshire Boulevard Reserve, 18 minutes from Central Shopping Centre, and 30 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 33,
  location: "Truganina",
  title: "Weyba Street, Truganina, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "weybaStreetTruganina1",
    "weybaStreetTruganina2",
    "weybaStreetTruganina3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Weyba Street, Truganina. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 16 minutes from Pacific Werribee, 17 minutes from Werribee Mercy Hospital, and 20 minutes from Wyndham Park.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 34,
  location: "Weir Views",
  title: "Taxon Road, Weir Views, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "taxonRoadWeirViews1",
    "taxonRoadWeirViews2",
    "taxonRoadWeirViews3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Taxon Road, Weir Views. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Weir Views, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 35,
  location: "Weir Views",
  title: "Cobungra Road, Weir Views, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "cobungraRoadWeirViews1",
    "cobungraRoadWeirViews2",
    "cobungraRoadWeirViews3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Cobungra Road, Weir Views. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Alfresco, and Craft Room. It also has 1 Car Space, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Opalia Plaza, 12 minutes from Melton Botanic Garden, and 13 minutes from Melton Health Hub.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 36,
  location: "Werribee",
  title: "Benson Drive, Werribee, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "bensonDriveWerribee1",
    "bensonDriveWerribee2",
    "bensonDriveWerribee3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Benson Drive, Werribee. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and a laundry room. It is pet-friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 13 minutes from Wyndham Park, 17 minutes from Pacific Werribee, and 20 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 37,
  location: "Werribee",
  title: "Grandvista Boulevard, Werribee, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "grandvistaBoulevardWerribee1",
    "grandvistaBoulevardWerribee2",
    "grandvistaBoulevardWerribee3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Grandvista Boulevard, Werribee. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 12 minutes from Mambourin, Manor Lakes, Elver, Armstrong Rd, Wyndham Vale, 17 minutes from Pacific Werribee, and 20 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 38,
  location: "Werribee",
  title: "Peterborough Rise, Werribee, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "peterboroughRiseWerribee1",
    "peterboroughRiseWerribee2",
    "peterboroughRiseWerribee3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Peterborough Rise, Werribee. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 9 minutes from Wyndham Park, 16 minutes from Pacific Werribee, and 17 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 39,
  location: "Wyndham Vale",
  title: "Arianna Street, Wyndham Vale, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "ariannaStreetWyndhamVale1",
    "ariannaStreetWyndhamVale2",
    "ariannaStreetWyndhamVale3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Craft Room",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Arianna Street, Wyndham Vale. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, a craft room, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Wyndham Vale, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 40,
  location: "Wyndham Vale",
  title: "Fritelli Circuit, Wyndham Vale, VIC",
  type: "Robust/FA/IL",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "fritelliCircuitWyndhamVale1",
    "fritelliCircuitWyndhamVale2",
    "fritelliCircuitWyndhamVale3"
  ],
  features: {
    bedrooms: 4,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Fritelli Circuit, Wyndham Vale. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust/FA/IL needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Wyndham Vale Square Shopping Centre, 11 minutes from Wyndham Park, and 18 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 41,
  location: "Wyndham Vale",
  title: "Greenmont Road, Wyndham Vale, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "greenmontRoadWyndhamVale1",
    "greenmontRoadWyndhamVale2",
    "greenmontRoadWyndhamVale3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Greenmont Road, Wyndham Vale. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet HPS needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 12 minutes from Wyndham Park, 15 minutes from Pacific Werribee, and 16 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 42,
  location: "Wyndham Vale",
  title: "Lyndey Street, Wyndham Vale, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "lyndeyStreetWyndhamVale1",
    "lyndeyStreetWyndhamVale2",
    "lyndeyStreetWyndhamVale3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Lyndey Street, Wyndham Vale. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 12 minutes from Wyndham Park, 15 minutes from Pacific Werribee, and 16 minutes from Werribee Mercy Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

// Melbourne - South East

{
  id: 43,
  location: "Beaconsfield",
  title: "Wattle Crescent, Beaconsfield, VIC, 3807",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "wattleCrescentBeaconsfield1",
    "wattleCrescentBeaconsfield2",
    "wattleCrescentBeaconsfield3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Wattle Crescent, Beaconsfield. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Beaconsfield Park, 6 minutes from The Medical Clinic, and 9 minutes from Berwick Eye Centre & Gastrointestinal Health.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 44,
  location: "Beaconsfield",
  title: "Rimple Way, Beaconsfield, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "rimpleWayBeaconsfield1",
    "rimpleWayBeaconsfield2",
    "rimpleWayBeaconsfield3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Rimple Way, Beaconsfield. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Beaconsfield, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at Level 4/830 Whitehorse Rd Box Hill VIC 3128, (03) 9999 7418, or admin@paramounthomes.com.au."
},

{
  id: 45,
  location: "Botanic Ridge",
  title: "Belcello Street, Botanic Ridge, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "belcelloStreetBotanicRidge1",
    "belcelloStreetBotanicRidge2",
    "belcelloStreetBotanicRidge3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Belcello Street, Botanic Ridge. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 3 participants.\n* **Safety & Accessibility Features**: 3 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Belvista Way Playground, 7 minutes from Botanic Ridge Village, and 28 minutes from Casey Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 46,
  location: "Clyde North",
  title: "Piero Street, Clyde North, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "pieroStreetClydeNorth1",
    "pieroStreetClydeNorth2",
    "pieroStreetClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Piero Street, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Heritage Park, 5 minutes from Shopping on Clyde, and 17 minutes from Monash Health – Casey Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 47,
  location: "Clyde",
  title: "Greenland Avenue, Clyde, VIC",
  type: "High Physical Support - Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "greenlandAvenueClyde1",
    "greenlandAvenueClyde2",
    "greenlandAvenueClyde3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Greenland Avenue, Clyde. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support - Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Clyde, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 48,
  location: "Clyde North",
  title: "Aegean Street, Clyde North, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "aegeanStreetClydeNorth1",
    "aegeanStreetClydeNorth2",
    "aegeanStreetClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry",
    "Storage"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Aegean Street, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, a laundry, and storage. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Clyde North, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 49,
  location: "Clyde North",
  title: "Heartloop, Clyde North, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "heartloopClydeNorth1",
    "heartloopClydeNorth2",
    "heartloopClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Heartloop, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 10 minutes from Shopping on Clyde, 13 minutes from St Germain Blvd Park, and 20 minutes from Monash Health – Casey Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 50,
  location: "Clyde North",
  title: "Kenmore Way, Clyde North, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "kenmoreWayClydeNorth1",
    "kenmoreWayClydeNorth2",
    "kenmoreWayClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Kenmore Way, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Clyde North, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 51,
  location: "Clyde North",
  title: "Heifer Avenue, Clyde North, VIC",
  type: "HPS + Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "heiferAvenueClydeNorth1",
    "heiferAvenueClydeNorth2",
    "heiferAvenueClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Heifer Avenue, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet HPS + Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Alfresco, and Craft Room. It also has 1 Car Space, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Banjo Park, 8 minutes from St German SuperClinic, and 15 minutes from Selandra Rise.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 52,
  location: "Clyde North",
  title: "Pobblebonk Crescent, Clyde North, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "pobblebonkCrescentClydeNorth1",
    "pobblebonkCrescentClydeNorth2",
    "pobblebonkCrescentClydeNorth3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Pobblebonk Crescent, Clyde North. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and a laundry room. It is pet-friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Heritage Park, 7 minutes from Shopping on Clyde, and 11 minutes from Monash Health – Casey Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 53,
  location: "Cranbourne East",
  title: "Portbury Circuit, Cranbourne East, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "portburyCircuitCranbourneEast1",
    "portburyCircuitCranbourneEast2",
    "portburyCircuitCranbourneEast3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Portbury Circuit, Cranbourne East. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space, an alfresco area, a craft room, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Cranbourne East, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at Level 4/830 Whitehorse Rd Box Hill VIC 3128, (03) 9999 7418, or admin@paramounthomes.com.au."
},

{
  id: 54,
  location: "Cranbourne East",
  title: "Dalmation Street, Cranbourne East, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "dalmationStreetCranbourneEast1",
    "dalmationStreetCranbourneEast2",
    "dalmationStreetCranbourneEast3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Dalmation Street, Cranbourne East. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 8 minutes from Cranbourne Park Shopping Centre, 10 minutes from Casey Fields, and 20 minutes from Casey Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 55,
  location: "Cranbourne West",
  title: "Aurora Drive, Cranbourne West, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "auroraDriveCranbourneWest1",
    "auroraDriveCranbourneWest2",
    "auroraDriveCranbourneWest3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Aurora Drive, Cranbourne West. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Truemans Reserve Dog Off Leash Area, 8 minutes from Cranbourne West Shopping Centre, and 8 minutes from Monash Health – Cranbourne Integrated Health Centre.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 56,
  location: "Junction Village",
  title: "Protea Street, Junction Village, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "proteaStJunctionVillage1",
    "proteaStJunctionVillage2",
    "proteaStJunctionVillage3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Protea Street, Junction Village. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Junction Village, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 57,
  location: "Junction Village",
  title: "Protea Street, Junction Village, VIC",
  type: "High Physical Support - Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "proteaStJunctionVillage_2_1",
    "proteaStJunctionVillage_2_2",
    "proteaStJunctionVillage_2_3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Protea Street, Junction Village. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Junction Village, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 58,
  location: "Koo Wee Rup",
  title: "Habitat Way, Koo Wee Rup, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "habitatWayKooWeeRup1",
    "habitatWayKooWeeRup2",
    "habitatWayKooWeeRup3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco",
    "Craft Room"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Habitat Way, Koo Wee Rup. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Alfresco, and Craft Room. It also has 1 Car Space, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 15 minutes from The Heritage Shopping Centre, Mordialloc, and 22 minutes from Officer District Park, and 33 minutes from Frankston Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 59,
  location: "Officer",
  title: "Blossom Street, Officer, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "blossomStOfficer1",
    "blossomStOfficer2",
    "blossomStOfficer3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Blossom Street, Officer. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Officer, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 60,
  location: "Officer",
  title: "Forage Street, Officer, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "forageStreetOfficer1",
    "forageStreetOfficer2",
    "forageStreetOfficer3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Forage Street, Officer. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Three participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Officer, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 61,
  location: "Pakenham",
  title: "Rebecca Court, Pakenham, VIC",
  type: "Independent Living - High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "rebeccaCourtPakenham1",
    "rebeccaCourtPakenham2",
    "rebeccaCourtPakenham3"
  ],
  features: {
    bedrooms: 4,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Ramp",
    "Bath",
    "Craft Store",
    "Garage"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Rebecca Court, Pakenham. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Independent Living - High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: 3 Participant Ensuites, OOA Room, accessible bathrooms, and accessible design throughout, including ramps.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space, a garage, a craft store, and a bath. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Pakenham, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

// Melbourne - North

{
  id: 62,
  location: "Airport West",
  title: "Earl Street, Airport West, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "earlStreetAirportWest1",
    "earlStreetAirportWest2",
    "earlStreetAirportWest3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Earl Street, Airport West. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Airport West, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 63,
  location: "Beveridge",
  title: "Bristlecone Street, Beveridge, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "bristleconeStBeveridge1",
    "bristleconeStBeveridge2",
    "bristleconeStBeveridge3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Bristlecone Street, Beveridge. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Beveridge, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 64,
  location: "Beveridge",
  title: "Dotterel Street, Beveridge, VIC",
  type: "Improved Liveability + Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "dotterelStreetBeveridge1",
    "dotterelStreetBeveridge2",
    "dotterelStreetBeveridge3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Skylight Above"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Dotterel Street, Beveridge. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability + Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout, including a skylight.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Mandalay Golf Course, 14 minutes from Merrifield City, and 25 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 65,
  location: "Broadmeadows",
  title: "Central Grove, Broadmeadows, VIC",
  type: "Robust + IL",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "centralGroveBroadmeadows1",
    "centralGroveBroadmeadows2",
    "centralGroveBroadmeadows3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant Duplex Houses",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Central Grove, Broadmeadows. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust + IL needs for 2 participants in duplex houses.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located in Broadmeadows, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 66,
  location: "Broadmeadows",
  title: "Nicholas Street, Broadmeadows, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "nicholasStBroadmeadows1",
    "nicholasStBroadmeadows2",
    "nicholasStBroadmeadows3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "6 Cubic Meter Storage Shed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Nicholas Street, Broadmeadows. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, 1 Car Space, and a 6 Cubic Meter Storage Shed. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 2 minutes from Broadmeadows Central, 4 minutes from Seabrook Reserve, and 5 minutes from Broadmeadows Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 67,
  location: "Bundoora",
  title: "Nickson St, Bundoora, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "nicksonStBundoora1",
    "nicksonStBundoora2",
    "nicksonStBundoora3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "Carport"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Nickson St, Bundoora. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and a Carport. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 8 minutes from DFO Uni Hill, 16 minutes from Northern Hospital, and 20 minutes from Yellow Gum Park.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 68,
  location: "Craigieburn",
  title: "Valiant Crescent, Craigieburn, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "valiantCrescentCraigieburn1",
    "valiantCrescentCraigieburn2",
    "valiantCrescentCraigieburn3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Valiant Crescent, Craigieburn. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 2 minutes from Anzac Park, Craigieburn, 5 minutes from Craigieburn Central, and 6 minutes from Craigieburn Centre.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 69,
  location: "Donnybrook",
  title: "Tannery Street, Donnybrook, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "tanneryStreetDonnybrook1",
    "tanneryStreetDonnybrook2",
    "tanneryStreetDonnybrook3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space",
    "Alfresco",
    "Heating",
    "Cooling",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Tannery Street, Donnybrook. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Gumnut Park Playground, 14 minutes from Merrifield City, and 23 minutes from Northern Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 70,
  location: "Epping",
  title: "Brush Road, Epping, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "brushRoadEpping1",
    "brushRoadEpping2",
    "brushRoadEpping3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Brush Road, Epping. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Epping, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 71,
  location: "Epping",
  title: "Ladislaw Drive, Epping, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "ladislawDriveEpping1",
    "ladislawDriveEpping2",
    "ladislawDriveEpping3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Ladislaw Drive, Epping. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 8 minutes from Epping North Shopping Centre and Northside Park.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 72,
  location: "Mickleham",
  title: "Flockhart Street, Mickleham, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "flockhartStreetMickleham1",
    "flockhartStreetMickleham2",
    "flockhartStreetMickleham3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Flockhart Street, Mickleham. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Merrifield City, 15 minutes from Mandalay Golf Course, and 25 minutes from Epping Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 73,
  location: "Thomastown",
  title: "Honniball Drive, Thomastown, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "honniballDrThomastown1",
    "honniballDrThomastown2",
    "honniballDrThomastown3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Dishwasher Included",
    "Oven included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "1 Car Space",
    "Heating",
    "Cooling"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Honniball Drive, Thomastown. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Spacious Dining Area, 1 Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 2 minutes from Whittlesea Public Gardens, 11 minutes from Campbellfield Plaza, and 12 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 74,
  location: "Thomastown",
  title: "Arugula Circuit, Thomastown, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "arugulaCircuitThomastown1",
    "arugulaCircuitThomastown2",
    "arugulaCircuitThomastown3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "1 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Arugula Circuit, Thomastown. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Thomastown, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 75,
  location: "Wallan",
  title: "Falcon Road, Wallan, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "falconRoadWallan1",
    "falconRoadWallan2",
    "falconRoadWallan3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "TV Included",
    "1 Laundry Room",
    "OOA Room",
    "1 Car Space",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Falcon Road, Wallan. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 3 participants.\n* **Safety & Accessibility Features**: 3 Participant Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Mandalay Golf Course, 14 minutes from Merrifield City, and 25 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 76,
  location: "Wollert",
  title: "Haystack Drive, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "haystackDriveWollert1",
    "haystackDriveWollert2",
    "haystackDriveWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Haystack Drive, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Spacious Dining Area, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Northside Park, 12 minutes from Mernda Village Shopping Centre, and 13 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 77,
  location: "Wollert",
  title: "Rogue Avenue, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "rogueAvenueWollert1",
    "rogueAvenueWollert2",
    "rogueAvenueWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry",
    "Storage"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Rogue Avenue, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, a laundry, and storage. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Wollert, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 78,
  location: "Wollert",
  title: "Davis Circuit, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "davisCircuitWollert1",
    "davisCircuitWollert2",
    "davisCircuitWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Davis Circuit, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Northside Park, Craigieburn, 12 minutes from Mernda Village Shopping Centre, and 13 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 79,
  location: "Wollert",
  title: "Light Street, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "lightStreetWollert1",
    "lightStreetWollert2",
    "lightStreetWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Light Street, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Northside Park, Craigieburn, 12 minutes from Mernda Village Shopping Centre, and 13 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 80,
  location: "Wollert",
  title: "Light Street, Wollert, VIC",
  type: "Robust/HPS",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "lightStreetWollert_2_1",
    "lightStreetWollert_2_2",
    "lightStreetWollert_2_3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Light Street, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust/HPS needs for 3 participants.\n* **Safety & Accessibility Features**: Three participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Wollert, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 81,
  location: "Wollert",
  title: "Loks Road, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "loksRoadWollert1",
    "loksRoadWollert2",
    "loksRoadWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry",
    "Craft Room",
    "Storage"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Loks Road, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, a laundry, a craft room, and storage. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Wollert, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 82,
  location: "Wollert",
  title: "Sheepyard Lane, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "sheepyardLaneWollert1",
    "sheepyardLaneWollert2",
    "sheepyardLaneWollert3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Craft Room",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Sheepyard Lane, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, a craft room, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Wollert, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 83,
  location: "Wollert",
  title: "Marijorelle Boulevard, Wollert, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "marijorelleBoulevardWollert1",
    "marijorelleBoulevardWollert2",
    "marijorelleBoulevardWollert3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Marijorelle Boulevard, Wollert. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 1 minute from The Spur at The Patch Estate, 12 minutes from Aurora Village, and 16 minutes from Northern Hospital Epping.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 84,
  location: "Woodstock",
  title: "43 Monakeeba Blvd, Woodstock, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "monakeebaBlvdWoodstock1",
    "monakeebaBlvdWoodstock2",
    "monakeebaBlvdWoodstock3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 43 Monakeeba Blvd, Woodstock. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Kalkallo Knolls Nature Reserve, 8 minutes from Woolworths Kallo Town Centre, and 13 minutes from Merrifield City Medical Centre.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 85,
  location: "Woodstock",
  title: "Monakeeba Road, Woodstock, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "monakeebaRoadWoodstock1",
    "monakeebaRoadWoodstock2",
    "monakeebaRoadWoodstock3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Ensuite",
    "2-Participant House",
    "Accessible Living",
    "Bring-your-own supports",
    "Modifications if needed",
    "OOA room",
    "Modern Amenities",
    "TV",
    "Dishwasher",
    "Oven",
    "Microwave",
    "Convenience & Comfort",
    "White goods furnished",
    "Pet-friendly",
    "2 car space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Monakeeba Road, Woodstock. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with white goods, TV, dishwasher, oven, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Contact Information**: For more details, contact Paramount Disability Homes at Level 4/830 Whitehorse Rd Box Hill VIC 3128, (03) 9999 7418, or admin@paramounthomes.com.au."
},

// regional

{
  id: 86,
  location: "Winter Valley",
  title: "Geary Place, Winter Valley, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "gearyPlaceWinterValley1",
    "gearyPlaceWinterValley2",
    "gearyPlaceWinterValley3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuite",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco Decking",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Geary Place, Winter Valley. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, alfresco decking, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Winter Valley, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 2,
  location: "Alfredton (Ballarat)",
  title: "Brewster Street, Alfredton, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "brewsterAlfredtonBallarat1",
    "brewsterAlfredtonBallarat2",
    "brewsterAlfredtonBallarat3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participants Ensuites",
    "1 OOA Room",
    "1 Living Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Brewster Street, Alfredton (Ballarat). This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: 3 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, 1 Living Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from Victoria Park, 7 minutes from Delacombe Town Centre, and 10 minutes from Ballarat Base Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 87,
  location: "Bonshaw",
  title: "Webb Road, Bonshaw, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "webbRdBonshaw1",
    "webbRdBonshaw2",
    "webbRdBonshaw3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Webb Road, Bonshaw. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Delacombe Town Centre, 4 minutes from Sebastopol Dog Park, and 10 minutes from Ballarat Base Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 88,
  location: "Delacombe",
  title: "Savannah Court, Delacombe, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "savannahCourtDelacombe1",
    "savannahCourtDelacombe2",
    "savannahCourtDelacombe3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Breakout Room",
    "TV Included",
    "1 Car Space",
    "Backup System"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Savannah Court, Delacombe. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: 3 Participant Ensuites, 1 OOA Room, 1 Breakout Room, and accessible design throughout, including a backup system.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Delacombe Town Centre, 4 minutes from Winterfield Park Playground, and 5 minutes from Carn-Brae Clinic.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 89,
  location: "East Bendigo",
  title: "Strickland Road, East Bendigo, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "stricklandRoadEastBendigo1",
    "stricklandRoadEastBendigo2",
    "stricklandRoadEastBendigo3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant Villas",
    "Ensuites",
    "Separate OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Strickland Road, East Bendigo. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 3 participants in villas.\n* **Safety & Accessibility Features**: Three participant ensuites, a separate OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located in East Bendigo, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 90,
  location: "Strathfieldsaye",
  title: "Terrapee Street, Strathfieldsaye, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "terrapeeStreetStrathfieldsaye1",
    "terrapeeStreetStrathfieldsaye2",
    "terrapeeStreetStrathfieldsaye3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participants Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Terrapee Street, Strathfieldsaye. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: 2 Participants Ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 3 minutes from Champions IGA, 6 minutes from Strathfieldsaye Streamside Reserve, and 20 minutes from Bendigo Health Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 91,
  location: "Armstrong Creek",
  title: "Ungud Way, Armstrong Creek, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "ungudWayArmstrongCreek1",
    "ungudWayArmstrongCreek2",
    "ungudWayArmstrongCreek3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "3 Participant House",
    "Ensuite",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Ungud Way, Armstrong Creek. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 3 participants.\n* **Safety & Accessibility Features**: Ensuite, OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Armstrong Creek, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 92,
  location: "Armstrong Creek",
  title: "Consaw Street, Armstrong Creek, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "consawStreetArmstrongCreek1",
    "consawStreetArmstrongCreek2",
    "consawStreetArmstrongCreek3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "2 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Consaw Street, Armstrong Creek. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Spacious Dining Area, Laundry Room, and 2 Car Spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located in Armstrong Creek, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 93,
  location: "Armstrong Creek",
  title: "Greenmount Avenue, Armstrong Creek, VIC",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "greenmountAvenueArmstrongCreek1",
    "greenmountAvenueArmstrongCreek2",
    "greenmountAvenueArmstrongCreek3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Greenmount Avenue, Armstrong Creek. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Improved Liveability needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located in Armstrong Creek, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 94,
  location: "Armstrong Creek",
  title: "Singleton Circuit, Armstrong Creek, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "singletonCircuitArmstrongCreek1",
    "singletonCircuitArmstrongCreek2",
    "singletonCircuitArmstrongCreek3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 34 Singleton Circuit, Armstrong Creek. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 1 car space, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from The Village Warralily Shopping Centre, 7 minutes from Glenlee Regional Park, and 20 minutes from St John of God Geelong Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 95,
  location: "Lara",
  title: "Farndale Drive, Lara, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "farndaleDriveLara1",
    "farndaleDriveLara2",
    "farndaleDriveLara3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Craft Room",
    "Alfresco"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Farndale Drive, Lara. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, Craft Room, and 1 Car Space. It also has an Alfresco area, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Lara Medical Centre, 5 minutes from Grand Lakes Estates Playground, and 7 minutes from Lara Village Shopping Centre.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 96,
  location: "Lara",
  title: "Derwent Street, Lara, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "derwentStreetLara1",
    "derwentStreetLara2",
    "derwentStreetLara3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Derwent Street, Lara. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 5 minutes from Lara Medical Centre, 5 minutes from Grand Lakes Estates Playground, and 7 minutes from Lara Village Shopping Centre.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 97,
  location: "Mount Duneed",
  title: "Supen Street, Mount Duneed, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "supenStreetMountDuneed1",
    "supenStreetMountDuneed2",
    "supenStreetMountDuneed3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space",
    "Courtyard"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Supen Street, Mount Duneed. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It also has a Courtyard, is Pet Friendly, and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 2 minutes from Bunjil's Nest Playground, 6 minutes from Armstrong Creek Town Centre, and 18 minutes from University Hospital Geelong.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 98,
  location: "Mount Duneed",
  title: "Wilderness Drive, Mount Duneed, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "wildernessDriveMountDuneed1",
    "wildernessDriveMountDuneed2",
    "wildernessDriveMountDuneed3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "TV Included",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Wilderness Drive, Mount Duneed. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes Dishwasher, Oven, Microwave, TV, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 2 minutes from Bunjil's Nest Playground, 6 minutes from Armstrong Creek Town Centre, and 18 minutes from University Hospital Geelong.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 99,
  location: "Leopold",
  title: "Sedna Street, Leopold, VIC",
  type: "Robust",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "sednaStLeopold1",
    "sednaStLeopold2",
    "sednaStLeopold3"
  ],
  features: {
    bedrooms: 3,
    bathrooms: 3,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Sedna Street, Leopold. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet Robust needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Leopold, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 100,
  location: "Leopold",
  title: "Ash Road, Leopold, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "ashRoadLeopold1",
    "ashRoadLeopold2",
    "ashRoadLeopold3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Ash Road, Leopold. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, an OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces and is pet-friendly. Modifications are available if needed.\n* **Community Integration**: Located in Leopold, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 101,
  location: "Traralgon",
  title: "George Albert Drive, Traralgon, VIC",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "georgeAlbertDriveTraralgon1",
    "georgeAlbertDriveTraralgon2",
    "georgeAlbertDriveTraralgon3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Heating",
    "Cooling",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Fully Furnished",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "OOA Room",
    "2 Car Space",
    "TV Included",
    "Modifications If Needed",
    "Alfresco",
    "Laundry"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at George Albert Drive, Traralgon. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Ensuites, an OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Fully furnished with a TV, oven, dishwasher, and microwave. It also includes 2 car spaces, an alfresco area, and a laundry. It is pet-friendly and allows you to Bring Your Own Supports. Modifications are available if needed.\n* **Community Integration**: Located in Traralgon, offering convenient access to local amenities.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 102,
  location: "Warragul",
  title: "Mapleton Avenue, Warragul",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "mapletonAvenue1",
    "mapletonAvenue2",
    "mapletonAvenue3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "TV Included",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Heating",
    "Cooling",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "2 Participant House",
    "Ensuites",
    "1 OOA Room",
    "1 Laundry Room",
    "1 Car Space"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at Mapleton Avenue, Warragul. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs for 2 participants.\n* **Safety & Accessibility Features**: Two participant ensuites, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes TV, Dishwasher, Oven, Microwave, Laundry Room, and 1 Car Space. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 6 minutes from West Gippsland Hospital, 10 minutes from Lillico Park, and 14 minutes from Drouin Central.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

// vital haus apartments

{
  id: 103,
  location: "Ivanhoe East",
  title: "192 Lower Heidelberg Road, Ivanhoe East, VIC 3079",
  type: "Improved Liveability",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "ivanhoeEast1",
    "ivanhoeEast2",
    "ivanhoeEast3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Terrace Area",
    "Laundry Area",
    "TV Included",
    "1 Accessible Bathroom",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Pet Friendly",
    "Heating",
    "Cooling",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "SDA property with private bedrooms",
    "OOA room",
    "open living areas"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 192 Lower Heidelberg Road, Ivanhoe East. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed for Improved Liveability, with 2 participant rooms.\n* **Safety & Accessibility Features**: 1 Accessible Bathroom, OOA room, and accessible design throughout.\n* **Comfort & Convenience**: Includes TV, Dishwasher, Oven, Microwave, Terrace Area, Laundry Area. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 4 minutes from Ivanhoe Plaza, 3 minutes from Ivanhoe Train Station, 4 minutes from Bulleen Park, and 7 minutes from Austin Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 104,
  location: "Sunshine",
  title: "15-19 Service St Sunshine, VIC 3020",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "serviceStSunshine1",
    "serviceStSunshine2",
    "serviceStSunshine3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 2,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "TV Included",
    "Dishwasher Included",
    "Oven included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports",
    "Car Spaces Onsite",
    "Pet Friendly",
    "Heating",
    "Cooling",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "Mix of 1 Bed & 2 Beds",
    "1 OOA Room",
    "1 Laundry Room",
    "SDA property with private bedrooms",
    "accessible bathrooms",
    "open living areas"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 15-19 Service St Sunshine, VIC 3020. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Open-plan design, spacious, high-quality home designed to meet High Physical Support needs, with a mix of 1 and 2 bedroom apartments.\n* **Safety & Accessibility Features**: Accessible bathrooms, 1 OOA Room, and accessible design throughout.\n* **Comfort & Convenience**: Includes TV, Dishwasher, Oven, Microwave, a spacious dining area, and onsite car spaces. It is also Pet Friendly and allows you to Bring Your Own Supports.\n* **Community Integration**: Located 1 minute from Sunshine Plaza Shopping Centre, 3 minutes from Sunshine Train Station, and 11 minutes from Sunshine Hospital.\n* **Contact Information**: For more details, contact Paramount Disability Homes at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or ADMIN@PARAMOUNTHOMES.COM.AU."
},

{
  id: 105,
  location: "West Melbourne",
  title: "218-228 Stanley St West Melbourne, VIC 3003",
  type: "High Physical Support",
  description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
  images: [
    "stanleyStWestMelbourne1",
    "stanleyStWestMelbourne2",
    "stanleyStWestMelbourne3"
  ],
  features: {
    bedrooms: 2,
    bathrooms: 1,
    accessibleParking: true,
    bedroomsAvailable: 2
  },
  propertyFeatures: [
    "Architecturally Designed",
    "Thoughtful Layouts",
    "Premium Finishes",
    "Dedicated Self-Contained Ventilation System",
    "Lightning Broadband Fibre Connection",
    "Advanced HVAC Systems",
    "High-End Luxury Appliances",
    "Generous Storage",
    "Private Courtyards",
    "Walkable to Amenities (Aldi, North Melbourne train station, cafes, Flagstaff Gardens)",
    "Digital Concierge Service",
    "Pet Friendly",
    "Wheelchair Accessible",
    "Accessible Features",
    "Built-in Wardrobes",
    "Doorway Widths > 950mm",
    "1 Participant Ensuite",
    "1 Carer's Room",
    "1 Laundry Room",
    "1 Car Space",
    "Dishwasher Included",
    "Oven Included",
    "Microwave Included",
    "Spacious Dining Area",
    "Bring Your Own Supports"
  ],
  fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home at 218-228 Stanley St West Melbourne. This exceptional home offers:\n\n* **Modern, Purpose-built Accommodation**: Architecturally designed residences with thoughtful layouts and premium finishes, designed for High Physical Support.\n* **Safety & Accessibility Features**: Includes one participant ensuite, one carer's room, and accessible design throughout, with dedicated self-contained ventilation and advanced HVAC systems.\n* **Comfort & Convenience**: Fully furnished with high-end luxury appliances (dishwasher, oven, microwave), generous storage, and private courtyards. It also includes 1 car space, a laundry room, and a spacious dining area. Lightning broadband fibre connection is available. It is pet-friendly and allows you to bring your own supports.\n* **Community Integration**: Very walkable location, close to amenities such as Aldi, North Melbourne train station, cafes, Flagstaff Gardens, Victoria Market, and Melbourne CBD area.\n* **Digital Concierge**: Offers services for maintenance requests, news & events, in-home services, and paperless systems.\n* **Contact Information**: For more details, contact Vital Haus at 4/830 WHITEHORSE ROAD, BOX HILL, 3128, (03) 9999 7418, or X@VITALHAUS.COM.AU or WWW.VITALHAUS.COM.AU."
},



];

export default housingVacancies; 