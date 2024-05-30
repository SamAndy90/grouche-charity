import { IoIosHeart } from "react-icons/io";

import { Progress } from "common/Progress";
import { ButtonBase, Title } from "common/UI";

export type DescriptionProps = {
  title: string;
  description: string;
  needed: number;
  collected: number;
  donators: number;
};

export function Description({
  collected,
  description,
  donators,
  needed,
  title,
}: DescriptionProps) {
  const donatedPercent = Math.floor((collected / needed) * 100);
  return (
    <div
      className={
        "mb-6 flex flex-col justify-between gap-x-4 gap-y-6 rounded-[20px] bg-astra-900 p-9 md:flex-row md:flex-wrap"
      }
    >
      <div className={"w-full md:max-w-[332px]"}>
        <div className={"mb-3 flex items-center justify-between gap-x-2"}>
          <Title component={"h2"} className={"line-clamp-1 text-2xl"}>
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
        <p className={"line-clamp-5 text-xs"}>{description}</p>
      </div>
      <div className={"w-full md:order-3 lg:order-none lg:max-w-[328px]"}>
        <div className={"mb-3 flex justify-between"}>
          <div>
            <p className={"whitespace-nowrap text-xs"}>total collected</p>
            <span className={"text-2xl font-bold"}>{collected}</span>
          </div>
          <div className={"whitespace-nowrap text-right"}>
            <p className={"text-xs"}>total needed</p>
            <span className={"text-2xl font-bold"}>{needed}</span>
          </div>
        </div>
        <Progress current={collected} total={needed} />
      </div>
      <div
        className={
          "flex justify-between gap-2.5 md:basis-28  md:flex-col md:justify-stretch"
        }
      >
        <div className={"flex items-end gap-2"}>
          <span className={"text-lg font-bold leading-none"}>{donators}</span>
          <p className={"whitespace-nowrap text-xs"}>donators</p>
        </div>
        <div className={"flex items-end gap-2 text-right"}>
          <span className={"text-lg font-bold leading-none"}>
            {donatedPercent}%
          </span>
          <p className={"whitespace-nowrap text-xs"}>donated</p>
        </div>
      </div>
    </div>
  );
}
