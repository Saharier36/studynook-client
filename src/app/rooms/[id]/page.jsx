import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Chip,
  Card,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@heroui/react";
import { fetchRoomDetails } from "@/service/api";
import {
  FaBuilding,
  FaUsers,
  FaCalendarCheck,
  FaArrowLeft,
} from "react-icons/fa6";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditRooms from "@/components/ui/EditRooms";
import DeleteRooms from "@/components/ui/DeleteRooms";

const RoomDetails = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const room = await fetchRoomDetails(id);
  const {
    title,
    description,
    image,
    floor,
    capacity,
    price,
    amenities,
    bookingCount,
    owner,
  } = room;

  const isLoggedIn = !!session?.user;
  const isOwner = session?.user?.id === owner?.id;

  return (
    <main className="min-h-screen pb-10">
      <section className="relative w-full h-100 sm:h-125 -mt-26 pt-26 overflow-hidden">
        <Image src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute top-28 left-6 z-20">
          <Link href="/rooms">
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25">
              <FaArrowLeft className="size-3" />
              Back to Rooms
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-24 sm:-mt-35">
        <div className="relative">
          <Card className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 md:p-12">
            <div className="text-center border-b border-slate-100 dark:border-zinc-800/80 pb-8 mb-8 space-y-1.5">
              <span className="text-md font-extrabold uppercase text-[#072AC8] dark:text-blue-400">
                Premium Sanctuary Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                StudyNook Space Profile
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 space-y-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072AC8] dark:text-blue-400 mb-2">
                  {title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {description}
                </p>

                <div>
                  <h3 className="text-md font-extrabold uppercase text-slate-800 dark:text-white mb-3">
                    Included Amenities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((amenity, i) => (
                      <Chip
                        key={i}
                        className="bg-slate-50 dark:bg-zinc-800/40 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-zinc-800/80 px-2 py-1 rounded-xl text-xs font-bold"
                      >
                        {amenity}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#072AC8]/5 dark:bg-blue-400/5 p-4 rounded-2xl border border-[#072AC8]/10 dark:border-blue-400/10 max-w-md">
                  <div className="bg-[#072AC8] text-white p-3 rounded-xl">
                    <FaCalendarCheck className="size-5" />
                  </div>
                  <div>
                    <span className="text-md font-extrabold uppercase text-slate-400 dark:text-slate-500">
                      Popularity Rate
                    </span>
                    <h4 className="text-base font-extrabold text-slate-800 dark:text-white -mt-0.5">
                      Booked {bookingCount} Times
                    </h4>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-zinc-800/40 rounded-2xl border border-slate-100 dark:border-zinc-800/80 max-w-md flex items-center gap-4">
                  <AvatarRoot size="md">
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={owner?.image || ""}
                      alt={owner?.name || "Owner"}
                    />
                    <AvatarFallback>
                      {owner?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </AvatarRoot>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#072AC8] dark:text-blue-400 block mb-1">
                      Space Owner
                    </span>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white">
                      {owner?.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {owner?.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#EBF3FF] dark:bg-blue-950/15 border border-blue-100/50 dark:border-blue-900/20 rounded-3xl p-6 sm:p-8">
                  <span className="text-xs font-bold text-[#072AC8] dark:text-blue-400 uppercase block mb-1">
                    Rental Price
                  </span>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-[#072AC8] dark:text-blue-400">
                      ${price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      / hour
                    </span>
                  </div>

                  {isLoggedIn ? (
                    <Button className="w-full bg-[#072AC8] hover:bg-[#1E96FC] text-white font-extrabold py-6 rounded-xl">
                      Book This Nook
                    </Button>
                  ) : (
                    <Link href="/login" className="w-full">
                      <Button className="w-full bg-slate-850 hover:bg-slate-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 font-extrabold py-6 rounded-xl">
                        Login to Book
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="bg-slate-50/50 dark:bg-zinc-950/30 rounded-2xl p-5 border border-slate-100 dark:border-zinc-850 space-y-4">
                  <span className="text-md font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
                    Nook Specifications
                  </span>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <FaBuilding className="size-4 shrink-0 text-[#072AC8] dark:text-blue-400" />
                      <span>Located Floor</span>
                    </div>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200">
                      {floor}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <FaUsers className="size-4 shrink-0 text-[#072AC8] dark:text-blue-400" />
                      <span>Capacity Limit</span>
                    </div>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200">
                      {capacity} {capacity === 1 ? "person" : "people"}
                    </span>
                  </div>
                </div>

                {isOwner && (
                  <div className="space-y-3.5">
                    <span className="text-md font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
                      Admin Space Controls
                    </span>
                    <div className="flex items-center gap-4">
                      <EditRooms room={room} />
                      <DeleteRooms room={room} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default RoomDetails;
