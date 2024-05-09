import {
  DialogPanel,
  Dialog as HuiDialog,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";

import { ButtonBase } from "common/UI";

import { cn } from "utils/cn";

export type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: {
    overlay?: string;
    contentWrapper?: string;
    content?: string;
  };
};

export function Dialog(props: DialogProps) {
  const {
    open = false,
    onClose = () => {
      console.warn("Close dialog not implemented");
    },
    children,
    className,
  } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <HuiDialog onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={"ease-out transition duration-300"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in transition duration-200"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div
            className={cn(
              "fixed inset-0 z-[90] bg-astra-950/30",
              className?.overlay,
            )}
            aria-hidden
          />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter={"ease-out transition transform duration-300"}
          enterFrom={"opacity-0 scale-90"}
          enterTo={"opacity-100 scale-100"}
          leave={"ease-in transition transform duration-200"}
          leaveFrom={"opacity-100 scale-100"}
          leaveTo={"opacity-0 scale-90"}
        >
          <DialogPanel
            className={cn(
              `fixed left-1/2 top-1/2 z-[100] max-h-full max-w-[calc(100%-24px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden`,
              className?.contentWrapper,
            )}
          >
            <div
              className={cn(
                "relative flex flex-col items-center overflow-hidden rounded-[20px]",
                className?.content,
              )}
            >
              <ButtonBase
                className={{
                  button: "absolute right-4 top-3 outline-none",
                }}
                onClick={onClose}
                startIcon={
                  <FiX
                    className={
                      "size-5 transition-colors duration-300 hover:text-turquoise-400"
                    }
                  />
                }
              />

              {children}
            </div>
          </DialogPanel>
        </TransitionChild>
      </HuiDialog>
    </Transition>
  );
}
