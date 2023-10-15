
import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/krishkumar84')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-600 text-white text-3xl  p-4 text-center'>
    GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="" />
  </div>
  )
}

export default Github
