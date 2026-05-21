"use client";

import { Button, Modal } from "@heroui/react";

const CancelBooking = ({ onConfirm }) => {
  return (
    <Modal>
      <Modal.Trigger>
        <button className="text-sm font-semibold text-red-500 hover:text-red-700">
          Cancel
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-sm bg-background">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-xl font-extrabold text-red-500">
                Cancel Booking
              </Modal.Heading>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </p>
            </Modal.Header>

            <Modal.Body />

            <Modal.Footer>
              <Button slot="close" variant="secondary" className="rounded-xl">
                Go Back
              </Button>
              <Button
                slot="close"
                onPress={onConfirm}
                className="bg-red-500 hover:bg-red-600 rounded-xl px-6"
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CancelBooking;
