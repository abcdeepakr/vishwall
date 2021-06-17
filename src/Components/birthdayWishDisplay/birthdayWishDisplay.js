import React from 'react'
import {connect} from 'react-redux'
import {useHarperDB} from 'use-harperdb'

import classes from './birthdayWishDisplay.module.css'

const BirthdayWishDisplay = (props) =>{

    console.log("PROPS : " , props)
    let url = props.match.url.split('')
    let receiver = url.slice(10,url.lastIndexOf('/')).join('')
    // eslint-disable-next-line
    const [data,loading,error,refresh] = useHarperDB({
        query : {
            operation : 'sql',
            sql :  `select * from project.birthday where receiver = "${receiver}" and sender<>"" `
        }
    })
    let wishes = ""
    if(!data){
        wishes = "Loading wishes..."
    }
    if(data){
        wishes = (data.map((item,index) =>{
            return (
                <div key ={index} className = {classes.WishContainer}>
                    <h3>from: {item.sender}</h3>
                    <h3>Wish: {item.wish}</h3>
                </div>
            )
        }))
    }
    else{
        wishes = ""
    }
    console.log( "[ERROR] : " ,error)
    
    return (
        <div>
            {wishes ? <h1>Happy Birthday {props.match.params.undefined} Your friends have sent some lovely wishes</h1> :
                      <h1>Happy Birthday {props.match.params.undefined}, Have a blast</h1> }
            
            <div className ={classes.Container} >
            <div className ={classes.Static}>From one stranger to another I'd like to say,<br />
                                            I hope that you have a very Happy birthday.<br />
                                            I remember when I was just twenty-five,<br />
                                            the world at my feet made me feel so alive.<br />
                                            <br />
                                            Your adventures in life have barely begun,<br />
                                            the next few years will be the most fun.<br />
                                            Finding your soul mate and building on love,<br />
                                            going the distance when push comes to shove.<br />
                                            <br />
                                            As we grow older we start to see clearly,<br />
                                            all that's important and value it dearly.<br />
                                            Cling to the days that unfold before you now,<br />
                                            they'll be over before you know it, this I vow.<br />
                                            <br />
                                            So celebrate your birthday with those you hold dear,<br />
                                            and don't forget to end your night with some of the cheer.<br />
                                            As your night ends I hope you remember that I stopped to say,<br />
                                            that I hope that you have a very happy birthday!<br /><br /><br />
                                            <i style = {{color : "grey"}}>by Kelly Levi</i>        
                                    </div>
                {wishes}
                
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        userName : state.userName
    }
}

export default connect(mapStateToProps)(BirthdayWishDisplay)