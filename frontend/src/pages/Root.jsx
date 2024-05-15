import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <>
        <Navbar />
        <div className="div">
            <Outlet />
        </div>
        </>
       
    );
}

export default Root;
