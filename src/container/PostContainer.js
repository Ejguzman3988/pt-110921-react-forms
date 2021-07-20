import React, { Component } from 'react'
import Form from '../components/Form'

class PostContainer extends Component {
    render() {
        return (
            <div id="post-container">
                <h1>110921 BLOG POST App</h1>
                <hr></hr>
                <h3>Form</h3>
                <Form />
                <hr></hr>
                <h3>List</h3>
                <li>post1</li>
                <li>post2</li>
                <li>post3</li>
                <li>post4</li>

            </div>
        )
    }
}

export default PostContainer
