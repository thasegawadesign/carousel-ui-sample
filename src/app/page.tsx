import clsx from "clsx";
import Image from "next/image";

type ImageList = {
  src: string;
  width?: number;
  height?: number;
}[];

type TagList = {
  name: string;
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
    { name: "キャリア" },
    { name: "働き方" },
    { name: "クラウド" },
    { name: "リモートワーク" },
    { name: "デザイン" },
    { name: "エンジニアリング" },
  ];

  return (
    <>
      <main className={clsx("min-h-screen bg-primary")}>
        <h1 className={clsx("text-2xl text-white")}>導入事例インタビュー</h1>
        {images.map((image, i) => (
          <>
            <h2>サンプルサンプル株式会社</h2>
            <p>
              サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。
              サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。
            </p>
            <p>{tags[i].name}</p>
            <Image
              src={image.src}
              width={image.width ?? 480}
              height={image.height ?? 300}
              alt=""
            />
          </>
        ))}
      </main>
    </>
  );
}
