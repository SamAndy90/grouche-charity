import { forwardRef, useId, useState } from "react";

import { cn } from "utils/cn";

type BaseProps = {
  className?: {
    inputWrapper?: string;
    input?: string;
    wrapper?: string;
  };
  helperText?: string;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type NumberInputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const {
      className,
      helperText,
      error,
      startAdornment,
      endAdornment,
      ...inputProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const id = useId();

    return (
      <div className={cn("flex flex-col gap-y-1", className?.wrapper)}>
        <div
          className={cn(
            "flex flex-nowrap items-center overflow-hidden rounded-full border",
            {
              "border-a_sky-500": isFocused && !error,
              "border-red-400": error,
              "border-astra-900": !error,
            },
            className?.inputWrapper,
          )}
        >
          {startAdornment && <div className={"pl-3"}>{startAdornment}</div>}

          <input
            id={id}
            className={cn(
              "no-spinner block flex-1 appearance-none bg-astra-900 px-3 py-1.5 text-sm text-white outline-none placeholder:text-sm placeholder:text-astra-700",
              className?.input,
            )}
            ref={ref}
            type={"number"}
            {...{
              ...inputProps,
              onFocus: (e) => {
                inputProps?.onFocus?.(e);
                setIsFocused(true);
              },
              onBlur: (e) => {
                inputProps?.onBlur?.(e);
                setIsFocused(false);
              },
            }}
          />

          {endAdornment && <div className={"pr-3"}>{endAdornment}</div>}
        </div>

        {helperText && (
          <p
            className={cn("text-sm", {
              "text-red-400": error,
              "text-gray-500": !error,
            })}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

NumberInput.displayName = "NumberInput";
