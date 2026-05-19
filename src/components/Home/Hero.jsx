import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import IconMotion from "../framer-motion/IconMotion";
import { BiVolumeMute } from "react-icons/bi";
import { CircleCheck, Lock } from "@gravity-ui/icons";

const Hero = () => {
  return (
    <section className="relative w-full -mt-26 pt-26 overflow-hidden">
      {/* Bg Image */}
      <Image
        src="/assets/banner.jpg"
        alt="StudyNook Banner Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute top-[40%] right-[30%] w-87 h-87 rounded-full bg-[#1E96FC]/12 blur-3xl" />
      <div className="absolute bottom-[20%] left-[25%] w-75 h-75 rounded-full bg-[#FCF300]/5 blur-3xl" />

      <div className="relative z-10 w-full px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl flex flex-col items-center justify-center space-y-6 text-white">
          <span className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 backdrop-blur border border-[#1E96FC]/30 text-[#A2D6F9]">
            <IconMotion /> Focus Better, Learn Together
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Find Your Perfect <br />
            <span className="bg-linear-to-r from-[#FCF300] to-[#FFC600] bg-clip-text text-transparent">
              Study Room
            </span>
          </h1>

          <p className="text-sm sm:text-lg font-medium max-w-xl">
            Browse and book quiet, private study rooms in your library. List
            your own room and earn.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/rooms">
              <Button
                size="lg"
                className="bg-[#FCF300] hover:bg-[#FFC600] text-[#072AC8] font-extrabold px-8 py-6 shadow-lg shadow-[#FCF300]/10"
              >
                Explore Rooms
              </Button>
            </Link>

            <Link href="/add-rooms">
              <Button
                size="lg"
                className="bg-white/5 hover:bg-white/10 font-extrabold px-8 py-6 text-base border border-[#A2D6F9]/30 backdrop-blur rounded-lg"
              >
                List Your Room
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          <div className="flex flex-col items-center justify-center space-y-1 py-3 md:py-0">
            <div className="flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-green-500" />
              <span className="text-base font-extrabold text-white">
                Instant Confirm
              </span>
            </div>
            <span className="text-xs text-white/60">
              Reserve rooms in seconds
            </span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 py-3 md:py-0 md:pl-4">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#1E96FC]" />
              <span className="text-base font-extrabold text-white">
                Secure Access
              </span>
            </div>
            <span className="text-xs text-white/60">
              Digital entry access keys
            </span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 py-3 md:py-0 md:pl-4">
            <div className="flex items-center gap-2">
              <BiVolumeMute className="w-5 h-5 text-[#FCF300]" />
              <span className="text-base font-extrabold text-white">
                Quiet Zones Only
              </span>
            </div>
            <span className="text-xs text-white/60">
              Distraction-free environment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
