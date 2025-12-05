"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Header from "./header";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "75vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/hero-1920.jpg"
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left text-white max-w-3xl p-6 bg-neutral-900/35 backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Casa Produções
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              A Produtora nasce com o objetivo de viabilizar projetos de
              diferentes portes. Acreditamos em fazer filmes. Abraçamos todas as
              linguagens e nossa vontade é dar fruição as ideias.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
