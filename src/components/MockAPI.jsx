import React, { useState, useEffect } from 'react'
import { createServer } from 'miragejs'

const server = createServer()
server.get('/api/houses', {
  houses: [
    {
      id: 1,
      title: 'House 1',
      price: '$1.2M'
    },
    { id: 2, title: 'House 2', price: '4.2M' }
  ]
})

server.get('/api/blog', {
  blogs: [
    { id: 1, title: 'blog 1', author: 'Jay', excerpt: 'this is an excerpt' },
    { id: 2, title: 'blog 2', author: 'Khan', excerpt: 'a brief description' }
  ]
})

export default function MockAPI() {
  const [houses, setHouses] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/api/houses')
      .then((res) => res.json())
      .then((json) => {
        setHouses(json.houses)
      })
  }, [])

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((json) => {
        setBlogs(json.blogs)
      })
  }, [])

  return (
    <>
      <div className="flex bg-black text-white space-x-2 w-full justify-evenly py-20">
        {houses.map((house) => (
          <div key={house.id} className="border p-4 rounded border-white/20">
            <h1>{house.title}</h1>
            <p>{house.price}</p>
            <img src={house.img} alt="" width="500px" />
          </div>
        ))}
      </div>
      <div>
        {blogs.map((blog) => (
          <p key={blog.id}>{blog.title}</p>
        ))}
      </div>
    </>
  )
}
