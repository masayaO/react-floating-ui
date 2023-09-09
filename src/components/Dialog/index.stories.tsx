import Dialog from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
