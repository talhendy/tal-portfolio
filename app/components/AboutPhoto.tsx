"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAnimate } from "framer-motion";

const HEADER_W = 121; // header photo width at desktop
const FINAL_W = HEADER_W * 6; // grows to 6× the header size
const FINAL_H = Math.round(FINAL_W / 0.922);

export default function AboutPhoto() {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const router = useRouter();
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const node = scope.current;
    if (!node) return;

    // Resting rect - where the element naturally sits (final landing spot)
    const fr = node.getBoundingClientRect();
    const fcx = fr.left + fr.width / 2;
    const fcy = fr.top + fr.height / 2;
    const ox = (cx: number) => cx - fcx;
    const oy = (cy: number) => cy - fcy;

    // Start: where the header logo sits (it's hidden on /about, so derive it
    // from the "Tal Hendy" name which sits just to its right).
    const nameEl = document.querySelector("header a span:last-child") as HTMLElement | null;
    let startCx = 82;
    let startCy = 93;
    if (nameEl) {
      const nr = nameEl.getBoundingClientRect();
      startCx = nr.left - 60;
      startCy = nr.top + nr.height / 2;
    }
    const startScale = HEADER_W / FINAL_W;

    // Waypoint 1 - right edge of the screen
    const w1cx = window.innerWidth - 320;
    const w1cy = fcy;

    // Waypoint 2 - top border of the Write card
    const cards = document.querySelectorAll("section:last-of-type > div");
    const writeCard = cards[cards.length - 1] as HTMLElement | undefined;
    let w2cx = fcx;
    let w2cy = fcy + 220;
    if (writeCard) {
      const wr = writeCard.getBoundingClientRect();
      w2cx = wr.left + wr.width / 2;
      w2cy = wr.top + 10;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lerp = (t: number) => startScale + (1 - startScale) * t;

    const enter = async () => {
      if (reduce) {
        await animate(scope.current, { x: 0, y: 0, scale: 1, opacity: 1 }, { duration: 0 });
        return;
      }
      await animate(
        scope.current,
        {
          opacity: [0, 1, 1, 1, 1, 1, 1],
          // arc up to the right edge → bounce → smaller arc to the Write card
          // top → bounce → settle into the final spot
          x: [ox(startCx), ox((startCx + w1cx) / 2), ox(w1cx), ox(w1cx) - 14, ox(w2cx), ox(w2cx), 0],
          y: [
            oy(startCy),
            oy(Math.min(startCy, w1cy)) - 170,
            oy(w1cy),
            oy(w1cy) - 22,
            oy(w2cy),
            oy(w2cy) - 55,
            0,
          ],
          scale: [startScale, lerp(0.34), lerp(0.52), lerp(0.55), lerp(0.84), lerp(0.9), 1],
        },
        {
          duration: 2,
          times: [0, 0.18, 0.36, 0.43, 0.66, 0.73, 1],
          ease: ["easeOut", "easeIn", "easeOut", "easeInOut", "easeOut", "easeInOut"],
        }
      );
    };

    enter();

    // Exit - straight line back to the header, shrink to header size
    const leave = (href: string) => async (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if (!reduce) {
        await animate(
          scope.current,
          { x: ox(startCx), y: oy(startCy), scale: startScale },
          { type: "tween", ease: "easeInOut", duration: 0.5 }
        );
        await animate(scope.current, { opacity: 0 }, { duration: 0.12 });
      }
      router.push(href);
    };

    const links = Array.from(document.querySelectorAll("header a[href]")) as HTMLAnchorElement[];
    const handlers: Array<[HTMLAnchorElement, (e: MouseEvent) => void]> = [];
    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("/") || href === "/about") return;
      const h = leave(href);
      a.addEventListener("click", h);
      handlers.push([a, h]);
    });

    return () => handlers.forEach(([a, h]) => a.removeEventListener("click", h));
  }, [animate, scope, router]);

  return (
    <span
      ref={scope}
      className="absolute z-20 top-[110px] left-[50%] block"
      style={{ width: FINAL_W, height: FINAL_H, opacity: 0, willChange: "transform" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-new.png"
        alt="Tal Hendy"
        className="w-full h-full object-contain rotate-[3deg]"
      />
    </span>
  );
}
