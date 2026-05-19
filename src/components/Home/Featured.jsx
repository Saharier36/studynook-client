import { featuredRooms } from "@/service/api";
import RoomCards from "../ui/RoomCards";

const FeaturedCard = async () => {
  const rooms = await featuredRooms();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
     <div className="container mx-auto">
         <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
            Find Your Ideal{" "}
            <span className="text-[#072AC8] dark:text-blue-400">
              Study Sanctuary
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium font-supreme">
            Handpicked quiet pods and collaborative labs designed to elevate
            your focus, productivity, and success.
          </p>
        </div>

        {rooms.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-12 max-w-md mx-auto">
            <span className="text-4xl mb-3 block">📭</span>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1.5">
              No Featured Rooms
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
              Currently, there are no featured study rooms listed. Check back
              shortly!
            </p>
          </div>
        ) : (
          <RoomCards rooms={rooms} />
        )}
     </div>
    </section>
  );
};

export default FeaturedCard;
