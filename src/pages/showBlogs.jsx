import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { getBlogs } from '../firebase/firebase'; // Assuming this function fetches the blogs from Firestore
import "../style/pages/Home/_showBlog.scss";
import { Spinner } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export default function ShowBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation(); // Initialize translation hook

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
            {blogs.length > 0 && <div className="intro-text">
                <h2 className="text-center mb-4">{t('latestBlogs')}</h2>
            </div>}

            <div className="row mt-5">
                {blogs.map((blog) => (
                    <div className="col-md-4 mb-4" key={blog.id}>
                        <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card blog-card h-100">
                                <img
                                    src={blog.imageUrl}
                                    className="card-img-top"
                                    alt={blog.blogName}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.blogName}</h5>
                                    <p className="card-text">
                                        {blog.blogDescription
                                            .split(' ')                // Split the description into an array of words
                                            .slice(0, 15)              // Get the first 15 words
                                            .join(' ')                 // Join them back into a string
                                        }
                                        {blog.blogDescription.split(' ').length > 15 && '...'}
                                    </p>
                                </div>

                                {/* Overlay for hover effect */}
                                <div className="overlay">
                                    <div className="overlay-text">Read More</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
