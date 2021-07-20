import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div id="post">
                <h1>Title: {this.props.title}</h1>
                <img src={this.props.content} width="100px"/>
            </div>
        )
    }
}

export default Post
