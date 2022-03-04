import React from 'react'
import { getSession, signIn } from 'next-auth/react'


const Dashboard =   () => {
    const [loading, setLoading] = React.useState(true)
  
    React.useEffect(() => {
        const securyPage = async () => {
            const session =await getSession()
            if(!session) {
                signIn()
            } else {
                setLoading(false)
            }
        }
        securyPage()
    },[])
    if(loading) {
        return <h2>Loading....</h2>
    }

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard