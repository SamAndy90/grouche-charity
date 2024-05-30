import { forwardRef, useId, useState } from "react";

import { cn } from "utils/cn";

type BaseProps = {
  label?: string;
  className?: {
    label?: string;
    inputWrapper?: string;
    input?: string;
    wrapper?: string;
  };
  helperText?: string;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type TextInputProps =
  | ({
      multiline?: false;
    } & BaseProps &
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">)
  | ({
      multiline: true;
    } & BaseProps &
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">);

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>((props, ref) => {
  const {
    className,
    helperText,
    error,
    startAdornment,
    endAdornment,
    multiline = false,
    ...inputProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  const Component = multiline ? "textarea" : "input";

  return (
    <div className={cn("flex flex-col gap-y-1", className?.wrapper)}>
      <div
        className={cn(
          "flex flex-nowrap items-center overflow-hidden border",
          {
            "border-a_sky-500": isFocused && !error,
            "border-red-400": error,
            "border-astra-900": !error,
          },
          {
            "rounded-[20px]": multiline,
            "rounded-full": !multiline,
          },
          className?.inputWrapper,
        )}
      >
        {startAdornment && <div className={"pl-3"}>{startAdornment}</div>}

        <Component
          id={id}
          className={cn(
            "block flex-1 bg-astra-900 px-3 py-1.5 text-sm text-white outline-none placeholder:text-sm placeholder:text-astra-700",
            className?.input,
          )}
          // @ts-expect-error ref discrimination error
          ref={ref}
          // @ts-expect-error ref discrimination error
          type={multiline ? undefined : inputProps.type ?? "text"}
          {...{
            ...inputProps,
            onFocus: (e) => {
              // @ts-expect-error ref discrimination error
              inputProps?.onFocus?.(e);
              setIsFocused(true);
            },
            onBlur: (e) => {
              // @ts-expect-error ref discrimination error
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
});

TextInput.displayName = "TextInput";
