'use client';

import { SpotifyLogo } from '@components/logos/spotify';
import { useFeatureStore } from '@stores/index';
import clsx from 'clsx';
import Image from 'next/image';

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardPros;

type CardPros = {
  id: string;
};

const FeatureCard = ({ id, gradient, children }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={clsx(
        'absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity',
        gradient,
        inViewFeature === id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
      <button
        onClick={() => setFullscreenFeature(id)}
        className="absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button>
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
      <Image
        src="/images/song-1.webp"
        width="100"
        height="100"
        alt="Song 1"
        className="absolute left-1/2 top-1/2 mt-[calc(-160px_-_100px/2)] ml-[calc(-160px_-_100px/2)] rounded-xl shadow-lg"
      />
      <Image
        src="/images/song-2.webp"
        width="130"
        height="130"
        alt="Song 2"
        className="absolute left-1/2 top-1/2 ml-[calc(150px_-_130px/2)] mt-[calc(-50px_-_130px/2)] rounded-xl shadow-lg"
      />
      <Image
        src="/images/song-3.webp"
        width="160"
        height="160"
        alt="Song 3"
        className="absolute left-1/2 top-1/2 ml-[calc(-80px_-_160px/2)] mt-[calc(120px_-_160px/2)] rounded-xl shadow-lg"
      />

      <div className="absolute left-[44%] top-48 h-[150px] w-[72px] rounded-[96px] bg-[#1bd761] p-3 shadow-[0_14px_20px_0_rgba(0,128,60,.36)]">
        <SpotifyLogo />
      </div>
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
