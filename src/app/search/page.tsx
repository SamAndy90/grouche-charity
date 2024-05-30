import { getCharityList } from "data-fetchers/catalog";
import { client } from "data-fetchers/client";
import { Metadata } from "next";
import { Suspense } from "react";

import { DataFetcherErrorAlert } from "common/DataFetcherErrorAlert";
import { Container, Loader } from "common/UI";
import { CharityList } from "components/Home/CharityList";

import { fetcherAsyncRunner } from "utils/data-fetchers";
import { SearchParams } from "types";

export const metadata: Metadata = {
  title: "Search Charity and donate",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <section className={"pb-5.5 pt-14"}>
      <Container>
        <Suspense fallback={<Loader />}>
          <Results searchParams={searchParams} />
        </Suspense>
      </Container>
    </section>
  );
}

async function Results({ searchParams }: { searchParams: SearchParams }) {
  const { query } = searchParams;

  const [charityList, err] = await fetcherAsyncRunner(() =>
    getCharityList(client, {
      params: {
        search: query,
      },
    }),
  );

  if (err) {
    return <DataFetcherErrorAlert error={err} />;
  }

  return <CharityList data={charityList} />;
}
