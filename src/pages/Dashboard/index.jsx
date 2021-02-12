import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Sider from 'Components/Sider';

const Dashboard = () => {
    return (
        <div>
            <Header path="dashboard" />
            <Sider />
            Home
            <Link to="create">create documents</Link>
            <Footer />
        </div>
    );
};

export default Dashboard;
