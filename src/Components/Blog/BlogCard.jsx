import React from 'react'

const BlogCard = ({myblog}) => {
    const {title , blog , date} = myblog || {};
    console.log(myblog);
  return (
    <div>
        <div  className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{title || ''}</h3>
            <p className="text-gray-700 mb-2">{blog || ''}</p>
            <p className="text-sm text-gray-400">{date || ''}</p>
          </div>
    </div>
  )
}

export default BlogCard