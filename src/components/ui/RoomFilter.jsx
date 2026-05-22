"use client";

import { useState, useEffect } from "react";
import { Label, SearchField, Checkbox, Pagination } from "@heroui/react";
import { fetchRooms } from "@/service/api";
import RoomCards from "@/components/ui/RoomCards";
import Link from "next/link";
import { Button } from "@heroui/react";

const AMENITIES = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const RoomFilter = ({ initialRooms }) => {
  const [search, setSearch] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [rooms, setRooms] = useState(initialRooms);

  const [page, setPage] = useState(1);
  const itemsParPage = 6;

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await fetchRooms(search, selectedAmenities);
      setRooms(data);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, selectedAmenities]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const totalPages = Math.ceil(rooms.length / itemsParPage);
  const startIndex = (page - 1) * itemsParPage;
  const endIndex = startIndex + itemsParPage;
  const displayedRooms = rooms.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2">
          {AMENITIES.map((amenity) => (
            <Checkbox
              key={amenity}
              id={amenity}
              isSelected={selectedAmenities.includes(amenity)}
              onChange={() => toggleAmenity(amenity)}
              className="px-2 py-1 rounded-xl shadow dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label htmlFor={amenity}>{amenity}</Label>
              </Checkbox.Content>
            </Checkbox>
          ))}
        </div>

        <div className="w-full lg:w-auto">
          <SearchField name="search" value={search} onChange={setSearch}>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className="w-full lg:w-70"
                placeholder="Search rooms..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      {rooms.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-12 max-w-md mx-auto">
          <span className="text-4xl mb-3 block">📭</span>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1.5">
            No Rooms Found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-supreme">
            We couldn&apos;t find any rooms matching your search. Try different
            keywords or filters!
          </p>
          <Link href="/add-rooms">
            <Button className="bg-[#072AC8] hover:bg-[#1E96FC] font-extrabold rounded-lg px-5 py-1.5">
              List a Room
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          <RoomCards rooms={displayedRooms} />

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination className="justify-center">
                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.Previous
                      isDisabled={page === 1}
                      onPress={() => setPage((p) => p - 1)}
                    >
                      <Pagination.PreviousIcon />
                      <span>Previous</span>
                    </Pagination.Previous>
                  </Pagination.Item>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <Pagination.Item key={p}>
                        <Pagination.Link
                          isActive={p === page}
                          onPress={() => setPage(p)}
                        >
                          {p}
                        </Pagination.Link>
                      </Pagination.Item>
                    ),
                  )}

                  <Pagination.Item>
                    <Pagination.Next
                      isDisabled={page === totalPages}
                      onPress={() => setPage((p) => p + 1)}
                    >
                      <span>Next</span>
                      <Pagination.NextIcon />
                    </Pagination.Next>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RoomFilter;
