import React from 'react';
import Sup from './Sup';
import SupsAPI from './sups-api';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';


let UserScreen = (props) => {
    console.log('USERSCREEN');
    let userSups = SupsAPI.sups.filter( sup=> sup.author === props.match.params.author);
    let renderSups = ()=> {
        return (
            userSups.map( sup=>(
                <li key={sup.key}>
                    <Sup id={sup.key} body={sup.body} author={sup.author} time={(sup.time).toString()} />   
                </li>
            ))
        )
    }
    return <div><br/><br/>
    <h2> hey
    {props.match.params.author}</h2>
        <ul>
          {
            renderSups()
            }
        </ul>
    </div>
  };

export default UserScreen