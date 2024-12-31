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

  const [offsetX, setOffsetX] = useState(0);
  const onlyWidth = useWindowWidth();
  const imageSizeX = 480;
  const gapX = 32;

  useEffect(() => {
    setOffsetX((10000 - onlyWidth) / 2 + imageSizeX / 2 + gapX / 2);
  }, [onlyWidth]);

  return (
    <>
      <main className={clsx("min-h-screen bg-primary")}>
        <h1 className={clsx("pb-20 pt-24 text-center text-3xl text-white")}>
          導入事例インタビュー
        </h1>
        <div className={clsx("relative overflow-x-hidden")}>
          <div
            className={clsx(
              `flex w-[10000px] justify-center gap-8 transition-transform`,
            )}
            style={{ transform: `translateX(-${offsetX}px)` }}
          >
            {images.map((image, i) => (
              <div key={i}>
                <Link
                  href={image.cardLink}
                  className={clsx("flex flex-col-reverse")}
                >
                  <span
                    className={clsx(
                      "max-w-[480px] rounded-b-xl bg-white px-12 py-10",
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
                  <span className={clsx("max-w-[480px]")}>
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
          <button
            className={clsx(
              "absolute left-5 top-[calc(50%-40px)] w-20 rounded-full bg-gray-600",
            )}
          >
            <ChevronLeftIcon className={clsx("p-5 text-white")} />
          </button>
          <button
            className={clsx(
              "absolute right-5 top-[calc(50%-40px)] w-20 rounded-full bg-gray-600",
            )}
          >
            <ChevronRightIcon className={clsx("p-5 text-white")} />
          </button>
        </div>
        <div className={clsx("flex justify-center gap-3 pb-32 pt-10")}>
          {images.map((_, i) => (
            <button
              key={i}
              className={clsx("h-2.5 w-2.5 rounded-full bg-white")}
            ></button>
          ))}
        </div>
      </main>
    </>
  );
}
