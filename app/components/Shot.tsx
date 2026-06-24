import type { CSSProperties } from "react";

/**
 * Screenshot/illustration image.
 * Desktop (>=640px) keeps the original SVG — pixel-identical to before.
 * Mobile (<640px) gets a high-res PNG raster, because iOS rasterizes large
 * SVG <img> elements at low resolution, making them look blurry.
 *
 * A matching .png must exist next to each .svg (same path, .png extension).
 */
export default function Shot({
  src,
  alt,
  width,
  height,
  className,
  style,
  "aria-hidden": ariaHidden,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <picture>
      <source media="(min-width: 640px)" srcSet={src} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src.replace(/\.svg$/, ".png")}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        aria-hidden={ariaHidden}
      />
    </picture>
  );
}
