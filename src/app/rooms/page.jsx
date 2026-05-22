import { fetchRooms } from "@/service/api";
import RoomFilter from "@/components/ui/RoomFilter";

export const metadata = {
  title: "StudyNook - Available Rooms",
  description: "Book your perfect study space easily",
};

const RoomsPage = async () => {
  const rooms = await fetchRooms();

  return (
    <div className="min-h-screen container mx-auto py-10 px-4 sm:px-6 lg:px-8">
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

      <RoomFilter initialRooms={rooms} />
    </div>
  );
};

export default RoomsPage;
