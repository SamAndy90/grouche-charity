import { Suspense } from "react";

import { Charity } from "components/Home/Charity";

export default function Home() {
  return (
    <Suspense>
      <Charity />
    </Suspense>
  );
}
