import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

// * primary button은 primary = true
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

// * secondary button은 그냥 버튼
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

// * large button은 button size가 large
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

// * small button은 button size가 small
export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
