export type ServiceCategory = 
  | 'construction'
  | 'design'
  | 'renovation'
  | 'consulting'
  | 'specialized';

export interface ConstructionService {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  highlights: string[];
  features: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Interior';
  description: string;
  image: string;
  location: string;
  area: string;
  duration: string;
  highlights: string[];
  testimonial?: {
    text: string;
    author: string;
  };
}

export interface GoogleReview {
  id: string;
  author: string;
  avatar: string;
  rating: number; // 5.0
  text: string;
  relativeTime: string;
  avatarBg: string;
}

export interface PredesignedFloorPlan {
  id: string;
  title: string;
  sizeSqFt: number;
  dimensions: string; // e.g. "30' x 40'"
  bhk: string; // "3 BHK"
  floors: number;
  description: string;
  image: string;
  estimatedCostRange: string;
  rooms: string[];
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface EstimationConfig {
  type: 'Residential' | 'Commercial' | 'Interior';
  bhk?: string;
  areaSqFt: number;
  qualityClass: 'Standard' | 'Premium' | 'Luxury';
}
