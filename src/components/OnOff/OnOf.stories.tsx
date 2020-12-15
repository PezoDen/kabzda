import React, {useState} from 'react';
import {Meta, Story} from "@storybook/react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'OnOff ',
  component: OnOff,
};
const callback= action("on or off clicked")
export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
  const [value,setValue] = useState(true)
  return<OnOff on={value} onChange={setValue} />
}
