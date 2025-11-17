import type { CardBodyProps } from "@/types/card/card-types";

export function CardBody({ description }:CardBodyProps) {
  return (
    <>
      <p className="my-3 h-39">{description}</p>
    </>
  );
}
