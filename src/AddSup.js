import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addSup } from "./actions";

let mapDispatchToProps = dispatch => {
    return { addSup: sup => dispatch(addSup(sup)) };
};

class ConnectedAddSupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '', key:'',
            author: 'Louise',
            time:new Date()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        let {body} = this.state,
             key = uuidv1(),
             {author} = this.state.author,
             time = new Date();
        this.props.addSup( {body, key, author, time });
        this.setState({ body: '' });
    }

    render() {
        let { body } = this.state;
        return(
        <form onSubmit = {this.handleSubmit}>
            <div className = "form-group">
                <label htmlFor="body">Wassup?</label>
                <input type="text" className="form-control" id="body" value={body} onChange={this.handleChange} />
                </div>
                <button type ="submit" className = "btn btn-success">
                    Save
                    </button>
                    </form>
                    );
    }
}

let AddSup = connect(null, mapDispatchToProps)(ConnectedAddSupForm);

export default AddSup;;
