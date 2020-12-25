import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {on} from "cluster";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            {/*
            <PageTitle title={'hello'}/>
            <PageTitle title={'hello23'}/>
            <Rating value={3}/>
*/}
            {/*
            <Accordion titleValue={'--menu--'} collapsed={true}/>
            <Accordion titleValue={'--users--'} collapsed={false}/>
*/}
            {/*
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/>
*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}*/}

            {/*<UnControlledAccordion titleValue={'--menu--'}/>*/}
            {/*<Accordion titleValue={'--menu--'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*/>*/}

            <UnControlledAccordion titleValue={'--users--'}/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


        </div>
    );
}

type TitlePropsType = {
    title: string
}

function PageTitle(props: TitlePropsType) {
    return <h1>{props.title}</h1>

}

;


export default App;
