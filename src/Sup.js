import React from 'react';
import moment from 'moment';

let Sup = ({id, body, author, time})  =>  <div className="sup-post">
        <h3 className="sup-body">{body}</h3>
        <p className="sup-author">{author} | {moment(time).toString()} </p>
    </div>

export default Sup