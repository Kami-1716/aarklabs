"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function BookCall({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book a Call</DialogTitle>
          <DialogDescription>
            Choose a time that works for you below.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-[70vh]">
          <iframe
            src="https://calendly.com/mkamran-4edu/30min?embed_domain=localhost&embed_type=Inline"
            className="w-full h-full rounded-xl border-none"
            frameBorder="0"
            title="Calendly Booking"
          ></iframe>
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
