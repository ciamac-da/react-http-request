import React, {Component} from 'react';
import axios from "../../../axios";

class Posts extends Component{
    
    state = {
        posts :[],
    }
    componentDidMount(){
        axios.get("/posts")
        .then(response =>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post =>{
                return {
                    ...post,
                    author: "Ciamac"
                }
            })
            this.setState({posts:updatedPosts})
        })
        .catch(error =>{
           // this.setState({ error : true })
           console.log(error)
        })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id})
     }
    render(){
       
        let posts = <p style={{textAlign:"center"}}>Something went wrong!</p>
        if(!this.state.error){
                posts = this.state.posts.map(post=>{
                return <Post 
                key={post.id} 
                author={post.author}  
                title={post.title}
                clicked={()=> this.postSelectedHandler(post.id)}
                />
            })

        }

        return(
            <section className="Posts">
            {posts}
            <Post />
            <Post />
          </section>
        )

    }
}