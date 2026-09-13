"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts a numeric prefix up from 0 once it scrolls into view, keeping
 * any non-numeric prefix/suffix (e.g. "XX+", "[XXXX+]") intact around it.
 * Falls back to a plain static render for values with no digits to count.
 */
export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/(\d[\d,]*)/);
  const [display, setDisplay] = useState(match ? value.replace(match[0], "0") : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const duration = 1100;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(value.replace(match![0], current.toLocaleString()));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}
