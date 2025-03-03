"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MoveDown } from "lucide-react";

export default function MotionHeroSection() {
  const scrollTriggerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollTriggerRef,
    offset: ["start end", "end 100%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 75]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.02], [0, 400]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const videoWidth = useTransform(scrollYProgress, [0.5, 1], ["100vw", "100%"]);
  const videoHeight = useTransform(scrollYProgress, [0.5, 1], ["100dvh", "24rem"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.5, 1], ["0rem", "1rem"]);
  const videoPadding = useTransform(scrollYProgress, [0.8, 1], ["0rem", "3.5rem"]);

  return (
    <div className="relative">
      <>
        <motion.div
          style={{ scale, transformOrigin: "50% 43%" }}
          className="fixed inset-0 top-0 z-50 flex h-dvh flex-col items-center justify-center bg-black mix-blend-multiply"
        >
          <div className="text-center font-oswald text-[12rem] font-bold leading-none text-white">
            <div>ELEVATING</div>
            <div>PERSPECTIVES</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: subtitleY, opacity: subtitleOpacity }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed left-1/2 top-[calc(50%+13rem)] z-[60] -translate-x-1/2"
        >
          <p className="text-center font-oswald text-4xl font-semibold uppercase text-[#FF001D]">
            Exceptional videos, without the&nbsp;
            <span className="font-oooh-baby">Drama</span>.
          </p>
        </motion.div>
      </>

      <div className="relative z-20 h-dvh bg-white" />

      <motion.div
        style={{
          padding: videoPadding,
        }}
        className="sticky left-0 top-0 z-20 flex h-dvh w-full flex-col items-center justify-between"
      >
        <motion.video
          style={{
            width: videoWidth,
            height: videoHeight,
            borderRadius: videoBorderRadius,
          }}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-center"
        >
          <source src="/hero/showreel.mp4" type="video/mp4" />
        </motion.video>

        <div className="z-50 px-8 py-8 text-center font-oswald text-4xl font-semibold uppercase text-[#FF001D]">
          The <span className="font-oooh-baby font-light">creative minds</span> delivering some of the most captivating
          video productions in the history.
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 font-oswald text-2xl text-white">
          EXPLORE
          <MoveDown className="size-4" />
        </div>
      </motion.div>

      <div
        className="relative z-0 flex h-dvh w-full items-center justify-center bg-transparent text-4xl font-bold text-white"
        ref={scrollTriggerRef}
      />
    </div>
  );
}
