import React from 'react'
import {Link} from 'react-router-dom'

import errorImage from '../../assets/404.jpeg'
import classes from './Error.module.css'
const Error = () =>{
    return(
        <div>
            <h1>404 😞</h1>
            <img src ={errorImage} alt = "error" className ={classes.Img} ></img>
            <h2 style = {{color: 'white'}}><Link to = '/vishwall' style = {{color : "yellow", stroke:"black"}}> <h1>HOME 🏠</h1></Link></h2>
        </div>
    )
}
export default Error