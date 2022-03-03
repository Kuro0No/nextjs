import React, { useState } from 'react'
import axios from 'axios'

const CommentsList = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const current = new Date

    const fetchComments = async () => {
        const resp = await axios.get('/api/comments')
        const data = resp.data
        setComments(data)

    }
    const submitComment = async () => {
        const resPost = await axios.post('api/comments', {
            text: comment
        })

        const resGet = await axios.get('api/comments')
        const data = resGet.data
    }
    const deleteComment = async(id) => {
        const resp = await axios.delete(`/api/comments/${id}`)
        const data = resp.data 
        fetchComments()
    }
    return (
        <div>
            <button onClick={fetchComments}>Load comments</button>
            <br />
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" />
            <button onClick={submitComment}>Submit</button>

            {comments.map(comment => {

                return <div key={comment.id} style={{display: 'flex'}}>
                    <h5 >
                        {comment.text}
                    </h5>
                    <button style={{
                        border: "none",
                        background: "#fff",
                        cursor: "pointer",
                        padding: "0 20px",
                    }} onClick={()=> deleteComment(comment.id)}>x</button>
                </div>
            })}
        </div >
    )
}

export default CommentsList