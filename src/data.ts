import { ConstructionService, PortfolioProject, GoogleReview, PredesignedFloorPlan } from './types';

// Precise generated image paths from our context
export const PORTFOLIO_IMAGES = {
  villa: '/src/assets/images/residential_villa_1780063717789.png',
  interior: '/src/assets/images/interior_living_1780063736952.png',
  commercial: '/src/assets/images/commercial_office_1780063755688.png',
  floorPlan: '/src/assets/images/house_floor_plan_1780063778739.png'
};

export const COMPANY_CONTACT = {
  phone: '+919738802213',
  phoneDisplay: '+91 97388 02213',
  whatsappUrl: 'https://wa.me/919738802213',
  instagramUrl: 'https://www.instagram.com/aakruthiconstructions.dvg/',
  facebookUrl: 'https://www.facebook.com/people/Aakruthi-Construction/100063462947477/', // direct profile
  youtubeUrl: 'https://youtube.com/@Aakruthiconstructions?si=LwcQw7vzgMtZ8UrP',
  justdialUrl: 'https://www.justdial.com/Davangere/Aakruthi-Constructions-Opposite-Ayyappa-Swamy-Temple-Mcc-A-Block/9999P8192.8192.181023192452.L4F9_BZDET',
  address: 'BIET Rd, near Ayyappa Swamy Temple, MCC, Davangere, Karnataka 577004',
  landmark: 'Near Ayyappa Swamy Temple, MCC, Davangere',
  email: 'aakruthiconstructions.dvg@gmail.com',
  workingHours: [
    { days: 'Monday - Saturday', time: '9:30 AM - 8:00 PM' },
    { days: 'Sunday', time: 'Closed (Prior Appointments Only)' }
  ],
  foundedYear: '2016'
};

export const SERVICES: ConstructionService[] = [
  {
    id: 'residential-builder',
    title: 'Consultation & Constructions',
    category: 'construction',
    shortDescription: 'Custom, state-of-the-art house planning and strong, high-durability residential building construction.',
    detailedDescription: 'From single villas to high-rise duplexes, we provide complete engineering and construction solutions. We secure municipal approvals, carry out structural design, and manage the full brick-and-mortar execution with daily engineering supervision.',
    iconName: 'Home',
    highlights: [
      'Earthquake-resistant RCC structural frames',
      'Structural and civil engineering consultation',
      'Continuous on-site supervision by senior engineers',
      'Vastu-compliant architectural layouts'
    ],
    features: [
      { label: 'Project Span', value: 'Residential & Apartments' },
      { label: 'Supervision', value: 'Daily Site Audit' },
      { label: 'Vastu Alignment', value: '100% Complaint Option' },
      { label: 'Permit & Approvals', value: 'Full assistance included' }
    ]
  },
  {
    id: 'exterior-design',
    title: 'Exterior Design Services',
    category: 'design',
    shortDescription: 'Fascinating modern elevations and high-end exterior architectural treatments.',
    detailedDescription: 'Enhance your building’s curb appeal with beautiful exterior designs. We combine contemporary materials, ACP cladding, textured paints, high-end louvers, and functional lighting to craft visually striking elevations that stand out in Davangere.',
    iconName: 'Paintbrush',
    highlights: [
      '3D photo-realistic elevation mockups before construction',
      'Modern glass facades, ACP sheet cladding, and vertical louvers',
      'Weather-resistant paint applications and high-quality stone cladding',
      'Strategic architectural cladding and exterior highlight lighting'
    ],
    features: [
      { label: 'Deliverables', value: '3D Views & CAD Elevations' },
      { label: 'Aesthetics', value: 'Contemporary / Traditional' },
      { label: 'Durability', value: 'High Weather Protection' },
      { label: 'Project Review', value: '2 Iterations included' }
    ]
  },
  {
    id: 'interior-design',
    title: 'Interior Design & Modular Kitchens',
    category: 'design',
    shortDescription: 'Luxury spatial interior design, personalized wardrobes, and highly efficient modular kitchens.',
    detailedDescription: 'Transforming interior spaces into masterpiece environments. We design customized false ceilings, sleek space-saving modular wardrobes, luxurious high-gloss acrylic kitchens, TV consoles, and gorgeous dynamic dining units aligned with your lifestyle.',
    iconName: 'LayoutGrid',
    highlights: [
      'Highly customized Marine-ply cabinets with soft-close hinges',
      'Aesthetic False Ceiling designs with energy-efficient LED profiles',
      'Stunning designer partition units and space dividers',
      'End-to-end bespoke furniture fabrication'
    ],
    features: [
      { label: 'Materials', value: 'BWP Marine Ply (Waterproof)' },
      { label: 'Warranty', value: 'Up to 10 Year Hardware Warranty' },
      { label: 'Customization', value: '100% Personalized Config' },
      { label: 'Project Timeline', value: '35 - 45 Business Days' }
    ]
  },
  {
    id: 'home-renovations',
    title: 'Home Renovations & Demolitions',
    category: 'renovation',
    shortDescription: 'Redesign, remodel, structural repairing, and safe, controlled home demolition.',
    detailedDescription: 'Whether planning a kitchen remodel, upgrading old bathrooms, adding a new floor, or fully replacing an old facade, we handle it all. We ensure zero architectural stability failure and execute safe demolition for old structures with zero nearby damage.',
    iconName: 'Hammer',
    highlights: [
      'Safe and structured demolition with industrial security nets',
      'Upgrading plumbing, electrical work, and high-quality flooring',
      'Structural restorations and columns reinforcement',
      'Converting existing traditional homes into modern open-floor gems'
    ],
    features: [
      { label: 'Demolition Tools', value: 'Controlled Engineering' },
      { label: 'Safety Measures', value: 'Insurance & Protection Shields' },
      { label: 'Floor Extensions', value: 'Column Loading Audit' },
      { label: 'Trash Disposal', value: 'Eco-friendly clearance' }
    ]
  },
  {
    id: 'floor-plans',
    title: 'Predesigned Floor Plans & Blueprints',
    category: 'design',
    shortDescription: 'Ready-to-use smart house plans optimized for popular plot sizes in Karnataka.',
    detailedDescription: 'Find stunning architectural floor plans ready for immediate constructibility. Optimized for spacing, air flow, natural light, and strict Vastu guidelines. Suitable for site dimensions like 30x40, 40x60, 50x80 feet.',
    iconName: 'Columns4',
    highlights: [
      'Optimized ventilation & cross circular layouts',
      'Vastu-aligned bedrooms, puja rooms, and kitchens',
      'Ready engineering blueprints with electrical + plumbing layouts',
      'Affordable customizations available for existing layouts'
    ],
    features: [
      { label: 'Plot Sizes', value: '30x40, 40x60, Built to custom' },
      { label: 'Alignments', value: 'Vastu & Ventilation Optimized' },
      { label: 'Formats', value: 'PDF, DWG, and 3D Visualizer' },
      { label: 'Customizable', value: 'Fully Adjustable' }
    ]
  },
  {
    id: 'waterproofing-roofs',
    title: 'Waterproofing & Roof Building',
    category: 'specialized',
    shortDescription: 'Heavy-duty wall/terrace waterproofing and professional metal/tile roof trusses.',
    detailedDescription: 'Uncompromising leakage-free assurances. We specialize in advanced multi-layer liquid waterproofing and crystalline systems in newly built commercial and residential terraces, and custom metal roof truss fabrication with high-quality tile coverings.',
    iconName: 'ShieldAlert',
    highlights: [
      '5 to 10 year leak-proof guarantee certificate',
      'Advanced elastomeric and polyurethane membrane treatments',
      'Structural metal fabrication for elegant sloped roofs',
      'Basement pressure waterproofing and bathroom tile-joint treatments'
    ],
    features: [
      { label: 'Service Guarantee', value: 'Certified Proof Certificate' },
      { label: 'Truss Material', value: 'A-Grade Tata Structural Steel' },
      { label: 'Coating layers', value: '4-layer Protective Coating' },
      { label: 'Area Covered', value: 'Terrace, Sump, Basements, Bathrooms' }
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'The Classic Duplex',
    category: 'Residential',
    description: 'An elegant super-luxury custom 4BHK duplex constructed on a 30x40 plot with smart spaces and gorgeous modern cladding.',
    image: PORTFOLIO_IMAGES.villa,
    location: 'MCC B-Block, Davangere',
    area: '2,800 Sq.Ft.',
    duration: '11 Months',
    highlights: [
      'Double height ceiling in Living Room',
      'Vastu compliant East-facing entrance',
      'Custom stone cladding on the front elevation',
      'Sleek floating staircase with glass railing'
    ],
    testimonial: {
      text: "Aakruthi Constructions delivered our dream duplex exactly as promised. The elevation drawing matches the actual construction perfectly. Excellent finisher!",
      author: 'Manjunath S., MCC Davangere'
    }
  },
  {
    id: 'p2',
    title: 'Warm Wooden Serenity Interior',
    category: 'Interior',
    description: 'Custom premium carpentry, elegant false ceiling, modular kitchens, and customized warm LED ambient lighting for a luxury flat.',
    image: PORTFOLIO_IMAGES.interior,
    location: 'Vidyanagar, Davangere',
    area: '1,750 Sq.Ft.',
    duration: '45 Days',
    highlights: [
      'Italian marble flooring seamlessly synced with wooden wall boards',
      'Custom BWP plywood modular kitchen under 10-year warranty',
      'Sophisticated hidden LED linear lights and warm spotlights',
      'Aesthetic customized Pooja Mandir with fine CNC-cut jaali work'
    ],
    testimonial: {
      text: "Superb interior decorators! Right from selecting colors to completing modular wardrobes, their team was highly knowledgeable and customer friendly.",
      author: 'Anitha Gowda, Vidyanagar'
    }
  },
  {
    id: 'p3',
    title: 'Aakruthi Landmark Office Complex',
    category: 'Commercial',
    description: 'A modern state-of-the-art commercial shopping and corporate office structure prioritizing load-bearing glass facade and structural life.',
    image: PORTFOLIO_IMAGES.commercial,
    location: 'BIET Road, Davangere',
    area: '8,400 Sq.Ft.',
    duration: '16 Months',
    highlights: [
      'Full glass curtain walls for modern natural illumination',
      'Rigorous foundation structural piling for multi-storey stability',
      'Integrated fire-safety plumbing & waterproofing systems',
      'Ample underground cellar parking and multi-entry corridors'
    ],
    testimonial: {
      text: "They managed the complete engineering consulting and billing transparency. High quality and speed. Best builder in Davangere.",
      author: 'Vijay Kumar, Business Owner'
    }
  }
];

export const PREDESIGNED_FLOOR_PLANS: PredesignedFloorPlan[] = [
  {
    id: 'fp1',
    title: 'Aakruthi Elite 30x40 Duplex Plan',
    sizeSqFt: 1200,
    dimensions: "30' x 40'",
    bhk: '3 BHK',
    floors: 2,
    description: 'Our most popular design in Davangere, featuring a beautiful spatial division with separate car parking, private puja room, and dynamic double balconies.',
    image: PORTFOLIO_IMAGES.floorPlan,
    estimatedCostRange: '₹22 Lakhs - ₹26 Lakhs (depends on finish materials)',
    rooms: [
      'Living Room (Ground Floor)',
      'Modular Kitchen & Dining',
      '3 Master Bedrooms with Attach Bathrooms',
      'Puja Room & Util Area',
      'Spacious Front Balcony & Private Terrace'
    ]
  },
  {
    id: 'fp2',
    title: 'Aakruthi Heritage 40x60 Modern Plan',
    sizeSqFt: 2400,
    dimensions: "40' x 60'",
    bhk: '4 BHK Duplex',
    floors: 2,
    description: 'A royal and spacious family villa plan featuring a double-height central courtyard, home theater space, multi-vehicle parking, and dynamic private garden areas.',
    image: PORTFOLIO_IMAGES.villa, // fallback/styled
    estimatedCostRange: '₹45 Lakhs - ₹52 Lakhs (premium finish)',
    rooms: [
      'Grand Double-Height Entrance Lobby',
      'Massive 4 Master Bedrooms',
      'Integrated Modular Kitchen with Wet Pantry',
      'Soundproofed Home Theater Room',
      'Double Car Port + Extended Front Lawn',
      '3 Open-to-Sky Terraces'
    ]
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev1',
    author: 'Sunil Kumar D.',
    avatar: 'S',
    rating: 5,
    text: 'Super fantastic mind blowing ✨. Aakruthi Constructions builds structures that are top tier. They completed my home construction on BIET road, and the finish is highly professional.',
    relativeTime: '2 weeks ago',
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'rev2',
    author: 'Kiran Gowda',
    avatar: 'K',
    rating: 5,
    text: 'Good response for customer and well informer and excellent work finisher. They gave me a detailed digital estimation with clear breakdown of cement, sand, steel and wood before we signed.',
    relativeTime: '1 month ago',
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'rev3',
    author: 'Ravi Teja S',
    avatar: 'R',
    rating: 5,
    text: 'Good quality workers and Good interior designers. Their tile work was absolute masterclass. Not even a single air bubble. Our Pooja room wood carvings came out incredibly detailed. Kudos to the design team!',
    relativeTime: '2 months ago',
    avatarBg: 'bg-amber-600'
  },
  {
    id: 'rev4',
    author: 'Deepa H. S.',
    avatar: 'D',
    rating: 5,
    text: 'I requested Aakruthi Constructions for our kitchen renovation and tiling work. The workers were very neat and disciplined. Cleaned up every day. Highly recommended home builders in Davangere area.',
    relativeTime: '3 months ago',
    avatarBg: 'bg-purple-600'
  },
  {
    id: 'rev5',
    author: 'Nirmala Ramesh',
    avatar: 'N',
    rating: 5,
    text: 'Wonderful waterproofing service! Our old concrete roof suffered from major rainwater leakage. They did a chemical polymer coating with tiling and it is 100% dry now during high heavy rains.',
    relativeTime: '5 months ago',
    avatarBg: 'bg-rose-600'
  }
];

export const WHY_US_REASONS = [
  {
    title: '5.0-Star Trust Ratings',
    description: 'Consistently rated 5.0 on Google Maps with over 103+ genuine consumer reviews and 116+ reviews on JustDial.',
    metric: '5.0 Rating'
  },
  {
    title: 'Detailed Civil Engineering Estimates',
    description: 'We do not deal in assumptions. We provide itemized, market-calibrated estimations outlining cement bags, brand of steel, and sand volume.',
    metric: '100% Transparent'
  },
  {
    title: 'Strict Vastu Conformity',
    description: 'We integrate ancient Vedic architecture directions with modern air-ventilation science to guarantee a peaceful, healthy home.',
    metric: 'Vastu Experts'
  },
  {
    title: 'State-Of-The-Art Interior Carpenters',
    description: 'Our in-house design factory creates highly resilient modular kitchens, false ceilings, and heavy-duty waterproofing.',
    metric: 'Premium Materials'
  },
  {
    title: 'Strict Timeline Milestones',
    description: 'Delayed custom handovers attract compensation. We operate using strict target timelines mapped dynamically in agreements.',
    metric: 'On-Time Handovers'
  },
  {
    title: 'Local Presence & Care',
    description: 'Conveniently situated MCC near Ayyappa Swamy Temple, Davangere. We are immediately available for face-to-face assistance.',
    metric: 'Davangere Local'
  }
];

export const MOCK_PROJECT_FAQ = [
  {
    q: 'Where is Aakruthi Constructions physical office located?',
    a: 'We are situated on BIET Road, MCC, Davangere – directly adjacent/near the popular Ayyappa Swamy Temple, Karnataka 577004. You can easily find us on Google Maps.'
  },
  {
    q: 'What building services do you offer?',
    a: 'We provide end-to-end services: land leveling, structural drawings, municipal approval layouts, custom home constructions, complex commercial buildings, exterior cladding, custom modular kitchens, wardrobe carpentry, waterproofing, and controlled demolition of old structures.'
  },
  {
    q: 'Do you design customized floor plans?',
    a: 'Yes, we provide fully-customized 2D blueprints & 3D elevations. We also have predesigned structural layouts for standard plot dimensions in Davangere like 30x40 and 40x60 feet, which save design time.'
  },
  {
    q: 'How does your contact form redirection work?',
    a: 'When you fill out the contact form on this website, it automatically structures your service needs, site size, budget, and name, and generates a pre-formatted message. If you select "Continue via WhatsApp", it directly triggers WhatsApp to chat/send the data to our main company number, '+COMPANY_CONTACT.phoneDisplay+', so our structural engineers can respond immediately!'
  },
  {
    q: 'Is waterproofing standard for your home constructions?',
    a: 'Yes. All roofs, bathroom tiles, and underground sumps constructed by Aakruthi Constructions undergo a multi-layer elastomeric waterproofing treatment backed by our leakage-free assurance.'
  }
];
