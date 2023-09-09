import {
  arrow,
  flip,
  FloatingArrow,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import React, { useRef, useState } from "react";

type TooltipOptions = {
  placement?: Placement;
};

const Tooltip = ({
  label,
  children,
  placement = "top",
}: { label: string; children: React.ReactNode } & TooltipOptions) => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(12),
      flip(),
      shift(),
    ],
  });

  const hover = useHover(context, {
    delay: {
      open: 500,
      close: 0,
    },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ width: "fit-content" }}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            background: "black",
            color: "white",
            padding: "4px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
          {...getFloatingProps()}
        >
          {label}
          <FloatingArrow ref={arrowRef} context={context} />
        </div>
      )}
    </>
  );
};

export default Tooltip;
