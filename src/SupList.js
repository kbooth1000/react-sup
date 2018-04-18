import React from 'react';
import Sup from './Sup';
import SupsAPI from './sups-api';

let SupList = () => {
    return <div>
        <ul>
          {  
            SupsAPI.sups.map( sup=>(
                <li>
                    <Sup id={sup.key} body={sup.body} author={sup.author} time={(sup.time).toString()} />   
                </li>
            ))
            }
        </ul>
    </div>
};

export default SupList