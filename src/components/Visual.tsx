import Image from 'next/image';

type VisualProps = {
  children: React.ReactNode;
};

const Visual = ({ children }: VisualProps) => {
  return (
    <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-0">
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = () => {
  return (
    <Visual>
      <Image
        src="/images/window-spotify.webp"
        alt="Dashboard Image"
        width="1080"
        height="720"
      />
    </Visual>
  );
};

export const OtherVisual = () => {
  return (
    <Visual>
      <Image
        src="/images/window-spotify.webp"
        alt="Dashboard Image"
        width="1080"
        height="720"
      />
    </Visual>
  );
};
