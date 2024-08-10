import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import UserListing from './components/UserListing';
import PostListing from './components/PostListing';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import "./app.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container fluid className='main-container'>
          <Row>
            <Col xs={12}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/users" element={<UserListing />} />
                  <Route path="/posts" element={<PostListing />} />
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
