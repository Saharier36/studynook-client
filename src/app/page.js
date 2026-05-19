import FeaturedCard from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import Overview from "@/components/Home/Overview";
import Testimonials from "@/components/Home/Testimonials";

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
