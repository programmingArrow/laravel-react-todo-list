import React, { Component } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ItemList extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
        }
    }    

    componentDidMount()
    {
        axios.get('/api/items')
        .then((response) => {
            this.setState({
                items: response.data.items
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleDelete(item) {
        confirmAlert({
            title: "Confirm to Delete",
            message: "Are you sure you want to perform this action?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios
                            .delete(`/api/items/${item.id}`)
                            .then(response => {
                                // console.log(response);
                                this.setState({
                                    items: response.data.items
                                });
                            })
                            .catch(function(error) {
                                console.log(error);
                            });
                    }
                },
                {
                    label: "No",
                    onClick: () => { console.log('No') }
                }
            ]
        });
    }

    handleCompleted(item){
        // console.log(item);
        axios
            .post(`/api/items/${item.id}/mark-as-completed`)
            .then(response => {
                // console.log(response);
                this.setState({
                    items: response.data.items
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container my-5">
                <ul className="list-group list-group-flush">
                    {this.state.items.length === 0 ? 'Loading...' : this.state.items.map(item => {
                        const itemTitle = item.completed === 1 ? <strike>{item.title}</strike> : item.title;
                        const completedButton = item.completed === 0 ? <button
                            className="btn btn-success btn-sm mx-1"
                            onClick={() => this.handleCompleted(item)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button> : '';
                        return (
                            <li key={item.id} className="list-group-item">
                                <div className="d-flex">
                                    {itemTitle}
                                    <span className="ml-auto">
                                        {completedButton}
                                        <button className="btn btn-primary btn-sm mx-1">
                                            <i
                                                className="fa fa-pencil"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm mx-1"
                                            onClick={() =>
                                                this.handleDelete(item)
                                            }
                                        >
                                            <i
                                                className="fa fa-trash"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
