import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function TextSpan({ children }) {
  const controll = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controll.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
  };

  return (
    <motion.span
      className="inline-block font-semibold md:text-4xl text-2xl text-gray-800"
      animate={controll}
      onMouseOver={() => {
        if (!isPlaying) rubberBand()
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}
