'use client';

import { useFeatureStore } from '@stores/index';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type FeatureTitleProps = {
  id: string;
  children: React.ReactNode;
};

export const FeatureTitle = ({ id, children }: FeatureTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <h3
      ref={ref}
      className={clsx(
        'py-16 font-heading text-5xl font-extrabold transition-colors',
        isInView ? 'text-black' : 'text-gray-300'
      )}
    >
      {children}
    </h3>
  );
};
