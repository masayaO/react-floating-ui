import Popover from "./index";
import { Meta } from "@storybook/react";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import { PopoverHeading } from "./PopoverContent/PopoverHeading";
import { PopoverDescription } from "./PopoverContent/PopoverDescription";
import { PopoverClose } from "./PopoverContent/PopoverClose";

const meta = {
  title: "components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent
        style={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "4px",
          boxSizing: "border-box",
          fontSize: "90%",
          padding: "4px 8px",
          boxShadow: "0 2px 4px rgba(0, 10, 20, 0.1)",
          width: "max-content",
          maxWidth: "calc(100vw - 10px)",
        }}
      >
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};
