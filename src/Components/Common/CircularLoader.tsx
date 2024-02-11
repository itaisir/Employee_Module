import React from 'react';
import { MoonLoader } from "react-spinners";

interface CircularLoaderProps {
    color?: string;
    size?: number;
}

export default function CircularLoader(props: CircularLoaderProps) {
    const { color = '#007bff', size = 60 } = props;
    const style = {
        display: "block",
        margin: "0 auto",
        borderColor: "red"
    }
    return (
        <MoonLoader color={color} loading={true} cssOverride={style} size={size} />
    )
}