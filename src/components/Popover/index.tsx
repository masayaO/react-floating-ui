import { Placement } from "@floating-ui/react";
import { usePopover } from "./usePopover.ts";
import { PopoverContext } from "./usePopoverContext.ts";
import { ReactNode } from "react";

export type PopoverOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const Popover = ({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode;
} & PopoverOptions) => {
  const popover = usePopover({ modal, ...restOptions });
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

export default Popover;
