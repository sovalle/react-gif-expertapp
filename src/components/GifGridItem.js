import React,{useState,useEffect} from "react";

export const GifGridItem = ({ title, url}) => {
    console.log(title, url);
    return (
        <div className="card animate__animated animate__rotateIn animate__slow">
            <img src={ url} alt={title}></img>
            <p> {title}</p>
        </div>
    )
}