import React from "react";
import './app-header.css';

const AppHeader = (props) => {
    return (
        <div className="app-header d-flex">
            <h1>Roman K</h1>
            <h2>{props.allPosts} notes, liked {props.liked}</h2>    
        </div>)
}

export default AppHeader;