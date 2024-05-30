"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Button, ButtonBase, Container } from "common/UI";

import { cn } from "utils/cn";

import { MainUrl } from "route-urls";

import { SearchInput } from "./SearchInput";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 w-full bg-astra-950 shadow-[0_0_20px_rgba(255,255,255,0.03)] md:shadow-none"
      }
    >
      <Container>
        <div className={"flex items-center justify-between gap-x-[52px] py-4"}>
          <Link
            href={MainUrl.getHome()}
            className={
              "border border-astra-900 px-8 py-2.5 text-xs text-astra-400 transition-colors hover:border-astra-400 hover:text-astra-100"
            }
          >
            Astra
          </Link>
          <div className={"hidden flex-1 sm:flex"}>
            <SearchInput />
          </div>
          <div className={"hidden items-center gap-x-9 lg:flex"}>
            <nav className={"flex text-xs font-semibold"}>
              <Link
                href={MainUrl.getAbout()}
                className={cn("rounded-lg px-9 py-1.5 transition-colors", {
                  "hover:bg-astra-400/10": !pathname.includes(
                    MainUrl.getAbout(),
                  ),
                })}
              >
                <span
                  className={cn({
                    "text-gradient-turquoise !bg-gradient-to-tl":
                      pathname.includes(MainUrl.getAbout()),
                  })}
                >
                  About
                </span>
              </Link>
              <Link
                href={MainUrl.getCases()}
                className={cn("rounded-lg px-9 py-1.5 transition-colors", {
                  "hover:bg-astra-400/10": !pathname.includes(
                    MainUrl.getCases(),
                  ),
                })}
              >
                <span
                  className={cn({
                    "text-gradient-turquoise !bg-gradient-to-tl":
                      pathname.includes(MainUrl.getCases()),
                  })}
                >
                  Cases
                </span>
              </Link>
            </nav>
            <Button size={"small"}>Connect Wallet</Button>
          </div>
          <ButtonBase
            onClick={() => setMenuIsOpen(true)}
            title={"Open burger menu"}
            className={{
              button: "transition-colors hover:text-turquoise-400 lg:hidden",
            }}
          >
            <FiMenu className={"size-6"} />
          </ButtonBase>
          <BurgerMenu open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
        </div>
      </Container>
    </header>
  );
}

export const BurgerMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={"ease-out transition"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in transition"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div className={"fixed inset-0 z-[90] bg-astra-950/30"} aria-hidden />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter={"ease-out transition transform duration-500"}
          enterFrom={"translate-x-full"}
          enterTo={"translate-x-0"}
          leave={"ease-in transition transform"}
          leaveFrom={"opacity-100 translate-x-0"}
          leaveTo={"opacity-0 translate-x-full"}
        >
          <DialogPanel
            className={cn(
              "fixed right-0 top-0 z-[100] h-full max-h-full min-w-60 max-w-full overflow-y-auto overflow-x-hidden bg-astra-950 shadow-[0_0_20px_rgba(255,255,255,0.03)]",
            )}
          >
            <div
              className={
                "relative flex flex-col items-center overflow-hidden px-3 py-10"
              }
            >
              <ButtonBase
                className={{
                  button: "absolute right-4 top-5 outline-none",
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
              <div className={"w-full space-y-6 py-4"}>
                <nav className={"flex flex-col gap-y-2 text-center text-xl "}>
                  <Link
                    href={MainUrl.getAbout()}
                    onClick={onClose}
                    className={cn("rounded-md py-1 transition-colors", {
                      "hover:bg-astra-400/10": !pathname.includes(
                        MainUrl.getAbout(),
                      ),
                    })}
                  >
                    <span
                      className={cn({
                        "text-gradient-turquoise !bg-gradient-to-tl":
                          pathname.includes(MainUrl.getAbout()),
                      })}
                    >
                      About
                    </span>
                  </Link>
                  <Link
                    href={MainUrl.getCases()}
                    onClick={onClose}
                    className={cn("rounded-md py-1 transition-colors", {
                      "hover:bg-astra-400/10": !pathname.includes(
                        MainUrl.getCases(),
                      ),
                    })}
                  >
                    <span
                      className={cn({
                        "text-gradient-turquoise !bg-gradient-to-tl":
                          pathname.includes(MainUrl.getCases()),
                      })}
                    >
                      Cases
                    </span>
                  </Link>
                </nav>
                <div className={"h-[1px] rounded-sm bg-astra-400/50"}></div>
                <Button
                  onClick={() => {
                    onClose();
                  }}
                  className={{ button: "mx-auto" }}
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};
