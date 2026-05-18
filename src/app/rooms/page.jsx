import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { fetchRooms } from "@/service/api";
import AnimatedCard from "@/components/Framer-Motion/AnimatedCard";

const RoomsPage = async () => {
  const rooms = await fetchRooms();

  return (
    <div className="min-h-screen container mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-slate-50/20 dark:bg-zinc-950/10">
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl font-technor">
          Explore All{" "}
          <span className="text-[#072AC8] dark:text-blue-400">Study Nooks</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
          Choose from a wide selection of soundproof, quiet study rooms designed
          to maximize your concentration and collaboration.
        </p>
      </div>

      {rooms.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-12  max-w-md mx-auto">
          <span className="text-4xl mb-3 block">📭</span>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1.5">
            No Rooms Found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-supreme">
            We couldn&apos;t find any rooms in our database right now. Please
            list a new room or check back later!
          </p>
          <Link href="/add-rooms">
            <Button className="bg-[#072AC8] hover:bg-[#1E96FC] font-extrabold rounded-lg px-5 py-1.5">
              List a Room
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => {
            const {
              _id,
              title,
              description,
              image,
              floor,
              capacity,
              price,
              amenities = [],
            } = room;

            return (
              <AnimatedCard key={_id}>
                <div className="h-full flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg ">
                  <div className="flex flex-col h-full ">
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <Chip className="absolute top-3 right-3 bg-slate-950/80 text-white">
                        <span className="text-yellow-400">${price}</span>
                        /hr
                      </Chip>
                    </div>

                    <div className="p-5 flex flex-col grow">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-md font-extrabold uppercase text-[#072AC8] dark:text-blue-400 bg-[#072AC8]/5 dark:bg-blue-400/10 px-2 py-0.5 rounded">
                          {floor}
                        </span>
                        <span className="text-md font-semibold text-slate-500 dark:text-slate-400">
                          Capacity:{" "}
                          <strong className="font-bold text-slate-800 dark:text-white">
                            {capacity} people
                          </strong>
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                        {title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 grow">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5 items-center">
                        {amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 font-semibold px-2.5 py-0.5 rounded text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Link href={`/rooms/${_id}`}>
                          <Button className="w-full bg-[#072AC8] hover:bg-[#1E96FC] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
