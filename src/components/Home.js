import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import Sidebar from './Sidebar';
import { users, posts } from '../dummyData/dummyData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const activeUsers = users.filter(user => user.active).length;
  const recentPosts = posts.filter(post => post.published).length;

  const data = {
    labels: ['Total Users', 'Active Users', 'Total Posts', 'Published Posts'],
    datasets: [
      {
        label: 'KPIs',
        data: [totalUsers, activeUsers, totalPosts, recentPosts],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FF7043', '#FFEB3B'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'App Performance Chart',
      },
    },
  };

  return (
    <div>   
      <Row className="justify-content-center">
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <h1 className="mb-4 text-center">DASHBOARD</h1>
          <Row className="justify-content-center">
            <Col md={12} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <Bar data={data} options={options} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
  <Col md={3} className="mb-4">
    <Card className="text-center shadow" style={{ height: '100%' }}>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>Total Users</Card.Title>
        <Card.Text className='fw-bold'>{totalUsers}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3} className="mb-4">
    <Card className="text-center shadow" style={{ height: '100%' }}>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>Total Posts</Card.Title>
        <Card.Text className='fw-bold'>{totalPosts}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3} className="mb-4">
    <Card className="text-center shadow" style={{ height: '100%' }}>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>Users Active in the Last 24 Hours</Card.Title>
        <Card.Text className='fw-bold'>{activeUsers}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3} className="mb-4">
    <Card className="text-center shadow" style={{ height: '100%' }}>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>Posts Published in the Last 24 Hours</Card.Title>
        <Card.Text className='fw-bold'>{recentPosts}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
            </Row>

        </Col>
      </Row>
    </div>
  );
};

export default Home;