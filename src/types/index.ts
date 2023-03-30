import { Attributes, MouseEventHandler } from "react";
import { z } from "zod";

// Component Props

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
}

export interface IconButtonProps {
  name: string;
  className?: string;
  title?: string;
  dataTestId?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface CardProps {
  id: Attributes["key"];
  breedId?: Breed["id"];
  imageId?: BreedImage["id"];
  name?: string;
  description?: string;
  image?: BreedImage;
}

// Data interfaces

export const BreedWeightSchema = z.object({
  imperial: z.string(),
  metric: z.string(),
});

export const BreedImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const BreedSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: BreedImageSchema.optional(),
  description: z.string(),
  life_span: z.string().optional(),
  origin: z.string().optional(),
  weight: BreedWeightSchema.optional(),
  temperament: z.string().optional(),
  alt_names: z.string().optional(),
  affection_level: z.number().optional(),
  indoor: z.number().optional(),
  country_codes: z.string().optional(),
  country_code: z.string().optional(),
  lap: z.number().optional(),
  adaptability: z.number().optional(),
  child_friendly: z.number().optional(),
  dog_friendly: z.number().optional(),
  energy_level: z.number().optional(),
  grooming: z.number().optional(),
  health_issues: z.number().optional(),
  intelligence: z.number().optional(),
  shedding_level: z.number().optional(),
  social_needs: z.number().optional(),
  stranger_friendly: z.number().optional(),
  vocalisation: z.number().optional(),
  experimental: z.number().optional(),
  hairless: z.number().optional(),
  natural: z.number().optional(),
  rare: z.number().optional(),
  rex: z.number().optional(),
  suppressed_tail: z.number().optional(),
  short_legs: z.number().optional(),
  hypoallergenic: z.number().optional(),
  reference_image_id: z.string().optional(),
});

export const FavoriteSchema = z.object({
  id: z.number(),
  image_id: z.string(),
  created_at: z.string().optional(),
  image: BreedImageSchema,
});

export type Breed = z.infer<typeof BreedSchema>;
export type BreedImage = z.infer<typeof BreedImageSchema>;
export type Favorite = z.infer<typeof FavoriteSchema>;
