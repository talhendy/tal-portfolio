"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HomeTiltCardProps {
  title: string;
  description?: string;
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  /** Initial tilt in degrees, e.g. 4, -3, 1 */
  initialRotate: number;
  /** Hover tilt: 4 degrees in opposite direction from initial */
  hoverRotate: number;
  /** Optional override for the title span className */
  titleClassName?: string;
  /** Override bottom margin under the rotating image (default mb-14) */
  imageMb?: string;
}

export default function HomeTiltCard({
  title,
  description,
  href,
  imageSrc,
  imageWidth,
  imageHeight,
  initialRotate,
  hoverRotate,
  titleClassName,
  imageMb = "mb-2 sm:mb-14",
}: HomeTiltCardProps) {
  return (
    <motion.div
      className="group w-full"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <Link href={href} className="block" aria-label={title}>
        {/* mobile-no-tilt overrides framer-motion's inline transform to 0 on mobile */}
        <motion.div
          className={`mobile-no-tilt w-full origin-center ${imageMb} sm:[filter:drop-shadow(0_4px_10px_rgba(0,0,0,0.10))]`}
          variants={{
            rest: { rotate: initialRotate },
            hover: { rotate: hoverRotate },
          }}
          transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
        >
          <picture>
            <source media="(min-width: 640px)" srcSet={imageSrc} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc.replace(/\.svg$/, ".png")}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-auto block"
            />
          </picture>
        </motion.div>

        {/* Text below card — always at 0 degrees */}
        <div className="mt-0 sm:mt-4 pl-0 pr-2 sm:px-2">
          <div className="flex items-center gap-3">
            <span className={titleClassName ?? "text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-semibold text-title leading-tight"}>
              {title}
            </span>
            {/* Handwritten arrow — draws itself on hover */}
            <motion.svg
              className="flex-shrink-0"
              width="34"
              height="16"
              viewBox="0 0 34 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path
                d="M1.25 6.2655C10.6507 6.2921 20.6953 7.07803 30.0762 6.13444C32.8326 5.85719 31.9339 5.84693 29.5261 5.19754C27.3915 4.62184 15.1843 -1.00784 23.2208 2.26737C24.1669 2.65297 31.7054 4.97655 31.397 5.11779C26.4602 7.37937 22.2724 10.545 18.4461 14.3497"
                stroke="#262626"
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={{
                  rest: { pathLength: 1 },
                  hover: { pathLength: [0, 1] },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
          {description && (
            <p className="mt-2 text-[0.95rem] sm:text-base text-body leading-relaxed max-w-[500px]">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
