import React from 'react';
import Sup from './Sup';
import SupsAPI from './sups-api';


let UserScreen = (props) => {
    console.log('userscreen props: ', props);
    let userSups = props.supData.filter( sup=> sup.author === props.supData.author);
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
    {userSups.author} says:</h2>
        <ul>
          {
            renderSups()
            }
        </ul>
    </div>
  };

export default UserScreen