import Image from "next/image";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import { type Charity } from "types";

import { Progress } from "common/Progress";
import { ButtonBase, Title } from "common/UI";

import { MainUrl } from "route-urls";

export type CharityCardProps = {
  item: Charity;
};

export function CharityCard({ item }: CharityCardProps) {
  const {
    title,
    description,
    donation_collected,
    donation_needed,
    images,
    id,
  } = item;

  return (
    <Link
      href={MainUrl.getCharityDetails(id)}
      className={
        "transform overflow-hidden rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
      }
    >
      <div className={"relative min-h-[110px] bg-astra-100 pb-[43%]"}>
        {images && images?.length > 0 && (
          <Image
            src={images[0]}
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
        <Progress current={donation_collected} total={donation_needed} />
      </div>
    </Link>
  );
}
