"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

type FeatureTitleProps = {
  children: React.ReactNode;
};

export const FeatureTitle = ({ children }: FeatureTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  return (
    <h3
      ref={ref}
      className={clsx(
        "py-16 font-heading text-5xl transition-colors font-extrabold",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </h3>
  );
};
