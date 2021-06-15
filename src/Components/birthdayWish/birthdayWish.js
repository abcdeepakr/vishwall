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
    let [submit, setSubmit] = useState('')

    const onNameChangeHandler = (event) =>{
        setInputName(event.target.value)
    }
    const onWishChangeHandler = (event) =>{
        setInputWish(event.target.value)
    }
    const onSubmitHandler = (event) =>{
        setSubmit(event.target.value)
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
                    'Authorization': 'Basic ZGVlcGFrcmF3YXQ6bHVja3lsdWNrMTIz'
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
    
    return (
        <div>
            <input 
                className = {classes.Name} 
                type = "text" 
                placeholder = "Enter your name"
                onChange = {event =>onNameChangeHandler(event)}
                >
            </input> 
            <textarea 
                className = {classes.Wish} 
                name="message" rows="10" cols="30" 
                placeholder = {"Wish "+ props.match.params.undefined + " in your style" }
                onChange = {event =>onWishChangeHandler(event)}
                >
            </textarea>

            <input 
                type = "text" 
                onChange ={event => onSubmitHandler(event)} 
                required 
                maxLength="1" 
                placeholder ="type Y to send your wish"
                className = {classes.SubmitConfirmation}
                />
            <Link to = {`/${props.userName}/wishes`}>
                <button 
                    className = {classes.Button} 
                    onClick = {onSubmitHandler}>
                    Submit Wish
                </button>
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