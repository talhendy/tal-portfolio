"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const TEXT_MAIN = " most days";
const TEXT_DOTS = "...";
const TYPED_TEXT = TEXT_MAIN + TEXT_DOTS;

const TYPING_SPEED = 70;
const TOTAL_TYPING_MS = TYPED_TEXT.length * TYPING_SPEED;

// Handwriting reveal — expands width from 0 so the smiley physically moves
// right as the text "writes in". Overflow hidden clips the text during reveal.
function HandwriteText({ active }: { active: boolean }) {
  const duration = active ? TOTAL_TYPING_MS : Math.round(TOTAL_TYPING_MS * 0.6);
  const easing = "cubic-bezier(0.45, 0, 0.25, 1)";
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "pre",
        verticalAlign: "bottom",
        paddingBottom: "20px",
        marginBottom: "-20px",
        maxWidth: active ? "14em" : "0em",
        transition: `max-width ${duration}ms ${easing}`,
      }}
    >
      <span
        className="font-bold text-title"
        style={{ fontFamily: "var(--font-caveat)", fontSize: "1.6em", display: "inline-block", transform: "translateY(10px)" }}
      >
        {TYPED_TEXT}
      </span>
    </span>
  );
}

export default function HomeIntro() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setIsDark((v) => !v);

  const smileyStyle: React.CSSProperties = {
    transform: isDark ? "rotate(180deg)" : "rotate(0deg)",
    transition: isDark
      ? `transform ${TOTAL_TYPING_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
      : `transform ${Math.round(TOTAL_TYPING_MS * 0.6)}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <section className="relative" style={{ marginTop: "0px" }}>
      <div className="hidden sm:block absolute left-0 z-10" style={{ bottom: "-124px" }}>
        <ThemeToggle isDark={isDark} onToggle={handleToggle} />
      </div>

      <h1 className="max-w-[1000px] pr-0 sm:pr-28 text-[1.49rem] leading-[1.19] sm:text-[1.93rem] lg:text-[2.57rem] lg:leading-[1.14] font-semibold">
        <span className="block mb-0 sm:mb-[160px]">
          <span className="text-light">Hello I&apos;m </span>
          <span className="text-title">Tal Hendy</span>
          <br />
          <span className="text-light">
            I&apos;m a product designer specializing in <span className="text-title">complex systems</span> and{" "}
            <span className="text-title">data-heavy products</span>
          </span>
        </span>
        <span className="inline-block sm:-translate-y-[170px] sm:whitespace-nowrap">
          <span className="font-bold text-title" style={{ fontFamily: "var(--font-caveat)", fontSize: "1.6em", display: "inline-block", background: "linear-gradient(to bottom, transparent 20px, #FFDB6F 20px)", padding: "2px 8px", lineHeight: "0.8", paddingTop: "0px", paddingBottom: "0px", borderRadius: "0px", verticalAlign: "bottom", marginTop: "0px" }}>and i love what i do</span>
          <span className="hidden sm:inline"><HandwriteText active={isDark} /></span>
        </span>
      </h1>

      {/* spacer keeps cards at their position after toggle removal on mobile */}
      <div className="mt-[156px] sm:hidden" />
    </section>
  );
}
