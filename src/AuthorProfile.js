import React from 'react';
import Sup from './Sup';

class AuthorProfile extends React.Component {
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
        // console.log('userscreen props: ', props);
        let userSups = this.state.allSups.filter(sup => sup.author === this.props.match.params.author);
        let renderSups = () => {
            return (
                userSups.map(sup => (
                    <li key={sup.key}>
                        <Sup id={sup.key} body={sup.body} author={sup.author} time={(sup.time).toString()} />
                    </li>
                ))
            )
        }
        return <div><br /><br />
            <h2>
                {this.props.match.params.author} says:</h2>
            <ul>
                {
                    renderSups()
                }
            </ul>
        </div>
    };
};

export default AuthorProfile