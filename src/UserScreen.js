import React from 'react';
import Sup from './Sup';
import SupsAPI from './sups-api';


let UserScreen = (props) => {
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
    <h2>
    {props.match.params.author} says:</h2>
        <ul>
          {
            renderSups()
            }
        </ul>
    </div>
  };

export default UserScreen