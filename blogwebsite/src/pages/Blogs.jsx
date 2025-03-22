import React from 'react'
import BlogPage from '../components/Blogpage'

const Blogs = () => {
  return (
    <div>
    <div className='py-40 bg-black text-center text-white px-4'>
  <h1 className='text-5xl lg:text-4xl leading-snug font-bold mb-5'>Welcome To Our Blog page</h1>
    </div>

    {/*blog page */}
    <div className='max-w-7xl mx-auto'>
      <BlogPage/>
    </div>
    </div>
  )
 }
 
export default Blogs