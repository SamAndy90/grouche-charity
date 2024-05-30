import Image, { StaticImageData } from "next/image";
import { type DonationHistory } from "types";

import { Title } from "common/UI";
import GroucheFillIcon from "components/static/icons/grouche-fill.svg";
import GroucheStrokeIcon from "components/static/icons/grouche-stroke.svg";
import TonIcon from "components/static/icons/toncoin.svg";

function showCryptoIcon(crypto_type: string): StaticImageData {
  switch (crypto_type) {
    case "ton_coin": {
      return TonIcon;
    }
    case "grouche_coin": {
      return GroucheFillIcon;
    }
    case "grouche_coin_2": {
      return GroucheStrokeIcon;
    }
    default: {
      return TonIcon;
    }
  }
}

export type DonationHistoryProps = {
  history: DonationHistory[];
};

export function DonationHistory({ history }: DonationHistoryProps) {
  return (
    <div>
      <Title className={"mb-5 ml-3 text-sm"}>Donation history</Title>
      <ul
        className={
          "flex max-h-96 flex-col gap-y-4 overflow-y-auto md:max-w-[61%]"
        }
      >
        {history.length > 0 ? (
          history.map((donate) => {
            const { id, crypto_type, donation_amount, username, comment } =
              donate;

            return (
              <li
                key={id}
                className={
                  "flex items-center justify-between gap-x-5 rounded-[20px] bg-astra-900 py-6 pl-8 pr-6"
                }
              >
                <div className={"flex flex-col gap-y-2 text-xs"}>
                  <div>{username}</div>
                  <p>{comment}</p>
                </div>
                <div className={"flex shrink-0 basis-20 items-center gap-x-2"}>
                  <Image
                    src={showCryptoIcon(crypto_type)}
                    alt={"Crypto icon"}
                    className={"size-6"}
                  />
                  <span className={"text-lg font-bold"}>{donation_amount}</span>
                </div>
              </li>
            );
          })
        ) : (
          <li className={"rounded-[20px] bg-astra-900 py-6 pl-8 pr-6"}>
            We will be glad of your donation
          </li>
        )}
      </ul>
    </div>
  );
}
