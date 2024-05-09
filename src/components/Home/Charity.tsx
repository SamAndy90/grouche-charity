"use client";

import { type Charity } from "types";

import { Container } from "common/UI";

import { CharityList } from "./CharityList";

export function Charity() {
  const charityList: Charity[] = [
    {
      id: "1",
      title: "Charity Initiative Title",
      description:
        "Short description Short description Short description Short description Short description Short description Short description Short description Short description",
      donation_total: 5000,
      donation_current: 1400,
    },
    {
      id: "2",
      title: "Charity Initiative Title",
      description: "Short description",
      donation_total: 50000,
      donation_current: 25000,
    },
    {
      id: "3",
      title: "Charity Initiative Title",
      description: "Short description",
      donation_total: 5000,
      donation_current: 4900,
    },
    {
      id: "4",
      title: "Charity Initiative Title",
      description: "Short description",
      donation_total: 1000,
      donation_current: 680,
    },
    {
      id: "5",
      title: "Charity Initiative Title",
      description: "Short description",
      donation_total: 1000,
      donation_current: 10,
    },
  ];

  return (
    <section className={"my-14"}>
      <Container>
        <CharityList data={charityList} />
      </Container>
    </section>
  );
}
