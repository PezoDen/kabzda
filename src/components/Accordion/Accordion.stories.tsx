import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
  title: 'Accordion ',
  component: Accordion,
};
const callback = action("event fired")
const onClickCallback = action("some item was clicked")
export const CollapsedMode = () =>
  <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}
             items={[]}
             onClick={onClickCallback}/>
export const UncollapsedMode = () =>
  <Accordion titleValue={"Users"} collapsed={false} onChange={callback} onClick={onClickCallback}
             items={[{title:"Dimich",value: 1},{title:"Valera",value: 2},{title:"Artem",value: 3},{title:"Victor",value: 4}]}/>
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={"Users"} collapsed={value}
                    onChange={() => setValue(!value)}
                    onClick={(value) => {alert(`user with id ${value} should be happy`)}}
                    items={[
                      {title:"Dimich",value: 1},
                      {title:"Valera",value: 2},
                      {title:"Artem",value: 3},
                      {title:"Victor",value: 4}]}/>
}
