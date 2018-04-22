import React from 'react';
import Sup from './Sup';
import { connect } from 'react-redux';
import AddSup from './AddSup';

let mapStateToProps = state => {
    return { allSups: state.allSups };
};

let ConnectedSupList = ( { allSups }) => <div>
    <ul>
        {
            allSups.map(sup => (
                <li key={sup.key}>
                    <Sup id={sup.key} body={sup.body} author={sup.author} time={(sup.time).toString()} />
                </li>
            ))
        }
    </ul>
    <AddSup />
</div>;

let SupList = connect(mapStateToProps)(ConnectedSupList);

export default SupList