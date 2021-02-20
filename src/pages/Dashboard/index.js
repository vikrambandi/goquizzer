import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Sider from 'Components/Sider';

const Dashboard = () => (
    <Layout>
        <Header path="dashboard" />
        <Layout>
            <Sider />
            <Layout.Content>
                Home
                <Link to="create">create documents</Link>
            </Layout.Content>
        </Layout>
        <Footer />
    </Layout>
);

export default Dashboard;
