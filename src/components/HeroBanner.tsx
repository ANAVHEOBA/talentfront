// src/components/HeroBanner.tsx
"use client";

import Image from "next/image";
import { FC } from "react";

interface Props {
  className?: string;
}

const HeroBanner: FC<Props> = ({ className }) => (
  <div
    className={`relative w-full overflow-hidden rounded-lg ${className ?? ""}`}
    /* ---------- 1. narrower ratio (taller → less wide) ---------- */
    style={{ aspectRatio: "3 / 1" }} // or 4/1, 5/2 … whatever you like

    /* ---------- 2. fixed height instead (uncomment if you prefer) ---------- */
    // style={{ height: 240 }} // 240px tall, width still 100%
  >
    <Image
      src="/og.png"
      alt="Hero banner"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
);

export default HeroBanner;