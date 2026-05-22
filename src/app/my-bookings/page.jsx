"use client";

import React, { useEffect, useState } from "react";
import { Chip, EmptyState, Table } from "@heroui/react";
import Image from "next/image";
import { toast } from "sonner";
import { authClient, useSession } from "@/lib/auth-client";
import { cancelBooking, getBookings } from "@/service/api";
import CancelBooking from "@/components/ui/CancelBooking";

const MyBookings = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.id) {
      getBookings(user.id).then((data) => setBookings(data));
    }
  }, [user]);

  const handleCancel = async (id) => {
     const { data } = await authClient.token();
     const token = data?.token;
     console.log(data?.token);
    const res = await cancelBooking(id, user.id, token);

    if (res.ok) {
      toast.success("Booking cancelled");
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: "cancelled" } : b)),
      );
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          My{" "}
          <span className="text-[#072AC8] dark:text-blue-400">Bookings</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
          View and manage all your upcoming and past study room reservations.
          Cancel or track your booking status anytime.
        </p>
      </div>

      <Table className="min-h-50">
        <Table.ResizableContainer>
          <Table.Content aria-label="My Bookings" className="min-w-200">
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="2fr" minWidth={200}>
                Room
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" minWidth={120}>
                Date
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" minWidth={160}>
                Time
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" minWidth={120}>
                Total Cost
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" minWidth={120}>
                Status
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" minWidth={100}>
                Action
              </Table.Column>
            </Table.Header>

            <Table.Body
              renderEmptyState={() => (
                <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 text-center py-16">
                  <span className="text-sm text-muted">
                    You have no bookings yet.
                  </span>
                </EmptyState>
              )}
            >
              {bookings.map((booking) => (
                <Table.Row key={booking._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={booking.roomImage}
                        alt={booking.roomTitle}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover"
                      />
                      <span className="font-semibold text-sm">
                        {booking.roomTitle}
                      </span>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="text-sm">
                      {new Date(booking.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="text-sm">
                      {booking.startTime} → {booking.endTime}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="font-bold text-[#072AC8] dark:text-blue-400">
                      ${booking.totalPrice}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip
                      color={
                        booking.status === "confirmed" ? "success" : "danger"
                      }
                      size="sm"
                      variant="soft"
                    >
                      {booking.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    {booking.status === "confirmed"  &&
                    new Date(booking.date) > new Date() ? (
                      <CancelBooking
                        onConfirm={() => handleCancel(booking._id)}
                      />
                    ) : (
                      <span className="text-sm text-muted">—</span>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default MyBookings;
