import { Charity } from "types";

import IMG1 from "components/static/img1.jpg";
import IMG2 from "components/static/img2.jpg";
import IMG3 from "components/static/img3.jpg";

export const history = [
  {
    id: "1",
    username: "Alex",
    comment: "Comment",
    crypto_type: "ton_coin",
    donation_amount: 1000,
  },
  {
    id: "2",
    username: "John",
    comment:
      "Lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ips",
    crypto_type: "grouche_coin",
    donation_amount: 1200,
  },
  {
    id: "3",
    username: "Bob",
    comment: "Comment lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum",
    crypto_type: "grouche_coin_2",
    donation_amount: 8900,
  },
];

export const charityList: Charity[] = [
  {
    id: "1",
    title: "Charity Initiative Title",
    description:
      "Short description Short description Short description Short description Short description Short description Short description Short description Short description",
    donation_needed: 5000,
    donation_collected: 1400,
    donators_count: 1200,
    images: [IMG1, IMG2, IMG3],
    history,
  },
  {
    id: "2",
    title: "Charity Initiative Title",
    description: "Short description",
    donation_needed: 50000,
    donation_collected: 25000,
    donators_count: 50,
    images: [IMG2, IMG3],
    history: [],
  },
  {
    id: "3",
    title: "Charity Initiative Title",
    description: "Short description",
    donation_needed: 5000,
    donation_collected: 4900,
    donators_count: 1200,
    images: [IMG3],
    history,
  },
  {
    id: "4",
    title: "Charity Initiative Title",
    description: "Short description",
    donation_needed: 1000,
    donation_collected: 680,
    donators_count: 500,
    images: [],
    history: [],
  },
  {
    id: "5",
    title: "Charity Initiative Title",
    description: "Short description",
    donation_needed: 1000,
    donation_collected: 10,
    donators_count: 105,
    images: [IMG1, IMG2, IMG3],
    history,
  },
];
