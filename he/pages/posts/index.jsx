import React from 'react'
import axios from 'axios'
import Link from 'next/link'
const index = (props) => {
    const { posts } = props
    return (
        <div>
            {posts.map(post => {

                return <Link key={post.id} href={`/posts/${post.id}`} passHref>

                    <h5 >
                        {post.id} - {post.title}
                    </h5>
                </Link>
            })}
        </div>
    )
}

export default index

export async function getStaticProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = res.data

    return {
        props: {
            posts,
        }
    }
}