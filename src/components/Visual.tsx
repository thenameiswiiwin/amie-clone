'use client';

import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ id, children }: VisualProps) => {
  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-0 flex items-center justify-center opacity-0',
        `visual-${id}`
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
