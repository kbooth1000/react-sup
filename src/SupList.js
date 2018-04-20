import React from 'react';
import Sup from './Sup';

class SupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSups: [],
            sortBy: 'time'
        }
    }

    getData = () => fetch('http://localhost:3000/db')
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState({ allSups: responseJSON.sups });
        })
        .catch((error) => {
            console.error(error);
        });

    componentDidMount() {
        this.getData();
    };

    render() {
        return <div>
            <ul>
                {
                    this.state.allSups.map(sup => (
                        <li key={sup.key}>
                            <Sup id={sup.key} body={sup.body} author={sup.author} time={(sup.time).toString()} />
                        </li>
                    ))
                }
            </ul>
        </div>
    };
};

export default SupList