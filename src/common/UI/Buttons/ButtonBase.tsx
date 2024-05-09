import { ButtonHTMLAttributes } from "react";
import { ImSpinner9 } from "react-icons/im";

import { cn } from "utils/cn";

export type ButtonBaseProps<T> = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: {
    button?: string;
    loadingIcon?: string;
  };
  loading?: boolean;
  component?: React.ElementType;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  T;

export function ButtonBase<T>(props: ButtonBaseProps<T>) {
  const {
    children,
    startIcon,
    endIcon,
    type = "button",
    onClick,
    loading = false,
    disabled = false,
    className,
    component: Component = "button",
    ...restProps
  } = props;

  return (
    <Component
      type={Component === "button" ? type : undefined}
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        "flex items-center justify-start gap-x-2",
        className?.button,
      )}
      {...restProps}
    >
      {startIcon && loading ? (
        <LoadingIcon className={className?.loadingIcon} />
      ) : (
        startIcon
      )}

      {!startIcon && !endIcon && loading ? (
        <span className={"relative"}>
          <span
            className={
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          >
            <LoadingIcon className={className?.loadingIcon} />
          </span>
          <span className={"opacity-0"}>{children}</span>
        </span>
      ) : (
        children
      )}

      {endIcon && loading ? (
        <LoadingIcon className={className?.loadingIcon} />
      ) : (
        endIcon
      )}
    </Component>
  );
}

type LoadingIconProps = {
  className?: string;
};

function LoadingIcon(props: LoadingIconProps) {
  const { className } = props;
  return <ImSpinner9 className={cn("size-4 animate-spin", className)} />;
}
