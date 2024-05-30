import { StaticImageData } from "next/image";

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type DonationHistory = {
  id: string | number;
  username: string;
  comment?: string;
  crypto_type: string;
  donation_amount: number;
};

export type Charity = {
  id: string;
  title: string;
  description: string;
  images: (string | StaticImageData)[] | [];
  donation_needed: number;
  donation_collected: number;
  donators_count: number;
  history: DonationHistory[];
};
