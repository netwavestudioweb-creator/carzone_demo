export interface Car {
  id: string;
  brand: string;
  model: string;
  category: string; // "SUV", "Berline", "Citadine", "4x4", "Monospace", "Luxe", etc.
  engine: string; // "Électrique", "Hybride", "Thermique"
  price?: string;
  image: string;
  features?: string[];
}
