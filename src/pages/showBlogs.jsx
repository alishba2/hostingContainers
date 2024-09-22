import React, { useState, useEffect } from 'react';
import { getBlogs } from '../firebase/firebase'; // Assuming this function fetches the blogs from Firestore
import "../style/pages/Home/_showBlog.scss";
import { Spinner } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon

export default function ShowBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog for full details view

    // Fetch blogs when the component mounts
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await getBlogs();
                setBlogs(blogsData);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Handle selecting the blog to view details
    const handleCardClick = (blog) => {
        setSelectedBlog(blog);
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status" variant="light" />
            </div>
        );
    }

    return (
        <div className="container mt-5 show-blogs">
            {/* Introductory text */}
            <div className="intro-text">
                <h2 className="text-center mb-4">Our Latest Blogs</h2>
            </div>

            {!selectedBlog ? (
                <div className="row mt-5">
                    {blogs.map((blog) => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <div
                                className="card blog-card h-100"
                                onClick={() => handleCardClick(blog)}
                            >
                                <img
                                    src={blog.imageUrl}
                                    className="card-img-top"
                                    alt={blog.blogName}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.blogName}</h5>
                                </div>
                                {/* Overlay for hover effect */}
                                <div className="overlay">
                                    <div className="overlay-text">Read More</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="blog-details">
                    <div
                        className="back-arrow"
                        onClick={() => setSelectedBlog(null)}
                        style={{ cursor: 'pointer', marginBottom: '20px' }}
                    >
                        <FaArrowLeft size={24} color="#ffffff" /> {/* Back arrow */}
                    </div>
                    <div className="card blog-detail-card">
                        <img
                            src={selectedBlog.imageUrl}
                            className="card-img-top"
                            alt={selectedBlog.blogName}
                        />
                        <div className="card-body">
                            <h2 className="card-title">{selectedBlog.blogName}</h2>
                            <p className="card-text">{selectedBlog.blogDescription}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
