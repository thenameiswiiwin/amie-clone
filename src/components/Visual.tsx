"use client";

import { useFeatureStore } from "@stores/index";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

import { SpotifyLogo } from "./logos/spotify";

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
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = ({ id }: Props) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;

  return (
    <Visual id={id}>
      <Image
        src="/images/window-spotify.webp"
        alt="Dashboard Image"
        width="1080"
        height="720"
      />
      {isFullscreen && (
        <motion.div
          layoutId="spotify-logo"
          className="absolute left-[60%] top-[48.8%] h-[150px] w-[10px] rounded-[96px] bg-[#1bd761] p-[1px] shadow-[0_14px_20px_0_rgba(0,128,60,.36)]"
        >
          <SpotifyLogo />
        </motion.div>
      )}
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
