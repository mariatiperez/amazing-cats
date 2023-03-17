export interface Weight {
  imperial: string;
  metric: string;
}

export interface BreedImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Breed {
  id: string;
  name: string;
  image: BreedImage;
  description?: string;
  life_span?: string;
  origin?: string;
  weight?: Weight;
  temperament?: string;
  alt_names?: string;
  affection_level?: number;
  indoor?: number;
  country_codes?: string;
  country_code?: string;
  lap?: number;
  adaptability?: number;
  child_friendly?: number;
  dog_friendly?: number;
  energy_level?: number;
  grooming?: number;
  health_issues?: number;
  intelligence?: number;
  shedding_level?: number;
  social_needs?: number;
  stranger_friendly?: number;
  vocalisation?: number;
  experimental?: number;
  hairless?: number;
  natural?: number;
  rare?: number;
  rex?: number;
  suppressed_tail?: number;
  short_legs?: number;
  hypoallergenic?: number;
  reference_image_id?: string;
}
