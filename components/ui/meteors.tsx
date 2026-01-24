"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<{ left: string; animationDelay: string; animationDuration: string }>>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-primary shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:-z-10 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:bg-gradient-to-r before:from-primary before:to-transparent",
            className
          )}
          style={{
            top: 0,
            ...style,
          }}
        />
      ))}
    </>
  );
};
