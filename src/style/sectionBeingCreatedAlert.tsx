import { Alert, AlertTitle, Box } from '@mui/material'
import React from 'react'
import T from '../localization/T';
import { Link } from 'react-router-dom';

const SectionBeingCreatedAlert = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box maxWidth="lg" margin="auto" sx={{ padding: "20px" }}>
            <Alert onClose={handleClose} severity="warning" sx={{ display: (open) ? 'flex' : 'none' }}>
                <AlertTitle>{T("alert.sectionCreatingTitle")}</AlertTitle>
                {T("alert.sectionCreating")}&nbsp;
                <Link style={{ textDecoration: "none", color: "white" }} to="/"><span>{T("alert.backtomain")}</span></Link>
            </Alert>
        </Box>
    )
}

export default SectionBeingCreatedAlert