import React from 'react'
import axios from 'axios'
const Post = ({post}) => {
  return (
    <div>
        <h2>{post.id} - {post.title}</h2>
        <h2>{post.body}</h2>
    </div>
  )
}

export default Post

export async function getStaticPaths() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = res.data
    const paths = data.map(post => {

        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false

        
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    
    return {
        props:{
            post: res.data
        }
    }
}