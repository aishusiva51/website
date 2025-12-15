
"use client";

import React, { useState } from "react";
import Hero, { Names } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 style={{ color: "red" }}>{Names}</h1>
      <Hero />
      <Hero />
      <Hero />
      <h1>sanjana</h1>
      <Hero />

    </div>
  );
}

