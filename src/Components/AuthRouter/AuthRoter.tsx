import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';

const AuthRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
}
export default AuthRouter;
