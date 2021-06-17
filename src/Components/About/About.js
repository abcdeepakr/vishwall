import React from 'react'
import {Link} from 'react-router-dom'

import classes from './About.module.css'

const About = () =>{
    return (
        <div >
            <h1 className = {classes.Header}>VISHWALL 💫</h1>
            <h3 className = {classes.Tag}>A wall where you post your wishes</h3>
                <div className = {classes.Content}>

                
                <div className ={classes.SubContent1}>
                    <h3 > But Why? 🤷</h3>
                    <p>
                        Imagine surprising your friend with a load of birthday wishes, 
                        you could send a link to all your mutuals, 
                        and all the wishes could be gathered in a single place.
                    </p>
                </div>
                <div className = {classes.SubContent1} style ={{padding:"10px"}}>
                    <h3>How does it work? 🤔</h3>
                    
                        <ul >
                            <li>A person enters the Instagram username or any unique name for the person on the home page.</li>
                            <li>Which will take them to the next page which will have link that will look like this <strong><code>/vishwall/username/write-wish</code></strong></li>
                            <li>This link can be shared with other mutual friends who can send their send their wishes using this link</li>
                            <li>Once sent, you can see all the wishes on a link which will look like this <strong><code>/vishwall/username/wishes</code></strong></li>
                            <li>To surprise the Birthday Person you can send them this link. I guess it will be be a nice and heartwarming moment, which is not something most of us are used to in the Pandemic.</li> 
                        </ul>
                    
                </div>
                </div>
                <div>
                    <Link to = '/vishwall' style = {{color : "white", stroke:"black"}}> <button className ={classes.HomeButton}>Go Back 🏠</button></Link>
                </div>
                
     
        </div>
    )
}

export default About