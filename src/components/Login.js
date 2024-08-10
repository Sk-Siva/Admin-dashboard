import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Reset error message
    setError('');
    
    // Call the login function and navigate on successful login
    login();
    navigate('/');
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 border border-light shadow rounded">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="mb-4 text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            
          {error && <p className="text-danger">*{error}</p>}
            <div className="d-flex justify-content-center">
              <Button className="btn btn-primary w-50 m-2" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;