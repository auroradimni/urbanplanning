"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  filter = true,
  duration = 2.0,
  delayBetweenLoops = 0.5,
}: {
  words: string;
  filter?: boolean;
  className?: string;
  duration?: number;
  delayBetweenLoops?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        await animate(
          "span",
          { opacity: 1, filter: filter ? "blur(0px)" : "none" },
          { duration: duration, delay: stagger(0.2) }
        );

        await new Promise((resolve) =>
          setTimeout(resolve, delayBetweenLoops * 1000)
        );

        await animate(
          "span",
          { opacity: 0, filter: filter ? "blur(10px)" : "none" },
          { duration: duration }
        );
      }
    };

    animateText();
  }, [animate, duration, filter, delayBetweenLoops]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const hiddenRoutes = ["/projects", "/about", "/contact"];

  return (
    <div
      className={`${
        hiddenRoutes.includes(location.pathname)
          ? "hidden"
          : "text-effect-class"
      }`}
    >
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
