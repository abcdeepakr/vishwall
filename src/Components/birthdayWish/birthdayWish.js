import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import classes from './birthdayWish.module.css'
import * as actions from '../../Store/actions'

const BirthdayWish = (props) =>{
    //hooks
    let [name,setInputName] = useState('')
    let [wish,setInputWish] = useState('')
    let [submit, setSubmit] = useState(false)

    const onNameChangeHandler = (event) =>{
        setInputName(event.target.value)
    }
    const onWishChangeHandler = (event) =>{
        setInputWish(event.target.value)
    }
    const onSubmitHandler = () =>{
        setSubmit(!submit)
        props.onDynamicVisit(props.match.params.undefined)
    }

    var data = JSON.stringify({
        "operation":"insert",
        "schema" :  "project",
        "table":"birthday",
        "records": [
        {
            "id" : Math.random()*10000,
            "sender" : name.toLowerCase(),
            "receiver": props.userName,
            "wish": wish,
            submit : submit
        }
        ]
    });
//to get rid of infinite calls
    useEffect(() => {
        const fetchData = async () =>{ 
            var config = {
                method: 'post',
                url: 'https://wishmeluck-deepak.harperdbcloud.com',
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Basic ${process.env.REACT_APP_AUTHORIZATION}`
                },
                data : data
                };
            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    const timer  =setTimeout(() =>{
        fetchData();
    },0)
    return () => clearTimeout(timer);
    // eslint-disable-next-line
      }, [submit]);

    let disabledButtonColor = ""
    if(!submit){
        disabledButtonColor = "grey"
    }
    
    return (
        <div>
            <h4 style ={{marginTop : "0px"}}>
                *Share this link with other friends.<br />
            </h4>
            <input 
                className = {classes.Name} 
                type = "text" 
                placeholder = "Enter your Name(optional)"
                onChange = {event =>onNameChangeHandler(event)}
                style = {{fontSize : "24px"}}
                >
            </input> 
            <textarea 
                className = {classes.Wish} 
                name="message" rows="10" cols="30" 
                placeholder = {"Wish "+ props.match.params.undefined + " in your style" }
                onChange = {event =>onWishChangeHandler(event)}
                >
            </textarea>
            
            {submit ? <button onClick ={() =>onSubmitHandler()} style = {{backgroundColor : disabledButtonColor}} className={classes.ConfirmButton} disabled >Confirm Wish</button>:
                      <button onClick ={() =>onSubmitHandler()} className={classes.ConfirmButton} >Confirm</button>}
            
            <Link to = {`/vishwall/${props.userName}/wishes`}>
                {submit ? <button 
                    className = {classes.Button} 
                    onClick = {() => onSubmitHandler()}
                    >
                    Submit Wish
                </button> : 
                <button 
                style = {{backgroundColor : disabledButtonColor}}
                disabled
                className = {classes.Button} 
                onClick = {() => onSubmitHandler()}
                >
                Submit Wish
            </button>
                }
                
            </Link>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        userName : state.userName
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onDynamicVisit : (username) => dispatch(actions.addUsername(username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BirthdayWish)
