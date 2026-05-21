import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-6 text-center transition-colors duration-300">
      <h1 className="text-8xl font-extrabold text-[#072AC8] dark:text-[#1E96FC] mb-2 tracking-tight">
        404
      </h1>
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
        Oops. That page doesn’t exist.
      </h2>

      <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-8 text-base">
        You may have typed the wrong URL or this page has been removed.
      </p>
      <Link href="/">
        <Button className="bg-[#072AC8] text-white hover:bg-[#1E96FC] dark:bg-[#1E96FC] dark:hover:bg-[#072AC8] font-medium px-6 py-2 rounded-xl">
          Go back to homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
