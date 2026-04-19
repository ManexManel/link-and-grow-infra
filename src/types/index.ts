export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  duration?: string;
  bgImage?: string;
}

export interface ArticleCard {
  title: string;
  excerpt?: string;
  image?: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
