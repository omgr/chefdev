import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import type { ChefDevDropdownProps } from "@chefdev-types/form-control/form-control-types";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export function ChefDevDropdown<T>({
  label,
  options,
  value,
  onChange,
  error,
}: ChefDevDropdownProps<T>) {
  //   const defaultOption: ChefDevDropdownOption<T> = { value: "" as T, label: "Select an option" };
  //   const [selectedValue, setSelectedValue] = useState<ChefDevDropdownOption<T>>(
  //     selectedOption || defaultOption
  //   );
  console.log(value);
  return (
    <>
      <div className="flex w-full gap-2">
        <label htmlFor={label} className="flex-none text-left p-1 min-w-28">
          {label}
        </label>
        <Listbox name={label} value={value} onChange={onChange}>
          <ListboxButton className="flex-auto p-1">
            {value?.label}
          </ListboxButton>
          <ListboxOptions anchor="bottom" className="w-(--button-width)">
            {options.map((option) => (
              <ListboxOption
                key={option.value as string}
                value={option}
                as={Fragment}
              >
                {({ focus, selected }) => (
                  <div
                    className={clsx("flex gap-2", focus && "cursor-pointer")}
                  >
                    <CheckIcon
                      className={clsx("size-5", !selected && "invisible")}
                    />
                    {option.label}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}
