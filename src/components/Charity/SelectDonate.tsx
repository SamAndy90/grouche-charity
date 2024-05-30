import { Title } from "common/UI";

import { DonationForm } from "./DonationForm";

export function SelectDonate() {
  return (
    <div className={"mx-auto max-w-[298px]"}>
      <Title className={"mb-3 text-lg"}>Select donation type</Title>
      <DonationForm />
    </div>
  );
}
