import { useState } from "react";

export function useReaction() {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return {
    selected,
    setSelected,
    open,
    setOpen,
  };
}