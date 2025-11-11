"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as React from "react";
import { z } from "zod";
import { PetugasUpdateSchema } from "@/schemas/admin-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fetcher } from "@/lib/fetcher";

interface EditPetugasDialogProps {
  petugas: User;
  onSuccess: () => void;
}

export function EditPetugasDialog({
  petugas,
  onSuccess,
}: EditPetugasDialogProps) {
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof PetugasUpdateSchema>>({
    defaultValues: {
      name: petugas.name,
      email: petugas.email,
    },
  });

  const [open, setOpen] = React.useState(false);

  const onSubmit = async (values: z.infer<typeof PetugasUpdateSchema>) => {
    startTransition(async () => {
      try {
        await fetcher<User>({
          url: `/api/admin/petugas/${petugas.id}`,
          method: "put",
          data: values,
          config: { withCredentials: true },
        });

        onSuccess();
        toast.success(`Staff member "${values.name}" updated successfully`);
        setOpen(false);
      } catch (error) {
        console.error("Edit staff error:", error);
        toast.error((error as Error).message || "An error occurred");
      }
    });
  };

  React.useEffect(() => {
    if (open) {
      form.reset({
        name: petugas.name,
        email: petugas.email,
      });
    }
  }, [open, petugas, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="secondary">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Staff Member</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full name"
                      className="focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
