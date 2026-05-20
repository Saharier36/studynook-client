"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateRoom } from "@/service/api";
import { Pencil } from "@gravity-ui/icons";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Separator,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

const EditRooms = ({ room }) => {
  const router = useRouter();
  const { _id, title, description, image, floor, capacity, price } = room;
  const [selectedAmenities, setSelectedAmenities] = useState(
    room?.amenities || [],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const roomData = Object.fromEntries(formData.entries());
    roomData.amenities = selectedAmenities;

    const result = await updateRoom(_id, roomData);
    if (result) {
      toast.success("Room updated successfully");
      router.refresh();
    } else {
      toast.error("Failed to update room");
    }
    setIsSubmitting(false);
  };
  return (
    <div>
      <Modal>
        <Button className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-slate-200 font-extrabold rounded-xl border border-slate-200/60 dark:border-zinc-700/80">
          Edit Room
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md bg-background">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Pencil className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Room</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Update the details of your study nook to keep it accurate and
                  appealing to potential bookers. Make sure to save your changes
                  when you&apos;re done!
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form className="space-y-6 bg-background" onSubmit={onSubmit}>
                    {/* Room Name */}
                    <TextField
                      isRequired
                      name="title"
                      type="text"
                      className="w-full"
                      defaultValue={title}
                    >
                      <Label className="text-sm font-semibold">Room Name</Label>
                      <Input
                        placeholder="e.g. Silent Focus Pod"
                        className="mt-1"
                      />
                      <FieldError />
                    </TextField>

                    {/* Description */}
                    <TextField
                      isRequired
                      name="description"
                      className="w-full"
                      defaultValue={description}
                    >
                      <Label className="text-sm font-semibold">
                        Description
                      </Label>
                      <TextArea
                        placeholder="Provide a detailed description of the space, its purpose, and facilities..."
                        className="mt-1 min-h-25"
                      />
                      <FieldError />
                    </TextField>

                    {/* Grid Layout for details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Image URL */}
                      <TextField
                        isRequired
                        name="image"
                        type="url"
                        className="w-full"
                        defaultValue={image}
                      >
                        <Label className="text-sm font-semibold">
                          Image URL
                        </Label>
                        <Input
                          placeholder="https://images.example.com/..."
                          className="mt-1"
                        />
                        <FieldError />
                      </TextField>

                      {/* Floor */}
                      <TextField
                        isRequired
                        name="floor"
                        type="text"
                        className="w-full"
                        defaultValue={floor}
                      >
                        <Label className="text-sm font-semibold">Floor</Label>
                        <Input
                          placeholder="e.g. 1st Floor, 3rd Floor"
                          className="mt-1"
                        />
                        <FieldError />
                      </TextField>

                      {/* Capacity */}
                      <TextField
                        isRequired
                        name="capacity"
                        type="number"
                        className="w-full"
                        defaultValue={capacity}
                      >
                        <Label className="text-sm font-semibold">
                          Capacity (People)
                        </Label>
                        <Input placeholder="e.g. 4" min={1} className="mt-1" />
                        <FieldError />
                      </TextField>

                      {/* Hourly Rate */}
                      <TextField
                        isRequired
                        name="price"
                        type="number"
                        className="w-full"
                        defaultValue={price}
                      >
                        <Label className="text-sm font-semibold">
                          Hourly Rate ($)
                        </Label>
                        <Input placeholder="e.g. 5" min={0} className="mt-1" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Amenities */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">Amenities</Label>
                      <CheckboxGroup
                        value={selectedAmenities}
                        onChange={setSelectedAmenities}
                        className="mt-2"
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "Whiteboard",
                            "Projector",
                            "Wi-Fi",
                            "Power Outlets",
                            "Quiet Zone",
                            "Air Conditioning",
                          ].map((item) => (
                            <Checkbox key={item} value={item}>
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
                      <Modal.Footer>
                        <Button slot="close" variant="secondary">
                          Cancel
                        </Button>
                        <Button
                          slot="close"
                          type="submit"
                          isLoading={isSubmitting}
                          className="bg-[#072AC8] hover:bg-[#1E96FC]"
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </div>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditRooms;
