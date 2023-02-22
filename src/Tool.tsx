import React from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ myAddon, githubURL }] = useGlobals();
  return (
    <IconButton
      key={TOOL_ID}
      active={myAddon}
      title="Go to repo"
      href={githubURL}
      target={"_blank"}
    >
      <Icons icon="github" />
    </IconButton>
  );
};
