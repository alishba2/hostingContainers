import React, { useState, useEffect } from 'react';
import { addBlog, getBlogs, deleteBlog } from '../firebase/firebase'; // Import necessary functions
import "../style/pages/Home/_blog.scss";
import { Modal, Button } from 'antd';
import { notification } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; // Importing back arrow icon

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [blogName, setBlogName] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const blogsData = await getBlogs();
            setBlogs(blogsData);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!blogName || !blogDescription || !imageFile) {
            alert('Please fill out all fields');
            return;
        }

        setLoading(true);
        try {
            await addBlog(blogName, blogDescription, imageFile);
            notification.success({
                message: "Success",
                description: "Blog saved successfully!",
            });
            setBlogName('');
            setBlogDescription('');
            setImageFile(null);
            fetchBlogs(); // Refresh blog list
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('Error adding blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        await deleteBlog(id);
        notification.success({
            message: "Success",
            description: "Blog deleted successfully!",
        });
        fetchBlogs(); // Refresh blog list
    };

    const handleShowDescription = (blog) => {
        setSelectedBlog(blog);
    };

    const handleCloseModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="container mt-5" style={{ padding: '40px' }}>
            <h2 className="mb-4">Blogs</h2>
            {showForm ? (
                <div>
                    <Button
                        className="mb-3"
                        onClick={() => setShowForm(false)}
                        icon={<ArrowLeftOutlined />}
                    >
                        Back
                    </Button>
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm" style={{ backgroundColor: 'transparent' }}>
                        <div className="mb-3">
                            <label className="form-label">Blog Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blogName}
                                onChange={(e) => setBlogName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Blog Description</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={blogDescription}
                                onChange={(e) => setBlogDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Blog Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(e) => setImageFile(e.target.files[0])}
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Submitting...' : 'Add Blog'}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <>
                    <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Blog</button>
                    <table className="blog-table" style={{ border: '1px solid #ccc', backgroundColor: 'transparent', padding: '40px' }}>
                        <thead>
                            <tr>
                                <th>Blog Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.length > 0 ? blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.blogName}</td>
                                    <td>{blog.blogDescription.split(' ').slice(0, 15).join(' ') + '...'}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>Delete</button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="3">No blogs available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}

            {/* Modal for displaying full blog description */}
            <Modal
                title="Blog Description"
                visible={selectedBlog !== null}
                onCancel={handleCloseModal}
                footer={<Button onClick={handleCloseModal}>Close</Button>}
            >
                {selectedBlog && (
                    <>
                        <h3>{selectedBlog.blogName}</h3>
                        <p>{selectedBlog.blogDescription}</p>
                        <img src={selectedBlog.imageUrl} alt={selectedBlog.blogName} style={{ width: '100%' }} />
                    </>
                )}
            </Modal>
        </div>
    );
}
