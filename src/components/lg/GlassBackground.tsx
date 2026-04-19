"use client";

import { motion } from "framer-motion";

/**
 * Pure CSS + Framer Motion glassmorphism background.
 * Animated radial-gradient blobs — subtle ivory + cobalt tints.
 */

const blobs = [
  /* top-left — warm ivory */
  {
    style: {
      width: "85vw",
      height: "85vw",
      maxWidth: "1000px",
      maxHeight: "1000px",
      top: "-15%",
      left: "-25%",
      background:
        "radial-gradient(ellipse at center, rgba(240,238,228,0.85) 0%, rgba(245,243,234,0.55) 40%, transparent 72%)",
    },
    animate: { x: [0, 48, -24, 0], y: [0, -36, 28, 0], scale: [1, 1.07, 0.96, 1] },
    duration: 22,
  },
  /* top-right — cobalt accent */
  {
    style: {
      width: "72vw",
      height: "72vw",
      maxWidth: "820px",
      maxHeight: "820px",
      top: "2%",
      right: "-18%",
      background:
        "radial-gradient(ellipse at center, rgba(25,86,201,0.13) 0%, rgba(25,86,201,0.06) 42%, transparent 68%)",
    },
    animate: { x: [0, -36, 28, 0], y: [0, 28, -20, 0], scale: [1, 0.95, 1.08, 1] },
    duration: 28,
  },
  /* mid-left — warm tint */
  {
    style: {
      width: "65vw",
      height: "65vw",
      maxWidth: "750px",
      maxHeight: "750px",
      top: "28%",
      left: "-8%",
      background:
        "radial-gradient(ellipse at center, rgba(238,236,220,0.75) 0%, rgba(245,244,236,0.4) 48%, transparent 72%)",
    },
    animate: { x: [0, 28, -40, 0], y: [0, 38, -14, 0], scale: [1, 1.08, 0.97, 1] },
    duration: 34,
  },
  /* mid-right — cobalt glow */
  {
    style: {
      width: "58vw",
      height: "58vw",
      maxWidth: "680px",
      maxHeight: "680px",
      top: "38%",
      right: "-10%",
      background:
        "radial-gradient(ellipse at center, rgba(25,86,201,0.11) 0%, rgba(31,123,255,0.05) 38%, transparent 68%)",
    },
    animate: { x: [0, -24, 34, 0], y: [0, -36, 22, 0], scale: [1, 1.05, 0.95, 1] },
    duration: 26,
  },
  /* bottom-center — ivory wash */
  {
    style: {
      width: "78vw",
      height: "78vw",
      maxWidth: "900px",
      maxHeight: "900px",
      bottom: "-5%",
      left: "8%",
      background:
        "radial-gradient(ellipse at center, rgba(242,240,230,0.82) 0%, rgba(250,250,247,0.45) 44%, transparent 70%)",
    },
    animate: { x: [0, 22, -30, 0], y: [0, -28, 18, 0], scale: [1, 0.97, 1.06, 1] },
    duration: 30,
  },
  /* bottom-right — cobalt whisper */
  {
    style: {
      width: "52vw",
      height: "52vw",
      maxWidth: "620px",
      maxHeight: "620px",
      bottom: "8%",
      right: "-4%",
      background:
        "radial-gradient(ellipse at center, rgba(25,86,201,0.10) 0%, rgba(25,86,201,0.04) 38%, transparent 66%)",
    },
    animate: { x: [0, -28, 18, 0], y: [0, 22, -30, 0], scale: [1, 1.06, 0.95, 1] },
    duration: 24,
  },
];

export function GlassBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            willChange: "transform",
            ...blob.style,
          }}
        />
      ))}
    </div>
  );
}
