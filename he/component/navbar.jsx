import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.scss'
import { signIn, signOut, useSession } from "next-auth/react"



const Navbar = () => {
    const { data: session, status } = useSession()
    return (
        <div className={`${styles.navbar} `}>
            {/* className={`${!session && status !== 'authenticated' ?  styles.loading :  styles.loaded}`} */}
            <ul >
                <li>
                    <Link href={`/`}>Home</Link>
                </li>
                <li>
                    <Link href={`/comments`}>Comments</Link>
                </li>
                <li>
                    <Link href={`/news`}>News</Link>
                </li>
                <li>
                    <Link href={`/posts`}>Posts</Link>
                </li>
                <li>
                    <Link href={`/dashboard`}>Dashboard</Link>
                </li>
                <li>
                    <Link href={`/blog`}>Blog</Link>
                </li>
                {status !== 'authenticated' && !session && (

                    <li>
                        <Link href={`/api/auth/signin`}>
                            <a onClick={e => {
                                e.preventDefault()
                                signIn('github')
                            }}>
                                Sign In
                            </a>
                        </Link>

                    </li>
                )}
                {session && status !== 'unauthenticated' && (
                    <li>

                        <Link href={`/api/auth/signout`}>
                            <a onClick={e => {
                                e.preventDefault()
                                signOut()
                            }}>
                                Sign out
                            </a>
                        </Link>
                    </li>
                )}


            </ul>
        </div >
    )
}

export default Navbar