"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  Input,
  Button,
  TextField,
  Label,
  FieldError,
  TextArea,
  Checkbox,
  CheckboxGroup,
  Separator,
} from "@heroui/react";
import { toast } from "sonner";
import { ArrowLeft, Plus } from "@gravity-ui/icons";
import Link from "next/link";
import { addRooms } from "@/service/api";
import { useSession } from "@/lib/auth-client";

const AddRoomsPage = () => {
  const router = useRouter();
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const roomData = Object.fromEntries(formData.entries());
    roomData.amenities = selectedAmenities;

    const { id, name, email, image } = session?.user || {};
    roomData.owner = { id, name, email, image };

    const result = await addRooms(roomData);
    if (result) {
      toast.success("Room added successfully");
      router.push("/my-listings");
    } else {
      toast.error("Failed to add room");
    }
  };

  return (
    <main className="min-h-screen p-12 w-full flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100 dark:border-zinc-800">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-1.5 text-xs text-[#072AC8] dark:text-blue-400 hover:underline mb-6 font-semibold"
        >
          <ArrowLeft className="size-3.5" />
          Back to Rooms
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#072AC8] dark:text-blue-400">
            Add a New Room
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            List a new quiet zone, soundproof pod, or collaboration space on
            StudyNook.
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Name */}
          <TextField isRequired name="title" type="text" className="w-full">
            <Label className="text-sm font-semibold">Room Name</Label>
            <Input placeholder="e.g. Silent Focus Pod" className="mt-1" />
            <FieldError />
          </TextField>

          {/* Description */}
          <TextField isRequired name="description" className="w-full">
            <Label className="text-sm font-semibold">Description</Label>
            <TextArea
              placeholder="Provide a detailed description of the space, its purpose, and facilities..."
              className="mt-1 min-h-25"
            />
            <FieldError />
          </TextField>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image URL */}
            <TextField isRequired name="image" type="url" className="w-full">
              <Label className="text-sm font-semibold">Image URL</Label>
              <Input
                placeholder="https://images.example.com/..."
                className="mt-1"
              />
              <FieldError />
            </TextField>

            {/* Floor */}
            <TextField isRequired name="floor" type="text" className="w-full">
              <Label className="text-sm font-semibold">Floor</Label>
              <Input placeholder="e.g. 1st Floor, 3rd Floor" className="mt-1" />
              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField
              isRequired
              name="capacity"
              type="number"
              className="w-full"
            >
              <Label className="text-sm font-semibold">Capacity (People)</Label>
              <Input placeholder="e.g. 4" min={1} className="mt-1" />
              <FieldError />
            </TextField>

            {/* Hourly Rate */}
            <TextField isRequired name="price" type="number" className="w-full">
              <Label className="text-sm font-semibold">Hourly Rate ($)</Label>
              <Input placeholder="e.g. 5" min={0} className="mt-1" />
              <FieldError />
            </TextField>
          </div>

          {/* Amenities */}
          <div>
            <Label className="text-sm font-semibold">Amenities</Label>
            <CheckboxGroup
              value={selectedAmenities}
              onChange={setSelectedAmenities}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
                {[
                  "Whiteboard",
                  "Projector",
                  "Wi-Fi",
                  "Power Outlets",
                  "Quiet Zone",
                  "Air Conditioning",
                ].map((item) => (
                  <Checkbox
                    key={item}
                    value={item}
                    className="p-2 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                  >
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <span className="text-sm">{item}</span>
                    </Checkbox.Content>
                  </Checkbox>
                ))}
              </div>
            </CheckboxGroup>
          </div>

          <Separator className="my-6" />
          <div className="flex items-center justify-end gap-4">
            <Link href="/my-listings">
              <Button
                variant="ghost"
                className="hover:text-[#072AC8] dark:hover:text-[#1E96FC]"
              >
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="bg-[#072AC8] hover:bg-[#1E96FC] dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-xl px-6"
            >
              <Plus className="size-4 mr-1" />
              Add Room
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default AddRoomsPage;
