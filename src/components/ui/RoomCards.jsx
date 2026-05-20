import Image from "next/image";
import AnimatedCard from "../framer-motion/AnimatedCard";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";

const RoomCards = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {rooms.map((room, i) => {
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
          <AnimatedCard key={_id} index={i}>
            <div className="h-full flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg ">
              <div className="flex flex-col h-full ">
                <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0">
                  {image ? (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                      <span className="text-sm">No image available</span>
                    </div>
                  )}

                  <Chip className="absolute top-3 right-3 bg-slate-50 dark:bg-slate-950/80 dark:text-white ">
                    <span className="text-blue-600 dark:text-yellow-400">
                      ${price}
                    </span>
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
                    {amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 font-semibold px-2.5 py-0.5 rounded text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                    {amenities.length > 3 && (
                      <span className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 font-semibold px-2.5 py-0.5 rounded text-sm">
                        +{amenities.length - 3} more
                      </span>
                    )}
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
  );
};

export default RoomCards;
