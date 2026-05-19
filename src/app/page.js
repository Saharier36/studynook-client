import FeaturedCard from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 pb-8">
      <Hero />
      <FeaturedCard />
      <Overview />
      <Testimonials />
    </div>
  );
}
