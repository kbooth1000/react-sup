import React from 'react';
import moment from 'moment';
import SupsAPI from './sups-api';

let Sup = ({id, body, author, time})  => {console.log('id--: ', id);

console.log('supKey', supKey);
    let supKey=id.toString();
    let thisSup = SupsAPI.sups.find( sup => sup.key===supKey );
    
    return <div className="sup-post">
        <h2 className="sup-body">{body}</h2>
        <p className="sup-author">{author} | {time} </p>
    </div>
}

export default Sup