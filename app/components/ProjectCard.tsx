"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  priority?: boolean;

  /* --- Absolute-positioned mode (cards 1 & 2) --- */
  /** Full responsive Tailwind width class, e.g. "w-[89%] md:w-[76%]" */
  imageWidthClass?: string;
  /** Absolute positioning + transform classes, e.g. "left-1/2 -translate-x-1/2 bottom-[22px]" */
  imagePositionClass?: string;

  /* --- In-flow mode (card 3) --- */
  imageMaxWidth?: string;
  imageAlign?: "center" | "right" | "left";
  imageRightOffset?: string;
  extraBottomPadding?: string;
}

function CaseStudyButton() {
  return (
    <span className="group/btn mt-4 inline-flex items-center text-[16px] font-bold text-[#262626]">
      View case study
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        aria-hidden="true"
      >
        <path d="M5 12H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  href,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  priority = false,
  imageWidthClass,
  imagePositionClass,
  imageMaxWidth = "78%",
  imageAlign = "center",
  imageRightOffset,
  extraBottomPadding,
}: ProjectCardProps) {
  const TitleBlock = (
    <div className="max-w-[34rem]">
      <h2 className="text-[1.22rem] md:text-3xl font-semibold text-title">
        {title}
      </h2>
      <p className="mt-3 text-sm md:text-base text-body leading-relaxed">
        {subtitle}
      </p>
      <CaseStudyButton />
    </div>
  );

  // Absolute mode (cards 1 & 2)
  if (imagePositionClass) {
    return (
      <Link
        href={href}
        aria-label={title}
        className="group relative block w-full rounded-[24px] bg-card overflow-hidden h-[94vw] md:h-[880px]"
      >
        <div
          className="absolute top-0 left-0 right-0 pt-8 sm:pt-10 lg:pt-14 z-10"
          style={{ paddingLeft: "58px", paddingRight: "28px" }}
        >
          {TitleBlock}
        </div>

        <div className={`absolute ${imagePositionClass} ${imageWidthClass ?? ""}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            className="w-full h-auto"
          />
        </div>
      </Link>
    );
  }

  // In-flow mode (card 3)
  const justify =
    imageAlign === "right" ? "justify-end" : imageAlign === "left" ? "justify-start" : "justify-center";

  return (
    <Link
      href={href}
      aria-label={title}
      className="group block w-full rounded-[24px] bg-card overflow-hidden h-[94vw] md:h-[880px]"
    >
      <div className="pt-8 sm:pt-10 lg:pt-14" style={{ paddingLeft: "58px", paddingRight: "28px" }}>
        {TitleBlock}

        <div
          className={`flex pt-8 sm:pt-10 lg:pt-12 ${justify}`}
          style={{
            paddingBottom: extraBottomPadding ?? "22px",
            marginRight: imageRightOffset ? `-${imageRightOffset}` : undefined,
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            className="h-auto"
            style={{ width: imageMaxWidth }}
          />
        </div>
      </div>
    </Link>
  );
}
