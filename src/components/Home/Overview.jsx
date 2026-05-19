import React from "react";
import Image from "next/image";
import { Card } from "@heroui/react";
import AnimatedCard from "@/components/Framer-Motion/AnimatedCard";

const overviewData = [
  {
    title: "Smart Room Booking",
    subtitle: "Instant reservations, zero distractions",
    description:
      "Browse and secure high-comfort quiet cabins, solo pods, or collaborative group study tables in seconds. Engineered for pure academic focus.",
    image: "/assets/Brazuca.png",
    styles: {
      card: "bg-[#EBF3FF] dark:bg-blue-950/10 border border-blue-100/50 dark:border-blue-900/20",
      accent: "text-[#072AC8] dark:text-blue-400",
    },
  },
  {
    title: "Academic Hosting",
    subtitle: "List your space, earn passive reward",
    description:
      "Do you own a vacant study cabin, desk, or private tutoring room? List it on StudyNook to connect with learners looking for quality workspace.",
    image: "/assets/Ola.png",
    styles: {
      card: "bg-[#FFF0EB] dark:bg-orange-950/10 border border-orange-100/50 dark:border-orange-900/20",
      accent: "text-orange-600 dark:text-orange-400",
    },
  },
  {
    title: "Quiet Zone Guarantee",
    subtitle: "100% verified study environments",
    description:
      "No crowded coffee shops, no loud background calls. All listed spaces on StudyNook adhere to verified silent study guidelines to protect your flow state.",
    image: "/assets/Stuck.png",
    styles: {
      card: "bg-[#FFF0F5] dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-900/20",
      accent: "text-rose-600 dark:text-rose-400",
    },
  },
  {
    title: "Digital Key Entry",
    subtitle: "Seamless digital check-in keys",
    description:
      "Check in dynamically via secure QR access passes generated straight to your web browser upon booking. Safe, instant, and frictionless.",
    image: "/assets/Wonder.png",
    styles: {
      card: "bg-[#E6F8F8] dark:bg-teal-950/10 border border-teal-100/50 dark:border-teal-900/20",
      accent: "text-teal-600 dark:text-teal-400",
    },
  },
];

const Overview = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Smart Booking,{" "}
            <span className="text-[#072AC8] dark:text-blue-400">
              Deep Focus
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            The complete toolkit to find quiet study rooms or list vacant campus
            cabins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {overviewData.map((item, i) => (
            <AnimatedCard key={i} index={i}>
              <Card
                className={`p-6 sm:p-8 rounded-4xl flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full ${item.styles.card}`}
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 select-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col text-center sm:text-left h-full">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-0.5">
                    {item.title}
                  </h3>

                  <p
                    className={`text-md font-bold uppercase tracking-wider mb-3 block ${item.styles.accent}`}
                  >
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
