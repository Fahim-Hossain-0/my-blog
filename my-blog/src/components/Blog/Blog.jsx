import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog,handleBookMark }) => {
    // console.log(blog);
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtag } = blog
    return (
        <div className='m-2 '>
            total id:{id}

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='w-fit'
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p>{author}</p> */}
                    <div className='flex items-center gap-10 justify-center'>
                        <h3>{author}</h3>
                        {/* <h3>{blog}</h3> */}
                        <img className='w-16 rounded-full' src={author_img} alt="" />
                        <button onClick={()=>handleBookMark(blog)}><FaRegBookmark />
                        </button>
                    </div>
                    <div className='flex'>
                        {hashtag.map(hash => <p>{hash}</p>)}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">book marked</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;