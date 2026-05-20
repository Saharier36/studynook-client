"use client";
import { deleteRoom } from "@/service/api";
import { AlertDialog, Button } from "@heroui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteRooms = ({ room }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    const res = await deleteRoom(room._id);
    if (res) {
      toast.success("Room deleted successfully");
      router.push("/my-listings");
      router.refresh();
    } else {
      toast.error("Failed to delete room");
    }
    setIsDeleting(false);
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger" className=" font-extrabold rounded-xl">
          Delete Room
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100 bg-background">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete room permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{room.title}</strong> and
                  all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={handleDelete}
                  slot="close"
                  variant="danger"
                  isLoading={isDeleting}
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteRooms;
