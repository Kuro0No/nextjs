import React from 'react'
import axios from 'axios'

const NewsArticle = (props) => {
    const { article } = props
    return (
        <>
            <h2>News   Artical</h2>
            {article.map(art => {

                return <div key={art.id}>
                <h2>
                    {art.id} - {art.title} - | {art.category} | 
                </h2>
                </div>
            })}
        </>
    )
}

export default NewsArticle

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:4000/news')
    const data = res.data
    return {
        props: {
            article: data,

        }
    }

}