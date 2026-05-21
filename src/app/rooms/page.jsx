import Link from "next/link";
import { Button,} from "@heroui/react";
import { fetchRooms } from "@/service/api";
import RoomCards from "@/components/ui/RoomCards";

export const metadata = {
  title: "StudyNook - Available Rooms",
  description: "Book your perfect study space easily",
};

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
        <RoomCards rooms={rooms} />
      )}
    </div>
  );
};

export default RoomsPage;
