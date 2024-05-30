"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { z } from "zod";

import { FormRadioGroupInput, FormTextInput } from "common/FormInputs";
import { FormNumberInput } from "common/FormInputs/FormNumberInput";
import { Button, ButtonBase, Title } from "common/UI";

import { cn } from "utils/cn";
import { getDefaults } from "utils/zod";

const DonationSchema = z.object({
  crypto_type: z.string().default("ton_coin"),
  donation_amount: z
    .number({ message: "Value should be a number" })
    .min(1, "Donation can`t be 0")
    .default(100),
  username: z.string().min(1, "Username is required").default(""),
  comment: z.string().default(""),
});

type Form = z.infer<typeof DonationSchema>;

export function DonationForm() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<Form>({
    resolver: zodResolver(DonationSchema),
    defaultValues: getDefaults(DonationSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    form.reset();
    setIsOpen(false);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormRadioGroupInput fieldName={"crypto_type"} />
        <p className={"mb-2 text-xs text-astra-500"}>
          100% of tokens will be returned to your wallet in 365 days
        </p>
        <FormNumberInput
          fieldName={"donation_amount"}
          className={{
            input: "text-center text-base font-bold",
            wrapper: "mb-[18px]",
          }}
        />
        <Button
          onClick={() => setIsOpen(true)}
          className={{ button: "flex w-full flex-col items-center py-3" }}
        >
          <span className={"text-base"}>Donate</span>
          <span className={"text-xs font-normal"}>
            we do not charge any fee
          </span>
        </Button>
        <Transition appear show={isOpen} as={Fragment}>
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
              className={"fixed inset-0 z-[90] bg-astra-950/80"}
              onClick={() => setIsOpen(false)}
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
            <div
              className={`fixed left-1/2 top-1/2 z-[100] max-h-full w-full max-w-[calc(100%-24px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden sm:max-w-[587px]`}
            >
              <div
                className={cn(
                  "relative flex w-full flex-col items-center overflow-hidden rounded-[20px]",
                )}
              >
                <ButtonBase
                  className={{
                    button: "absolute right-[35px] top-[22px] outline-none",
                  }}
                  onClick={() => setIsOpen(false)}
                  startIcon={
                    <FiX
                      className={
                        "size-6 stroke-[3px] transition-colors duration-300 hover:text-turquoise-400"
                      }
                    />
                  }
                />
                <div className={"w-full bg-astra-900 px-4 pb-7 pt-6 md:px-9"}>
                  <Title className={"mb-5 text-lg"}>Additional info</Title>
                  <div className={"mb-6 flex flex-col gap-y-4"}>
                    <FormTextInput
                      className={{ input: "bg-astra-950 px-5 py-3.5" }}
                      fieldName={"username"}
                      placeholder={"Name"}
                    />
                    <FormTextInput
                      multiline
                      fieldName={"comment"}
                      className={{
                        input: "min-h-[114px] bg-astra-950 px-5 py-4",
                      }}
                      placeholder={"Comment"}
                    />
                  </div>
                  <Button
                    type={"submit"}
                    size={"large"}
                    className={{ button: "mx-auto" }}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </TransitionChild>
        </Transition>
      </form>
    </FormProvider>
  );
}
{
  /* <Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  className={{
    content: "w-full",
    contentWrapper: "w-full sm:max-w-[587px]",
  }}
>
  <div className={"w-full bg-astra-900 px-4 pb-7 pt-6 md:px-9"}>
    <Title className={"mb-5 text-lg"}>Additional info</Title>
    <div className={"mb-6 flex flex-col gap-y-4"}>
      <FormTextInput
        className={{ input: "bg-astra-950 px-5 py-3.5" }}
        fieldName={"username"}
        placeholder={"Name"}
      />
      <FormTextInput
        multiline
        fieldName={"comment"}
        className={{ input: "min-h-[114px] bg-astra-950 px-5 py-4" }}
        placeholder={"Comment"}
      />
    </div>
    <Button
      type={"submit"}
      size={"large"}
      className={{ button: "mx-auto" }}
    >
      Donate
    </Button>
  </div>
</Dialog> */
}
