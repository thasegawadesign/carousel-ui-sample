"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ImageList = {
  src: string;
  width?: number;
  height?: number;
  cardLink: string;
  tagName: string;
};

export default function Home() {
  const images: ImageList[] = [
    { src: "/AdobeStock_360791874.webp", cardLink: "#", tagName: "キャリア" },
    { src: "/AdobeStock_354201941.webp", cardLink: "#", tagName: "働き方" },
    { src: "/AdobeStock_337669179.webp", cardLink: "#", tagName: "クラウド" },
    {
      src: "/AdobeStock_402408502.webp",
      cardLink: "#",
      tagName: "リモートワーク",
    },
    { src: "/AdobeStock_441304961.webp", cardLink: "#", tagName: "デザイン" },
    {
      src: "/AdobeStock_461427626.webp",
      cardLink: "#",
      tagName: "エンジニアリング",
    },
  ];

  const onlyWidth = useWindowWidth();
  const imageSizeX = onlyWidth > 640 ? 480 : 320;
  const gapX = 32;
  const imagesLength = images.length;
  const [centerX, setCenterX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleClickPrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
    if (current === 0) {
      setCurrent(imagesLength - 1);
    }
  };

  const handleClickNext = () => {
    if (current < imagesLength) {
      setCurrent((prev) => prev + 1);
    }
    if (current === imagesLength - 1) {
      setCurrent(0);
    }
  };

  const handleDotClick = (i: number) => {
    setCurrent(i);
  };

  useEffect(() => {
    setOffsetX(-(imageSizeX * current + gapX * current));
  }, [current, imageSizeX]);

  useEffect(() => {
    if (onlyWidth > 640) {
      setCenterX(
        (10000 - onlyWidth) / 2 -
          imageSizeX * (imagesLength / 2) +
          gapX * (imagesLength - 1),
      );
    } else {
      setCenterX(
        (10000 - onlyWidth) / 2 - imageSizeX * (imagesLength / 2) + gapX * 2.5,
      );
    }
  }, [imageSizeX, imagesLength, onlyWidth]);

  return (
    <>
      <main className={clsx("min-h-screen bg-primary")}>
        <h1
          className={clsx(
            "px-[6vw] pb-20 pt-24 text-center text-3xl text-white sm:text-4xl",
          )}
        >
          導入事例インタビュー
        </h1>
        <div className={clsx("relative overflow-x-hidden")}>
          <div
            className={clsx("transition-transform")}
            style={{ transform: `translateX(${offsetX}px)` }}
          >
            <div
              className={clsx(
                `flex w-[10000px] justify-center gap-8 transition-transform`,
              )}
              style={{ transform: `translateX(-${centerX}px)` }}
            >
              {images.map((image, i) => (
                <div key={i}>
                  <Link
                    href={image.cardLink}
                    className={clsx("flex flex-col-reverse")}
                  >
                    <span
                      className={clsx(
                        "max-w-[320px] rounded-b-xl bg-white px-12 py-10 sm:max-w-[480px]",
                      )}
                    >
                      <h2 className={clsx("mb-6 text-2xl text-gray-900")}>
                        サンプルサンプル株式会社
                      </h2>
                      <p className={clsx("mb-8 text-gray-900")}>
                        サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。
                        サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。
                      </p>
                      <p
                        className={clsx(
                          "inline-block rounded-full border border-[#2B63DC] px-5 py-2 text-[#2B63DC]",
                        )}
                      >
                        # {image.tagName}
                      </p>
                    </span>
                    <span className={clsx("max-w-[320px] sm:max-w-[480px]")}>
                      <Image
                        src={image.src}
                        width={image.width ?? 480}
                        height={image.height ?? 300}
                        alt=""
                        className={clsx("rounded-t-xl")}
                      />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <button
            className={clsx(
              "-translate-y-1/12 absolute left-2 top-1/2 z-50 w-16 rounded-full bg-gray-600 drop-shadow-md sm:left-5 sm:w-20 sm:-translate-y-1/2",
            )}
            onClick={handleClickPrev}
          >
            <ChevronLeftIcon className={clsx("p-3 text-white sm:p-5")} />
          </button>
          <button
            className={clsx(
              "-translate-y-1/12 absolute right-2 top-1/2 z-50 w-16 rounded-full bg-gray-600 drop-shadow-md sm:right-5 sm:w-20 sm:-translate-y-1/2",
            )}
            onClick={handleClickNext}
          >
            <ChevronRightIcon className={clsx("p-3 text-white sm:p-5")} />
          </button>
          <div
            className={clsx(
              "absolute left-0 top-0 block h-full w-[5vw] bg-gradient-to-r from-primary to-transparent sm:w-[10vw] md:w-[20vw]",
            )}
          ></div>
          <div
            className={clsx(
              "absolute right-0 top-0 block h-full w-[5vw] bg-gradient-to-l from-primary to-transparent sm:w-[10vw] md:w-[20vw]",
            )}
          ></div>
        </div>
        <div className={clsx("flex justify-center gap-3 pb-32 pt-10")}>
          {images.map((_, i) => (
            <button
              key={i}
              className={clsx("h-2.5 w-2.5 rounded-full", {
                "bg-white": current !== i,
                "bg-orange-400": current === i,
              })}
              onClick={() => handleDotClick(i)}
            ></button>
          ))}
        </div>
      </main>
    </>
  );
}
