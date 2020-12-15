import React from "react";
/*
import classes from './Profile.module.css'
*/
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt={''}/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts/>
        </div>
    )
}