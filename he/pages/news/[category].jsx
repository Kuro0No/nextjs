import React from 'react'
import axios from 'axios'

const artByCategory = (props) => {
    const {article, category} = props

  return (<>
    <div>artByCategory</div>
    {article.map(art => {

        return(
            <div key={art.id}>
                <h2>{art.id} - {art.title}</h2>
                <p>{art.description}</p>
                <hr/>
            </div>
        )
    })}
  </>
  )
}

export default artByCategory

export async function getServerSideProps(context) {
    const {params,res,req,query} = context
    console.log(context)
    const {category} = params
    const resp = await axios.get(`http://localhost:4000/news?category=${category}`)
    const data = resp.data 

    return {
        props: {
            article: data,
            category
        }
    }
}