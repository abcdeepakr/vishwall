import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import BirthdayPerson from './Components/birthdayPerson/birthdayPerson';
import BirthdayWish from './Components/birthdayWish/birthdayWish';
import BirthdayWishDisplay from './Components/birthdayWishDisplay/birthdayWishDisplay';
import Error from './Components/Error/Error'
import About from './Components/About/About'
const App = (props) => {
  
  return (
    <div className="App"> 
      <Switch>
        <Route path = '/vishwall' exact component = {BirthdayPerson} />
        <Route path = '/vishwall/about' exact component = {About} />
        <Route path = {`/vishwall/:${props.username}/write-wish`} exact component = {BirthdayWish} />
        <Route path = {`/vishwall/:${props.username}/wishes`} exact component = {BirthdayWishDisplay}/>
        {console.log(props)}
        <Route component = {Error}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
      userName : state.userName
  }
}

export default connect(mapStateToProps)(App)