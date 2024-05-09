import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type IconButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "empty";
} & Omit<ButtonBaseProps<T>, "children" | "endIcon">;

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "empty",
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer justify-center rounded-full transition-colors ease-linear disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          {
            // Empty
            "bg-transparent": colorVariant === "empty",
            "hover:bg-astra-400/10 active:bg-astra-400/20 disabled:hover:bg-transparent":
              colorVariant === "empty" && !loading,
          },
          {
            "size-5 p-1": size === "small",
            "size-6 p-1": size === "normal",
            "size-8 p-1": size === "large",
          },
          className?.button,
        ),

        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    />
  );
}
