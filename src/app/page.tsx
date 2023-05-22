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
                <p className="py-16 font-heading text-5xl text-gray-300">
                  {feature.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="rounded-2xl aspect-square w-full bg-gray-100">
            Div Col
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}
