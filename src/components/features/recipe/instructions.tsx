import type {
  Instruction,
  InstructionsProps,
} from "@chefdev-types/recipe/recipe-types";

export function Instructions({ instructions }: InstructionsProps) {
  return (
    <>
      <h6 className="text-xl font-bold">Instructions</h6>
      <ol className="list-decimal list-outside">
        {instructions
          .sort((ins1, ins2) => ins1.step - ins2.step)
          .map((instruction: Instruction) => {
            return (
              <li key={instruction.step}>
                <div className="flex justify-between items-center">
                  <span className="w-3/4 text-left">{instruction.text}</span>
                  {instruction.time && (
                    <span className="w-1/4">{instruction.time} minutes</span>
                  )}
                </div>
              </li>
            );
          })}
      </ol>
    </>
  );
}
