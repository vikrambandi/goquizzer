import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './styles.module.scss';

export default function Header({ path }) {
    return (
        <Layout.Header className={styles.header}>
            <div className="logo" />
            <Menu mode="horizontal" defaultSelectedKeys={[path]}>
                <Menu.Item key="home">
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

Header.propTypes = {
    path: PropTypes.string.isRequired
};
