import React, { useState, useEffect } from 'react';

const Blogpage = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blog`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    }, [])

    console.log(blogs)
    return (
        <div>Blogpage</div>
    )
}

export default Blogpage