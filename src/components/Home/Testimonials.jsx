import React from "react";
import { Card } from "@heroui/react";
import AnimatedCard from "@/components/Framer-Motion/AnimatedCard";
import { FaStar } from "react-icons/fa6";

const testimonialsData = [
  {
    text: "A friend recently told me about StudyNook and it is a game changer for me! I was skeptical at first, but figured I'd give it a try. WOW WAS I AMAZED. The app is easy to use and hassle free. For all my fellow students- this app is for you!",
    stars: 5,
    attribution: "Verified Student",
  },
  {
    text: "This app is so easy to use! It's designed so well that I was able to seamlessly list my study desk and complete my first listing in minutes. No packaging, taping, processing, printing... all the things I hate to do!!!! So excited about this app. I highly recommend!!!",
    stars: 5,
    attribution: "Desk Host Review",
  },
  {
    text: "In addition to this life-changing innovation, everyone on the StudyNook support team is super-friendly and a pleasure to work with. I can't recommend StudyNook highly enough, and can't imagine campus life without it!",
    stars: 5,
    attribution: "Verified Member",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-10 px-4 sm:px-6 lg:px-8 bg-slate-50/30 dark:bg-zinc-950/10 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] flex items-center justify-center z-0">
        <div className="w-100 h-100 rounded-full border border-slate-900 dark:border-white" />
        <div className="absolute w-150 h-150 rounded-full border border-slate-900 dark:border-white" />
        <div className="absolute w-200 h-200 rounded-full border border-slate-900 dark:border-white" />
        <div className="absolute w-250 h-250 rounded-full border border-slate-900 dark:border-white" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <span className="px-5 py-1.5 rounded-full text-md font-extrabold bg-[#072AC8]/5 dark:bg-blue-400/10 border border-[#072AC8]/10 dark:border-blue-500/20 text-[#072AC8] dark:text-blue-400 uppercase tracking-widest">
            Hear From Our Users
          </span>
        </div>
        <div className="relative flex items-center justify-center max-w-4xl mx-auto gap-4 md:gap-8 mb-16 px-4">
          <span className="text-5xl sm:text-7xl font-serif text-[#072AC8]/25 dark:text-blue-400/20 select-none shrink-0 align-top -mt-4">
            “
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white text-center">
            A total study-life game changer
          </h2>
          <span className="text-5xl sm:text-7xl font-serif text-[#072AC8]/25 dark:text-blue-400/20 select-none shrink-0 align-bottom -mb-6">
            ”
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, i) => (
            <AnimatedCard key={i} index={i}>
              <Card className="bg-white dark:bg-zinc-900 rounded-4xl p-6 sm:p-8 h-full">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  {item.text}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800/50 space-y-2">
                  <div className="flex gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 size-4 shrink-0"
                      />
                    ))}
                  </div>
                  <span className="block text-md font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {item.attribution}
                  </span>
                </div>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
