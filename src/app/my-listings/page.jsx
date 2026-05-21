import Link from "next/link";
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import { getMyListings } from "@/service/api";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import RoomCards from "@/components/ui/RoomCards";

export const metadata = {
  title: "StudyNook - My Listings",
  description: "Book your perfect study space easily",
};

const MyListingPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;

  const rooms = userId ? await getMyListings(userId) : [];

  return (
    <div className="min-h-screen container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10">
        <div className="max-w-2xl space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            My{" "}
            <span className="text-[#072AC8] dark:text-blue-400">Listings</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            Manage and track all the study rooms you&apos;ve listed on
            StudyNook.
          </p>
        </div>

        <Link href="/add-rooms">
          <Button className="bg-[#072AC8] hover:bg-[#1E96FC] dark:bg-blue-600 dark:hover:bg-blue-500 font-extrabold rounded-xl px-5 py-2.5">
            <Plus className="size-5" />
            Add Room
          </Button>
        </Link>
      </div>

      {rooms.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 max-w-md mx-auto">
          <p className="text-4xl mb-3">📭</p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
            No Listings Yet
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            You haven&apos;t listed any study rooms yet. Start by creating your
            first room and make it available for fellow students!
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-6 mb-5 ">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {rooms.length} {rooms.length === 1 ? "Room" : "Rooms"} Listed
            </p>

            <div className="h-5 w-px bg-slate-200 dark:bg-zinc-700" />
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Showing all your active listings
            </span>
          </div>

          {/* Room Cards */}
          <RoomCards rooms={rooms} />
        </>
      )}
    </div>
  );
};

export default MyListingPage;
