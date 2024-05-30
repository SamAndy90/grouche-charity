import { getAxiosDRFErrorMessage } from "utils/axios";

import { Alert } from "./UI";

export type DataFetcherErrorAlertProps = {
  isError?: boolean;
  error: unknown;
  messagePrefix?: string;
};

export function DataFetcherErrorAlert(props: DataFetcherErrorAlertProps) {
  const { isError = true, error, messagePrefix } = props;
  const message = [messagePrefix, getAxiosDRFErrorMessage(error)]
    .filter(Boolean)
    .join(": ");

  if (isError) {
    return <Alert>{message}</Alert>;
  }

  return null;
}
