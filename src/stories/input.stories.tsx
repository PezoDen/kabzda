import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {Button, ButtonProps} from './Button';
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'input',
  // component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
}
export const UncontrolledInput = () => <input/>
export const TrackingValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return <><input value={value} onChange={onChange}/> - {value}</>
}
export const GetUncontrolledInputPress = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return <><input ref={inputRef}/>
    <button onClick={save}>save</button>
    - actual value: {value}</>
}
export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("")
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>

}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2")
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChange}>
    <option value=""> none</option>
    <option value="1"> Minsk</option>
    <option value="2"> Moscow</option>
    <option value="3"> Kiev</option>
  </select>

}


export const ControlledInputWithFixedValue = () => <input value={"it-kamasutra"}/>
