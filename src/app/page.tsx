import { FeatureTitle } from "@components/features/title";
import { Hero } from "@components/Hero";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
  },
  {
    title: "Track what you listened to when",
    id: "music",
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
  },
  {
    title: "Always know what your team is up to",
    id: "team",
  },
];

export default function Homepage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="aspect-square w-full rounded-2xl bg-gray-100">
            Div Col
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}
