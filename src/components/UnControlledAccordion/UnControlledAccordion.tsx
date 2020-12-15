import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

 function UnControlledAccordion(props:AccordionPropsType) {
    let [collapsed,SetCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onclick={()=>{SetCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onclick: ()=> void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ ()=> {props.onclick()}}>{props.title}</h3>
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