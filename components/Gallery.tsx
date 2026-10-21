"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const thumbs = images.slice(0, 8);

  return (
    <div className="grid content-start gap-2.5">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-cz-soft">
        <Image src={images[index]} alt={`${alt}, photo ${index + 1}`} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      </div>
      {thumbs.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-8 lg:grid-cols-4 xl:grid-cols-8" role="group" aria-label="Choisir une photo">
          {thumbs.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Afficher la photo ${i + 1}`}
              aria-pressed={i === index}
              className={`relative aspect-[4/3] overflow-hidden rounded-md bg-cz-soft ${i === index ? "outline outline-2 outline-offset-2 outline-cz-gold" : "opacity-80 hover:opacity-100"}`}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
