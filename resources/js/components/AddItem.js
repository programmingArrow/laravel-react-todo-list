import React, { Component } from 'react'
import axios from 'axios';

export default class AddItem extends Component {
    constructor(){
        super();
        
        this.state = {
            title: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('/api/items', {
            title: this.state.title,
            description: this.state.description
        }).then((response) => {
            this.setState({
                title: '',
                description: ''
            });

            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Add New Item</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="col-form-label">Title</label>
                                        <input className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                                    </div>
    
                                    <div className="form-group">
                                        <label className="col-form-label">Description</label>
                                        <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                                    </div>
                                    <button className="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
