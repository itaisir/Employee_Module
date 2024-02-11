import React from 'react';
import './CustomToast.css';
export default function CustomToast({ title, message }: { title: string, message: string }) {
    return (
        <div className="Toast__Container">
            <span style={{ fontSize: 14}}><b>{title}</b></span>
            <p style={{ marginTop: '1.2rem', fontSize: 14 }}>{message}</p>
        </div>
    );
};