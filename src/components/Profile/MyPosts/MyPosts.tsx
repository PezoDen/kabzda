import React from "react";
// import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='classes.item' >
                <Post message={"Hi, how are you?"}
                      like={'25'}/>
                <Post message="It's my first post !"
                      like={'15'}/>
            </div>
        </div>
    )
}