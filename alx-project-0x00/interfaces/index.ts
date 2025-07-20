export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
}

export interface PropertyProps {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  type: string; // e.g. 'Room', 'Mansion', 'Countryside', etc.
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  [key: string]: any; // for any additional dynamic fields
}
