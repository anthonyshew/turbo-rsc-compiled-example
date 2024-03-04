"use client";

import { Hero } from "@repo/ui/hero";

export const HeroClientWrapper = () => {
  return (
    <Hero
      someClientHandler={() => alert("Hello, GloopBloopan!")}
      title="Clienty boi"
    />
  );
};
