import React from 'react'
import errorImage from '../../assets/404.jpeg'
import classes from './Error.module.css'
const Error = () =>{
    return(
        <div>
            <h2>404 ji, page not found</h2>
            <img src ={errorImage} alt = "error" className ={classes.Img} ></img>
        </div>
    )
}

export default Error