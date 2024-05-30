import { Suspense } from "react";

import { Loader } from "common/UI";
import { CharitySection } from "components/Home/CharitySection";
import { IntroductionInfo } from "components/Home/IntroductionInfo";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <CharitySection />
      </Suspense>
      <IntroductionInfo />
    </>
  );
}
