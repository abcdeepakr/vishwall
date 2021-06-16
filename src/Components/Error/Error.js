import React from 'react'
import {Link} from 'react-router-dom'

import errorImage from '../../assets/404.jpeg'
import classes from './Error.module.css'
const Error = () =>{
    return(
        <div>
            <h2>404 ji, page not found</h2>
            <img src ={errorImage} alt = "error" className ={classes.Img} ></img>
            <h3 style = {{color: 'grey'}}>Error page, take me <Link to = '/vishwall' style = {{color : "white", stroke:"black"}}> <strong>home</strong></Link>, to the place, I belonnnnnggggggg</h3>
        </div>
    )
}

export default Error