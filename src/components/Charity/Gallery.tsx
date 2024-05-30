"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import { Dialog } from "common/UI/Dialog";

import "swiper/css";

export type GalleryProps = {
  images: (string | StaticImageData)[] | [];
};

export function Gallery({ images }: GalleryProps) {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      <div className={"flex min-h-[284px] flex-1 flex-col gap-6 md:flex-row"}>
        <div
          className={
            "relative flex h-full min-h-[284px] items-center justify-center overflow-hidden rounded-[20px] bg-astra-100 md:basis-[52%]"
          }
        >
          {!!images.length ? (
            <Image
              src={images[0]}
              fill
              alt={"Image"}
              className={"object-cover"}
              onClick={() => setIsSliderOpen(true)}
            />
          ) : (
            <IoImageOutline className={"size-8 text-astra-800"} />
          )}
        </div>
        <div className={"hidden min-h-[284px] flex-1 flex-col gap-6 md:flex"}>
          <div
            className={
              "relative flex shrink-0 basis-[39%] items-center justify-center overflow-hidden rounded-[20px] bg-astra-100"
            }
          >
            {images.length > 1 ? (
              <Image
                src={images[1]}
                fill
                alt={"Image"}
                className={"object-cover"}
                onClick={() => setIsSliderOpen(true)}
              />
            ) : (
              <IoImageOutline className={"size-8 text-astra-800"} />
            )}
          </div>
          <div
            className={
              "relative flex flex-1 items-center justify-center overflow-hidden rounded-[20px] bg-astra-100"
            }
          >
            {images.length > 2 ? (
              <Image
                src={images[2]}
                fill
                alt={"Image"}
                className={"object-cover"}
                onClick={() => setIsSliderOpen(true)}
              />
            ) : (
              <IoImageOutline className={"size-8 text-astra-800"} />
            )}
          </div>
        </div>
      </div>

      <Dialog
        open={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
        className={{
          contentWrapper:
            "max-h-[800px] w-full max-w-[calc(100%-24px)] lg:max-w-[800px]",
          xButton: "hidden",
        }}
      >
        <div className={"w-full overflow-hidden"}>
          <Swiper
            className={"text-astra-100"}
            loop
            speed={1000}
            spaceBetween={24}
            slidesPerView={1}
          >
            {images.map((image, Idx) => (
              <SwiperSlide key={Idx}>
                <div className={"mx-auto flex h-full min-h-[60vh]"}>
                  <div
                    className={"relative w-full overflow-hidden rounded-[20px]"}
                  >
                    <Image
                      src={image}
                      fill
                      alt={"Image"}
                      className={"object-cover"}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Dialog>
    </>
  );
}
