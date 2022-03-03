import React from 'react'
import { comments } from '../../data/comments'

const commentId = ({comment}) => {
  return (
    <div>{comment.text}</div>
  )
}

export default commentId

export function getStaticPaths() {

    return {
        paths: [
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}},
        ],
        fallback: false
    }
}

export function getStaticProps(context) {
    const {params} = context 
    const {commentId} = params
    const comment = comments.find(comment => {
        return comment.id === parseInt(commentId)
        
    })
    
    return {
        props: {
            comment,
        }
    }
}