'use client';

import { useFeatureStore } from '@stores/index';
import clsx from 'clsx';

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardPros;

type CardPros = {
  id: string;
};

const FeatureCard = ({ id, gradient, children }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={clsx(
        'absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity',
        gradient,
        inViewFeature === id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export const Todo = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Availability = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const Music = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardPros) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
