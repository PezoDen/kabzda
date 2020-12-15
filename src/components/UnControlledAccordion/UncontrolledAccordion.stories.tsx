import React, {useState} from 'react';
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import UnControlledAccordion from "./UnControlledAccordion";

export default {
  title: 'UnControlledAccordion ',
  component: UnControlledAccordion,
};
const callback= action("event fired")
export const ModeChanging = () => {
  return<UnControlledAccordion titleValue={"Menu"} />
}
