// import { getCharityList } from "data-fetchers/catalog";
// import { client } from "data-fetchers/client";
// import { DataFetcherErrorAlert } from "common/DataFetcherErrorAlert";
import { charityList } from "data";

import { Container } from "common/UI";

// import { fetcherAsyncRunner } from "utils/data-fetchers";
import { CharityList } from "./CharityList";

export async function CharitySection() {
  // const [charityList, err] = await fetcherAsyncRunner(() =>
  //   getCharityList(client),
  // );

  // if (err) {
  //   return (
  //     <section className={"pb-5.5 pt-14"}>
  //       <Container>
  //         <DataFetcherErrorAlert error={err} />
  //       </Container>
  //     </section>
  //   );
  // }

  return (
    <section className={"pb-5.5 pt-14"}>
      <Container>
        <CharityList data={charityList} />
      </Container>
    </section>
  );
}
