import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            Home
            <Link to="add">Add documents</Link>
            <Footer />
        </div>
    );
};

export default Home;
