import clsx from "clsx";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
};

const FeatureCard = ({ gradient, children }: FeatureCardProps) => {
  return (
    <div
      className={clsx(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br",
        gradient
      )}
    >
      {children}
    </div>
  );
};

export const Todo = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Colors = () => {
  return (
    <FeatureCard gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Availability = () => {
  return (
    <FeatureCard gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const Music = () => {
  return (
    <FeatureCard gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = () => {
  return (
    <FeatureCard gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = () => {
  return (
    <FeatureCard gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
