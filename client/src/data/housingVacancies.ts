// Housing vacancy data for SIL properties
const housingVacancies = [
  {
    id: 1,
    location: "Heidelberg West, VIC",
    title: "Contemporary SIL Home in Heidelberg West",
    description: "This beautifully designed SIL home offers the perfect balance of independence and support in a convenient location close to community amenities.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80"
    ],
    features: {
      bedrooms: 5,
      bathrooms: 3,
      toilets: 3,
      standardParking: 4,
      accessibleParking: true,
      bedroomsAvailable: 2
    },
    propertyFeatures: [
      "Heating", "Cooling", "Dishwasher", "Outdoor Area", "Wheelchair Accessible", 
      "Accessible Features", "Built-in Wardrobes", "Doorway Widths > 950mm"
    ],
    fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home, located in Melbourne's northern suburbs. This exceptional home offers:\n\n* **5 Fully Furnished Bedrooms**: Each room features built-in storage, comfortable bedding, and personal space.\n* **Accessibility Features**: Fully wheelchair accessible throughout with wide doorways and accessible bathrooms.\n* **Modern Shared Spaces**: A spacious kitchen, laundry, and living areas create a welcoming environment for residents.\n* **Outdoor Bliss**: Enjoy a generous outdoor area perfect for relaxation and recreation.\n* **Ample Parking**: Plenty of on-site parking for visitors and residents.\n\nConveniently located close to shops, parks, and public transport, this property is ideal for those seeking comfort, accessibility, and independence in a supportive environment.",
    housemates: {
      age: "No specific preference",
      gender: "No specific preference",
      tenants: 5,
      qualities: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Prefer to spend time to themselves"
      ]
    },
    rent: "25% of your income"
  },
  {
    id: 2,
    location: "Bundoora, VIC",
    title: "Modern SIL Home in Bundoora",
    description: "A contemporary supported living environment designed to promote independence and community engagement in a vibrant neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80"
    ],
    features: {
      bedrooms: 4,
      bathrooms: 3,
      toilets: 3,
      standardParking: 4,
      accessibleParking: true,
      bedroomsAvailable: 3
    },
    propertyFeatures: [
      "Heating", "Cooling", "Solar Panels", "Intercom", "Furnished", 
      "Wheelchair Accessible", "Accessible Features", "Energy Efficient"
    ],
    fullDescription: "Welcome to our modern SIL home in Bundoora, featuring:\n\n* **4 Spacious Bedrooms**: Each room comes fully furnished with comfortable beds, storage, and personal touches.\n* **Accessibility Throughout**: The home is designed for full accessibility with wide doorways and no steps.\n* **Energy Efficient**: Solar panels and smart design reduce energy costs and environmental impact.\n* **Community Location**: Situated close to shopping centers, parks, public transport, and medical facilities.\n* **Security Features**: Intercom system and secure entry for peace of mind.\n\nThis home provides the perfect balance of independence and support in a vibrant community setting.",
    housemates: {
      age: "No specific preference",
      gender: "No specific preference",
      tenants: 4,
      qualities: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Prefer to spend time to themselves"
      ]
    },
    rent: "25% of your income"
  },
  {
    id: 3,
    location: "Laverton, VIC",
    title: "Stunning Brand-New SIL Home in Laverton",
    description: "This exceptional SIL home features fully furnished bedrooms with kitchenettes, private ensuites, and spacious common areas in Melbourne's vibrant Western suburbs.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80",
      "https://images.unsplash.com/photo-1602028915047-37ea5fe0f444?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&h=700&q=80"
    ],
    features: {
      bedrooms: 5,
      bathrooms: 3,
      toilets: 3,
      standardParking: 4,
      accessibleParking: true,
      bedroomsAvailable: 5
    },
    propertyFeatures: [
      "Heating", "Cooling", "Dishwasher", "Study", "Furnished", 
      "Wheelchair Accessible", "Solar Panels", "Outdoor Area"
    ],
    fullDescription: "Discover this beautifully designed Supported Independent Living (SIL) Home, located in the heart of Melbourne's vibrant Western suburbs. This exceptional home offers:\n\n* **5 Fully Furnished Bedrooms**: Each room features a kitchenette, wardrobe, TV, fridge, and private ensuite, providing a comfortable and independent living experience.\n* **Accessibility Features**: Fully wheelchair accessible, including a separate disability bathroom for added convenience.\n* **Modern Shared Spaces**: A spacious kitchen, laundry, and living areas create a welcoming environment for residents.\n* **Outdoor Bliss**: Enjoy a generous outdoor area perfect for relaxation and recreation.\n* **Ample Parking**: Plenty of on-site parking for visitors and residents.\n\nConveniently located close to shops, parks, and public transport, this property is ideal for those seeking comfort, accessibility, and independence in a supportive environment.",
    housemates: {
      age: "No specific preference",
      gender: "No specific preference",
      tenants: 5,
      qualities: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Prefer to spend time to themselves"
      ]
    },
    rent: "25% of your income"
  }
];

export default housingVacancies; 