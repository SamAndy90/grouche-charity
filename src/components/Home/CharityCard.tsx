import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { type Charity } from "types";

import { ButtonBase, Title } from "common/UI";

import { MainUrl } from "route-urls";

export type CharityCardProps = {
  item: Charity;
};

export function CharityCard({ item }: CharityCardProps) {
  const { title, description, donation_total, donation_current, image, id } =
    item;

  return (
    <Link
      href={MainUrl.getCharityDetails(id)}
      className={"overflow-hidden rounded-[20px]"}
    >
      <div className={"relative min-h-[110px] bg-astra-100 pb-[43%]"}>
        {image && (
          <Image
            src={image}
            alt={"Charity image"}
            fill
            className={"object-cover"}
          />
        )}
      </div>
      <div className={"bg-astra-900 px-5 pb-8 pt-4"}>
        <div className={"flex items-start justify-between"}>
          <Title component={"h3"} className={"mb-2.5 text-sm"}>
            {title}
          </Title>
          <ButtonBase
            startIcon={
              <IoIosHeart
                className={
                  "size-5 text-a_red-500 transition-colors hover:text-a_red-600"
                }
              />
            }
          />
        </div>
        <p className={"mb-3 line-clamp-3 min-h-12 text-xs"}>{description}</p>
        <Progress current={donation_current} total={donation_total} />
      </div>
    </Link>
  );
}

export const Progress = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((current / total) * 100);
  }, [total, current]);

  return (
    <div className={"h-1.5 w-full overflow-hidden rounded-full bg-astra-950"}>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-gradient-turquoise h-full rounded-full transition-[width] duration-500`}
      ></div>
    </div>
  );
};
