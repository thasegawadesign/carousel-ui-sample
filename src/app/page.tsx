import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ImageList = {
  src: string;
  width?: number;
  height?: number;
}[];

type TagList = {
  name: string;
  link: string;
}[];

type CardList = {
  link: string;
}[];

export default function Home() {
  const images: ImageList = [
    { src: "/AdobeStock_360791874.webp" },
    { src: "/AdobeStock_354201941.webp" },
    { src: "/AdobeStock_337669179.webp" },
    { src: "/AdobeStock_402408502.webp" },
    { src: "/AdobeStock_441304961.webp" },
    { src: "/AdobeStock_461427626.webp" },
  ];
  const tags: TagList = [
    { name: "キャリア", link: "#" },
    { name: "働き方", link: "#" },
    { name: "クラウド", link: "#" },
    { name: "リモートワーク", link: "#" },
    { name: "デザイン", link: "#" },
    { name: "エンジニアリング", link: "#" },
  ];
  const cards: CardList = [
    { link: "#" },
    { link: "#" },
    { link: "#" },
    { link: "#" },
    { link: "#" },
    { link: "#" },
  ];

  return (
    <>
      <main className={clsx("min-h-screen bg-primary")}>
        <h1 className={clsx("pb-20 pt-24 text-center text-3xl text-white")}>
          導入事例インタビュー
        </h1>
        <div className={clsx("relative overflow-hidden")}>
          <div className={clsx("flex w-[10000px] gap-8")}>
            {images.map((image, i) => (
              <div key={i}>
                <Link
                  href={cards[i].link}
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
                      # {tags[i].name}
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
