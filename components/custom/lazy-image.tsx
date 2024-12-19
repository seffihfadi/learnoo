import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  thumbnailSrc: string | null;
}

export default async function LazyImage({
  src,
  alt,
  height,
  width,
  className,
  thumbnailSrc,
}: Readonly<ImageProps>) {

  const buffer = await fetch(thumbnailSrc || src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      blurDataURL={base64}
      placeholder="blur"
      className={className}
      loading="lazy"
    />
  );
}