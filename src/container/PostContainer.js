import React, { Component } from 'react'
import Form from '../components/Form'
import Post from '../components/Post'

class PostContainer extends Component {
    state={
        posts: []
    }

    addPost = (post) => {
        // Add posts from our form
        //         //concat makes new array
        //         // non destructive
        // // posts: this.state.posts.concat(data)
        
        
        
        // this.setState({
        //     posts: [post, ...this.state.posts]
        // })
        this.setState((prevState) => {
            return { 
                posts: [post, ...prevState.posts]
            }
        }, () => console.log("POST CONTAINER STATE: ", this.state))
    }

    render() {
        //this state posts = [{},{},{}]
                                            // |post| post.title
        const postsArray = this.state.posts.map((post) => <Post title={post.title} content={post.content} />)

        return (
            <div id="post-container">
                <h1>110921 BLOG POST App</h1><hr />
                <div>
                    <h3>Form</h3>
                    <Form addPost={this.addPost} />
                </div><hr />
                <div>
                    <h3>List</h3>
                    {postsArray}
                </div>
            </div>
        )
    }
}

export default PostContainer
