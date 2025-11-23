import {
  Dialog,
  Description,
  DialogTitle,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import type { ChefDevPromptProps } from "@chefdev-types/chef-dev-prompt/chef-dev-prompt-types";

export function ChefDevPrompt({
  title,
  description,
  open,
  closeDialog,
  confirmDialog,
}: ChefDevPromptProps) {
  return (
    <>
      <Dialog className="relative z-50" open={open} onClose={closeDialog}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-zinc-500 p-12">
            <DialogTitle className="font-bold border-b">{title}</DialogTitle>
            <Description>{description}</Description>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={confirmDialog}
              >
                Confirm
              </button>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={closeDialog}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
