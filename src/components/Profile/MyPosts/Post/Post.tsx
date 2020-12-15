import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    like: string
}

export function Post(props:PostPropsType) {
    return (
        <div>

            <div className={classes.item}>
                <img src="https://i.ytimg.com/vi/QLAFomxMZkM/hqdefault.jpg" alt={""}/>
                {props.message}
                <div>
                    <span>Like</span> {props.like}
                </div>
            </div>
        </div>
    )
}