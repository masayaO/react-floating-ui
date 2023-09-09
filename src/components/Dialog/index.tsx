import { useId, useState } from "react";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import styles from "./styles.module.css";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  // Set up label and description ids
  const headingId = useId();
  const descriptionId = useId();
  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        Delete balloon
      </button>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay className={styles.overlay} lockScroll>
            <FloatingFocusManager context={context}>
              <div
                ref={refs.setFloating}
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
                className={styles.dialog}
                {...getFloatingProps()}
              >
                <h2 id={headingId}>Delete balloon</h2>
                <p id={descriptionId}>This action cannot be undone.</p>
                <button
                  onClick={() => {
                    console.log("Deleted.");
                    setIsOpen(false);
                  }}
                >
                  Confirm
                </button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

export default Dialog;
