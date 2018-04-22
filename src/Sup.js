import React from 'react';

let Sup = ({id, body, author, time})  =>  <div className="sup-post">
        <h3 className="sup-body">{body}</h3>
        <p className="sup-author">{author} | {time.toString()} </p>
    </div>

export default Sup