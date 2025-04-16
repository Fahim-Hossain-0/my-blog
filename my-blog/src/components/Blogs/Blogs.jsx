import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';



const Blogs = ({handleBookMark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setBlogs(data.posts))
    }, [])

    return (
        <div>
            <h1>blogs: {blogs.length}</h1>

            <div className="all-blog grid grid-cols-2 items-center">
                {
                    blogs.map(blog => <Blog handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>)
                }
            </div>

        </div>

    );
};

export default Blogs;