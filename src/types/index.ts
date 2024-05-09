import { StaticImageData } from "next/image";

export type Charity = {
  id: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  donation_total: number;
  donation_current: number;
};
