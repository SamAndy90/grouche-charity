"use client";

import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  );
}
