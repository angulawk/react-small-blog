import React, { Component } from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.post || (this.state.post && this.props.id !== this.state.post.id)) {
                axios.get(`/posts/${this.props.id}`)
                    .then(response => {
                        this.setState({
                            post: response.data
                        })
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(response => {
                console.log("response", response)
            })
    }

    render () {
        let post = <p>Please select a Post!</p>;

        if(this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;