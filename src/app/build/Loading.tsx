"use client";

import { Logo } from "@/components/Logo";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";

export default function Loading() {
  const { progress } = useProgress();
  return (
    <div
      className={clsx(
        "absolute inset-0 grid place-content-center bg-brand-navy font-sans text-[15vw] text-white duration-100 transition-opacity",
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <Logo className="w-[15vw] animate-squiggle text-brand-pink" />
      <p className="w-full animate-squiggle content-center leading-none text-brand-lime">
        Loading
      </p>
    </div>
  );
}
