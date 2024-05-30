import { Radio, RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import GroucheFillIcon from "components/static/icons/grouche-fill.svg";
import GroucheStrokeIcon from "components/static/icons/grouche-stroke.svg";
import TonIcon from "components/static/icons/toncoin.svg";

import { cn } from "utils/cn";

export type RadioGroupInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function RadioGroupInput(props: RadioGroupInputProps) {
  const { value, onChange } = props;

  const options = [
    {
      value: "ton_coin",
      image: TonIcon,
    },
    {
      value: "grouche_coin",
      image: GroucheFillIcon,
    },
    {
      value: "grouche_coin_2",
      image: GroucheStrokeIcon,
    },
  ];

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={"mb-3 flex gap-x-[18px]"}
    >
      {options.map((i) => (
        <Radio key={i.value} as={Fragment} value={i.value}>
          {({ checked }) => (
            <div
              className={cn(
                "flex items-center justify-center rounded-[20px] border border-astra-900 bg-astra-900 p-6 pb-5 transition-colors duration-300 hover:bg-astra-800",
                { "border-a_sky-500": !!checked },
              )}
            >
              <Image src={i.image} alt={"Crypto icon"} />
            </div>
          )}
        </Radio>
      ))}
    </RadioGroup>
  );
}
