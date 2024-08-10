import React, { useState } from 'react';
import { Table, Button, Row, Col, Card, Modal, Form } from 'react-bootstrap';
import { users as dummyUsers } from '../dummyData/dummyData';
import Sidebar from './Sidebar';

const UserListing = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.active).length;

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleBanClick = (userId) => {
    setUsers(users.map(user => (user.id === userId ? { ...user, active: false } : user)));
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleSaveChanges = () => {
    if (selectedUser) {
      setUsers(users.map(user => (user.id === selectedUser.id ? selectedUser : user)));
    }
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div>
      <Row className="mb-4">
        <Col xs={3}>
          <Sidebar />
        </Col>
        
        <Col xs={9}>
          <h2 className="mb-4 text-center">USER LISTING</h2>  
          <Row className="mb-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text>{totalUsers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Users Active in the Last 24 Hours</Card.Title>
                  <Card.Text>{activeUsers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="warning" className="m-2" onClick={() => handleEditClick(user)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleBanClick(user.id)}>Ban</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username" 
                  value={selectedUser.username} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  value={selectedUser.name} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={selectedUser.email} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserListing;
