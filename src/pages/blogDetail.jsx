// BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getBlogs } from '../firebase/firebase'; // Function to fetch all blogs
import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import "../style/pages/Home/_showBlog.scss";
import "../style/pages/Home/_blogDetail.scss";
import { Spinner } from 'react-bootstrap';


export default function BlogDetail() {
    const { id } = useParams(); // Get the blog ID from the URL
    // const history = useHistory();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await getBlogs();
                // Filter the blog data based on the ID
                const selectedBlog = blogsData.find((blog) => blog.id === id);
                setBlog(selectedBlog);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [id]);

    // const handleBack = () => {
    //     history.goBack(); // Navigate back to the previous page
    // };

    if (loading) {
        return <div className="text-center mt-5">
            <Spinner animation="border" role="status" variant="light" />
        </div>;
    }

    if (!blog) {
        return <div>No blog found</div>;
    }

    return (
        <div className="container mt-5">
            {/* <div className="back-arrow" onClick={handleBack} style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <FaArrowLeft size={24} color="#000" /> Back
            </div> */}
            <div className="card blog-detail-card">
                <img src={blog.imageUrl} className="card-img-top" alt={blog.blogName} />
                <div className="card-body">
                    <h2 className="card-title">{blog.blogName}</h2>
                    <p className="card-text">{blog.blogDescription}</p>
                </div>
            </div>
        </div>
    );
}
