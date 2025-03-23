import React, { useState, useEffect } from 'react';

const Blogpage = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;
            const response = await fetch(url);
            const data = await response.json();
    
            setBlogs(data);
        }
        fetchBlogs();
    }, [])

    
    return (
        <div>Page category</div>
    
    )
}

export default Blogpage