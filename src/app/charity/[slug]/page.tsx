import { getCharity } from "data-fetchers/catalog";
import { client } from "data-fetchers/client";

import { DataFetcherErrorAlert } from "common/DataFetcherErrorAlert";
import { Container } from "common/UI";
import { Description } from "components/Charity/Description";
import { DonationHistory } from "components/Charity/DonationHistory";
import { Gallery } from "components/Charity/Gallery";
import { SelectDonate } from "components/Charity/SelectDonate";

import { fetcherAsyncRunner } from "utils/data-fetchers";

export default async function CharityPage({
  params,
}: {
  params: { slug: string };
}) {
  const [charity, err] = await fetcherAsyncRunner(() =>
    getCharity(client, params.slug),
  );

  if (err) {
    return (
      <section className={"p-10"}>
        <Container>
          <DataFetcherErrorAlert error={err} />
        </Container>
      </section>
    );
  }

  // const char = charityList.find((c) => c.id === params.slug);

  const {
    description,
    donation_collected,
    donation_needed,
    donators_count,
    title,
    history,
    images,
  } = charity;

  return (
    <section className={"py-10"}>
      <Container>
        <div
          className={
            "mb-[30px] flex flex-col gap-6 sm:flex-row sm:justify-between"
          }
        >
          <Gallery images={images} />
          <SelectDonate />
        </div>
        <Description
          title={title}
          description={description}
          collected={donation_collected}
          donators={donators_count}
          needed={donation_needed}
        />
        <DonationHistory history={history} />
      </Container>
    </section>
  );
}
