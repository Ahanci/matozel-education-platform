"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "overflow-hidden bg-muted/20 relative",
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
