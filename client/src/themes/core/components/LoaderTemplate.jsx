import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const LoaderTemplate = ({ className }) => {
    return (
        <CircularProgress className={className} />
    );
}

export default LoaderTemplate;