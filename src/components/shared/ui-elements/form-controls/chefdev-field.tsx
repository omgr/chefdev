import type { ChefDevFieldProps } from "@chefdev-types/form-control/form-control-types";

export function ChefDevField({ label, error, ...props }: ChefDevFieldProps) {
  return (
    <>
      <div className="flex w-full gap-2">
        <label htmlFor={props.id} className="flex-none text-left p-1 min-w-28">
          {label}
        </label>
        <input {...props} className="flex-auto p-1" />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}
