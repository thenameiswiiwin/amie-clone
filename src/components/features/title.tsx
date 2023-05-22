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

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature]);

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
