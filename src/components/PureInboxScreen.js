import React from "react";

import { PureInboxScreen } from "./InboxScreen";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PureInboxScreen,
  title: "PureInboxScreen",
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
