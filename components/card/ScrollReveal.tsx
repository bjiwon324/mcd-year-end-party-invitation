"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${revealed ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
