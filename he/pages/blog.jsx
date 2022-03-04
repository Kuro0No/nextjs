import { getSession, useSession } from 'next-auth/react'
import React from 'react'

const Blog = ({ data }) => {
    const session = useSession()
    return (
        <div>{data}</div>
    )
}

export default Blog


export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http//localhost:3000/blog',
                permanent: false,
            },
        }
    }

    return {
        props: {
            data: session ? 'Blog has Session' : 'Blog dont have Session'
        }
    }


}