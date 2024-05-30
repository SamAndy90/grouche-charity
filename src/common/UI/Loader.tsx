import { CgSpinnerTwo } from "react-icons/cg";

import { cn } from "utils/cn";

export type LoaderProps = {
  className?: {
    wrapper?: string;
    icon?: string;
  };
};

export function Loader(props: LoaderProps) {
  const { className = {} } = props;
  const { wrapper: wrapperClassName = "", icon: iconClassName = "" } =
    className;

  return (
    <div className={cn("flex items-center justify-center", wrapperClassName)}>
      <CgSpinnerTwo
        className={cn("h-12 w-12 animate-spin text-astra-100", iconClassName)}
      />
    </div>
  );
}
