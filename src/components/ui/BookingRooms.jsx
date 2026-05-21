"use client";

import React, { useState, useMemo } from "react";
import {
  Button,
  FieldError,
  Form,
  Label,
  Modal,
  Separator,
  Surface,
  TextArea,
  TextField,
  DatePicker,
  DateField,
  Calendar,
  ListBox,
  Select,
} from "@heroui/react";
import { ChevronDown } from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";
import { bookings } from "@/service/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const BookingRooms = ({ room }) => {
  const { _id, title, image, price } = room;

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  const getHour = (time) => Number(time.split(":")[0]);

  const getSelectedTime = (key) => (key == null ? "" : String(key));

  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [specialNote, setSpecialNote] = useState("");
  const [date, setDate] = useState(null);

  const bookedHours = useMemo(() => {
    if (!startTime || !endTime) return 0;
    const hours = getHour(endTime) - getHour(startTime);
    return hours > 0 ? hours : 0;
  }, [startTime, endTime]);

  const totalPrice = useMemo(() => {
    if (!bookedHours || !price) return 0;
    return bookedHours * Number(price);
  }, [bookedHours, price]);

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      roomTitle: title,
      roomImage: image,
      roomId: _id,
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
      startTime,
      endTime,
      totalPrice,
      specialNote,
    };

    const res = await bookings(bookingData);

    if (res.status === 409) {
      toast.error(
        "This time slot is already booked! Please choose another time.",
      );
      return;
    }
    toast.success("Room booked successfully!");
    router.refresh();
  };

  return (
    <div>
      <Modal>
        <Button className="w-full bg-[#072AC8] hover:bg-[#1E96FC] text-white font-extrabold py-6 rounded-xl">
          Book This Nook
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md bg-background">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading className="text-2xl font-extrabold text-[#072AC8] dark:text-blue-400">
                  Book This Room
                </Modal.Heading>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Select date and time to reserve your study space.
                </p>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface className="bg-background">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleBooking();
                    }}
                    className="space-y-6"
                  >
                    <DatePicker
                      className="w-full"
                      name="date"
                      isRequired
                      value={date}
                      onChange={setDate}
                    >
                      <Label className="text-sm font-semibold">
                        Booking Date
                      </Label>
                      <DateField.Group
                        fullWidth
                        className="mt-1 border border-slate-200 dark:border-zinc-800 px-3"
                      >
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                        <DateField.Suffix>
                          <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                          </DatePicker.Trigger>
                        </DateField.Suffix>
                      </DateField.Group>
                      <DatePicker.Popover>
                        <Calendar aria-label="Booking date">
                          <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                              <Calendar.YearPickerTriggerHeading />
                              <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                          </Calendar.Header>
                          <Calendar.Grid>
                            <Calendar.GridHeader>
                              {(day) => (
                                <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                              )}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>
                              {(date) => <Calendar.Cell date={date} />}
                            </Calendar.GridBody>
                          </Calendar.Grid>
                          <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                              {({ year }) => (
                                <Calendar.YearPickerCell year={year} />
                              )}
                            </Calendar.YearPickerGridBody>
                          </Calendar.YearPickerGrid>
                        </Calendar>
                      </DatePicker.Popover>
                    </DatePicker>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Select
                        selectedKey={startTime || null}
                        onSelectionChange={(key) => {
                          setStartTime(getSelectedTime(key));
                          setEndTime("");
                        }}
                        isRequired
                        name="startTime"
                      >
                        <Label className="text-sm font-semibold">
                          Start Time
                        </Label>

                        <Select.Trigger className="mt-1 rounded-xl border border-slate-200 dark:border-zinc-800 w-full">
                          <Select.Value placeholder="Select start time" />
                          <ChevronDown className="size-4 text-slate-400" />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {timeSlots.map((time) => (
                              <ListBox.Item key={time} id={time}>
                                {time}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <Select
                        selectedKey={endTime || null}
                        onSelectionChange={(key) => {
                          setEndTime(getSelectedTime(key));
                        }}
                        isRequired
                        name="endTime"
                        isDisabled={!startTime}
                      >
                        <Label className="text-sm font-semibold">
                          End Time
                        </Label>

                        <Select.Trigger className="mt-1 rounded-xl border border-slate-200 dark:border-zinc-800 w-full">
                          <Select.Value placeholder="Select end time" />
                          <ChevronDown className="size-4 text-slate-400" />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {(startTime
                              ? timeSlots.filter(
                                  (time) => getHour(time) > getHour(startTime),
                                )
                              : timeSlots
                            ).map((time) => (
                              <ListBox.Item key={time} id={time}>
                                {time}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-[#EBF3FF] dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 p-3">
                      <span className="text-xs font-bold uppercase text-[#072AC8] dark:text-blue-400">
                        Total Cost
                      </span>
                      <div className="text-right">
                        <p className="text-3xl font-extrabold text-[#072AC8] dark:text-blue-400">
                          $
                          {bookedHours > 0
                            ? totalPrice.toFixed(2)
                            : Number(price).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <TextField name="specialNote">
                      <Label className="text-sm font-semibold">
                        Special Note
                      </Label>
                      <TextArea
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                        placeholder="Any special request..."
                        className="mt-1 min-h-24"
                      />
                      <FieldError />
                    </TextField>

                    <Separator className="my-6" />

                    <div className="flex items-center justify-end gap-4 w-full">
                      <Modal.Footer className="w-full flex justify-end gap-2">
                        <Button
                          slot="close"
                          variant="secondary"
                          className="rounded-xl"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="bg-[#072AC8] hover:bg-[#1E96FC] text-white font-bold rounded-xl px-6"
                        >
                          Confirm Booking
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

export default BookingRooms;
