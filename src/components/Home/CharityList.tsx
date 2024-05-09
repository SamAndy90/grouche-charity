import { type Charity } from "types";

import { CharityCard } from "./CharityCard";

export type CharityListProps = {
  data: Charity[];
};

export function CharityList({ data }: CharityListProps) {
  return (
    <div
      className={
        "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }
    >
      {data.map((i) => (
        <CharityCard item={i} key={i.id} />
      ))}
    </div>
  );
}
