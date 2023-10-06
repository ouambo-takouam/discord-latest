"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@hooks/use-modal-store";

import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@components/ui/button";

export default function LeaveServerModal() {
  const { type, isOpen, data, onClose } = useModal();

  const router = useRouter();

  const isModalOpen = isOpen && type == "leaveServer";

  const { server } = data;

  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      await axios.patch(`/api/servers/${server?.id}/leave`);

      onClose();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Leave Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to leave{" "}
            <span className="font-semibold text-indigo-500">
              {server?.name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button onClick={onClose} disabled={loading} variant="ghost">
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={loading}
              variant="primary"
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}