import type { CardHeaderProps } from "@/types/card/card-types";
// import { Button } from "@headlessui/react";

export function CardHeader({
  title,
  needHeaderButtons,
  headerButtonClick,
  headerButtonText,
}: CardHeaderProps) {
  return (
    <>
      <div className="flex gap-3 items-center">
        <h3 className="my-3 h-10">{title}</h3>
        {needHeaderButtons && (
          <button type="button" onClick={headerButtonClick}>
            {headerButtonText}
          </button>
        )}
      </div>
    </>
  );
}
