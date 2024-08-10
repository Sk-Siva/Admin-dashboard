import React, { useState } from 'react';
import { Table, Button, Row, Col, Card } from 'react-bootstrap';
import { posts as dummyPosts } from '../dummyData/dummyData';

import Sidebar from './Sidebar';

const PostListing = () => {
  const [posts, setPosts] = useState(dummyPosts);

  const totalPosts = posts.length;
  const recentPosts = posts.filter(post => post.published).length;

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleHide = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, published: false } : post
    ));
  };

  return (
    <div>
        <Row className="mb-4">
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}> 
      <h2 className="mb-4 text-center">POST LISTING</h2>
        <Row className="mb-4">
            <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Total Posts</Card.Title>
              <Card.Text>{totalPosts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Posts Published in the Last 24 Hours</Card.Title>
              <Card.Text>{recentPosts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.caption}</td>
              <td>{post.mediaUrl}</td>
              <td>
                <Button variant="danger" className="m-2" onClick={() => handleDelete(post.id)}>Delete</Button>
                <Button variant="warning" onClick={() => handleHide(post.id)}>Hide</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        </Col>
      </Row>
      
    </div>
  );
};

export default PostListing;
