import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

interface LoadingBackdropProps {
    open: boolean;
}

const LoadingBackdrop = ({ open }: LoadingBackdropProps) => {
    return (
        <Backdrop open={open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoadingBackdrop