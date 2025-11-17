import type { CardHeaderProps } from "@/types/card/card-types";

export function CardHeader({ title }: CardHeaderProps) {
  return (
    <>
      <h3 className="my-3 h-10">{title}</h3>
    </>
  );
}
