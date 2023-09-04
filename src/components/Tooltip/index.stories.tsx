import Tooltip from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ツールチップのラベル",
    children: <button>ツールチップを表示するコンテンツ</button>,
  },
};
