import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Highlight, HighlightProps } from "../lib";

export default {
  title: "Highlight",
  component: Highlight,
  argTypes: {
    search: {
      control: "text",
    },
  },
  args: {
    children: (
      <>
        It is known that there are an infinite number of worlds, simply because
        there is an infinite amount of space for them to be in. However, not
        every one of them is inhabited. Therefore, there must be a finite number
        of inhabited worlds.{" "}
        <span>
          Any finite number divided by infinity is as near to nothing as makes
          no odds, so the average population of all the planets in the Universe
        </span>{" "}
        can be said to be zero. From this it follows that the population of the
        whole Universe is also zero, and that any people you may meet from time
        to time are merely the products of a deranged imagination.
      </>
    ),
    search: "/infinit(e|y)/",
  },
} as Meta;

const makeSearch = (s?: string | RegExp) => {
  if (s) {
    if (s instanceof RegExp) return s;
    if (s.match(/^\/.*\/i?$/)) {
      try {
        const flags = s.match(/(i*)$/)?.[1];
        const pattern = s.match(/\/(.*)\//)?.[1];
        return new RegExp(pattern || "", flags);
      } catch {
        return s;
      }
    }
    return s;
  }
};

const Template: Story<HighlightProps> = (args) => {
  const { search } = args;
  return <Highlight {...args} search={makeSearch(search)} />;
};

export const Default = Template.bind({});
Default.args = {};
