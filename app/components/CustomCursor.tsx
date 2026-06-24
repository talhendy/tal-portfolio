"use client";

import { useEffect, useState } from "react";

type CursorState = "default" | "hover" | "logo";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [state, setState] = useState<CursorState>("default");
  // Only enable on devices with a fine pointer + hover (mouse/trackpad).
  // Touch devices (phones/tablets) get the native behavior — no custom dot.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    // Require a true mouse-only device: the fine+hover media query AND no touch
    // capability. Some touchscreens mis-report (hover:hover)/(pointer:fine),
    // which would otherwise enable the cursor overlay and break tapping.
    const hasTouch = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
    const apply = () => setEnabled(mq.matches && !hasTouch);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a[aria-label="Tal Hendy - home"]')) {
        setState("logo");
      } else if (el.closest("a, button, [role=button], input, textarea, select, label")) {
        setState("hover");
      } else {
        setState("default");
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  const size = state === "logo" ? 30 : 16;
  const bg = state === "logo" ? "#EC4B2A" : state === "hover" ? "#888888" : "#262626";

  if (!enabled) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
          width: size,
          height: size,
          borderRadius: "50%",
          background: bg,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease",
        }}
      />
    </>
  );
}
