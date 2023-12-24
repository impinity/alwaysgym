"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      onAnimationComplete={onComplete}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 0 }}
     
    >
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        
          <Image src={'/images/loader.gif'}
          width={1000}
          height={1000}
          alt="animasi loading lottie files"
          className="w-28 h-auto"
          />
          <motion.span
            initial={{ y: 0, scale: 0 }}
            animate={{ y: 50, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            exit={{ opacity: 0.5, y: 0, scale: 0 }}
            className="font-bold md:text-7xl text-3xl text-[#438063] drop-shadow-lg"
          >
            AlwaysGym
          </motion.span>

          <motion.span
            initial={{ y: 0, scale: 0 }}
            animate={{ y: 50, scale: 1, rotate: 180 }}
            transition={{type: "spring", stiffness: 260, damping: 20 }}
            exit={{ opacity: 1, y: 0 }}
            className="font-bold md:text-7xl text-3xl text-green-900 blur-sm"
          >
            AlwaysGym
          </motion.span>
      </div>
    </motion.div>
  );
}
