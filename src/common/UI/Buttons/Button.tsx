import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type ButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "primary" | "secondary";
  fullWidth?: boolean;
} & ButtonBaseProps<T>;

export function Button<T>(props: ButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "primary",
    fullWidth = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer justify-center rounded-lg text-center text-sm font-bold transition-colors ease-linear disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          {
            // Primary
            "bg-a_sky-500 text-white": colorVariant === "primary",
            "hover:bg-a_sky-600 active:bg-a_sky-500 disabled:hover:bg-a_sky-500":
              colorVariant === "primary" && !loading,
          },
          {
            "w-full": fullWidth,
            "px-[22px] py-1.5 text-xs": size === "small",
            "px-6 py-2": size === "normal",
            "px-10 py-2.5 text-base": size === "large",
          },
          className?.button,
        ),

        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  );
}
