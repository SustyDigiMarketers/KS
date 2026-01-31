export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefitList: string[];
  ctaText: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  title: string;
  specs: string;
  category: string;
}

export interface ClientItem {
  id: string;
  name: string;
  project: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}