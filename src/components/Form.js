import React, {Component} from 'react'


class Form extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         title: "",
    //         content: "" 
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }
    
    state = {
       title: "",
       content: "",
    }

    handleChange = (e) => {
        this.setState(
            // First argrument to setstate
            {
                // Looks at name of input field and sets the key
                // to whatever name 'content' / 'title'
                [e.target.name]: e.target.value,
            }
            // second argument
            // () => console.log("LOGGED FROM SETSTATE", this.state)
            )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)
        this.setState({title: "", content: ""})
    }


    render(){
        return(
          <div id="post-form">
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>Title: </label>
                      <input onChange={this.handleChange} name="title" type="text" value={this.state.title} /> 
                  </div>
                  <div>
                      <label>Content: </label>
                      <input type="text" name="content" onChange={this.handleChange} value={this.state.content} /> 
                  </div>
                  <button>Create Post</button>
              </form>
          </div>
        )
    }

}

export default Form




