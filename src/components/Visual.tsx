'use client';

import { useFeatureStore } from '@stores/index';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ id, children }: VisualProps) => {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-opacity',
        fullscreenFeature === id
          ? 'opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <Image
        src="/images/window-spotify.webp"
        alt="Dashboard Image"
        width="1080"
        height="720"
      />
    </Visual>
  );
};

export const OtherVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <Image
        src="/images/window-spotify.webp"
        alt="Dashboard Image"
        width="1080"
        height="720"
      />
    </Visual>
  );
};
