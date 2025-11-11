"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User } from "@/types";
import { fetcher } from "@/lib/fetcher";

interface DeleteUserDialogProps {
  user: User;
  onSuccess: () => void;
}

export function DeleteUserDialog({ user, onSuccess }: DeleteUserDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await fetcher({
          url: `/api/admin/users/${user.id}`,
          method: "delete",
          config: { withCredentials: true },
        });

        onSuccess();
        toast.success(`User "${user.name}" has been deleted`);
      } catch (error) {
        console.error("Delete user error:", error);
        toast.error((error as Error).message || "An error occurred");
      } finally {
        setOpen(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer"
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <p className="text-sm">
          Are you sure you want to delete user{" "}
          <strong>{user.name}</strong>? This action cannot be undone.
        </p>
        <DialogFooter className="mt-4">
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => setOpen(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            className="cursor-pointer"
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
