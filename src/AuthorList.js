import React from 'react';
import { NavLink } from 'react-router-dom';

class AuthorList extends React.Component {
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
        let renderAuthorList = () => {
            let authors = [];
            this.state.allSups.forEach(sup => {
                authors.push(sup.author);
            });
    
            let filteredAuthors = authors.filter((elem, pos, arr) => {
                return arr.indexOf(elem) === pos;
            });
            return (filteredAuthors.map(author =>
                <h3 key={author}><NavLink to={'/user/' + author}> {author} </NavLink></h3>
            )
            )
        };

        let UsersNavbar = () => <div><br /><br />
        {renderAuthorList()}
        </div>

        return <section>
        <div>

            <UsersNavbar />
            <NavLink to="/list">All Sups!</NavLink>
        </div>
        <div>
        
        
        </div>
    </section> 
    }
  }

export default AuthorList