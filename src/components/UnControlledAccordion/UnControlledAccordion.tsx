import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {
  // let [collapsed, setCollapsed] = useState(false)
  let [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      {/*<AccordionTitle title={props.titleValue} onclick={() => {*/}
      {/*  setCollapsed(!collapsed)*/}
      <AccordionTitle title={props.titleValue} onclick={() => {
        dispatch({type:TOGGLE_COLLAPSED})
      }}/>
      {!state.collapsed && <AccordionBody/>}
    </div>
  )

}

type AccordionTitlePropsType = {
  title: string
  onclick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3 onClick={() => {
        props.onclick()
      }}>{props.title}</h3>
    </div>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default UnControlledAccordion;