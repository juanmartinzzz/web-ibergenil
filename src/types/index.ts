export interface FormData {
  postalCode: string;
  name: string;
  phoneNumber: string;
  consentGiven: boolean;
  address: string;
  city: string;
  houseNumber: string;
}

export interface FormErrors {
  postalCode?: string;
  name?: string;
  phoneNumber?: string;
  consentGiven?: string;
  address?: string;
  city?: string;
  houseNumber?: string;
}

export type FormStep = 1 | 2 | 3 | 4;

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  comment: string;
  imageSrc: string;
  rating: number;
}