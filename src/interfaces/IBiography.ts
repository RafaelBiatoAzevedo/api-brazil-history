type TTypeBiography = "republic" | "empire" | "others";
type TTypeProduction = "book" | "magazine" | "thesis" | "dissertation";

export interface IBiography {
  _id: string;
  year: string;
  title: string;
  typeBiography: TTypeBiography;
  typeProduction: TTypeProduction;
  nameProduction?: string;
  nameAuthor?: string;
  lastNameAuthor?: string;
  organizers?: string[];
  country: string;
  local: string;
  link?: string;
}
