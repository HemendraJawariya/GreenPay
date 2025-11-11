"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User } from "@/types";
import { fetcher } from "@/lib/fetcher";

interface DeletePetugasDialogProps {
  petugas: User;
  onSuccess: () => void;
}

export function DeletePetugasDialog({
  petugas,
  onSuccess,
}: DeletePetugasDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await fetcher({
          url: `/api/admin/petugas/${petugas.id}`,
          method: "delete",
          config: { withCredentials: true },
        });

        toast.success(`Staff member "${petugas.name}" has been deleted`);
        onSuccess();
      } catch (error) {
        console.error("Delete staff error:", error);
        toast.error((error as Error).message || "An error occurred");
      } finally {
        setOpen(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="destructive" size="sm">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Staff Member</DialogTitle>
        </DialogHeader>
        <p className="text-sm">
          Are you sure you want to delete staff member{" "}
          <strong>{petugas.name}</strong>? This action cannot be undone.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
            disabled={isPending}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
            className="cursor-pointer"
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
