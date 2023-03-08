import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className='container'>
      {data.map((item , index)=>{
        return <div key={index}>
          <h1>{item.title}</h1>
          <h1>{item.body}</h1>
          <hr />
        </div>
      })}
    </div>
  )
}

export default Home