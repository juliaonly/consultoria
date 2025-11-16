export type Metric = {
  label: string;
  value: number;
  description: string;
  unit?: string;
};

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  badge?: string;
};

export type CaseStudy = {
  company: string;
  headline: string;
  description: string;
  result: string;
  tag: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  logo: string;
};
