"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  highlightStart = -1,
  highlightClass = "",
  baseClass = "",
}: {
  words: string;
  className?: string;
  highlightStart?: number;
  highlightClass?: string;
  baseClass?: string;
}) => {
  const wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx >= highlightStart && highlightStart >= 0 ? highlightClass : baseClass}`}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
