import { FeatureTitle } from "@components/features/title";
import { Hero } from "@components/Hero";
import { Features } from "@lib/data";

export default function Homepage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {Features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
            {Features.map((feature) => (
              <feature.card key={feature.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}
