import Image from "next/image";

import { Container, Title } from "common/UI";

import Logo from "./static/grouche.svg";

export function IntroductionInfo() {
  return (
    <section>
      <Container>
        <div
          className={"relative flex min-h-[480px] items-center justify-center"}
        >
          <div className={"relative z-10 max-w-[600px] text-center"}>
            <Title className={"mb-3 text-4xl"}>Grouche Charity</Title>
            <p className={"text-[15px]"}>
              Some description goes here about platform and some info. Lorem
              ipsum
            </p>
          </div>
          <Image
            src={Logo}
            alt={"Logo Grouche"}
            className={
              "absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none"
            }
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
