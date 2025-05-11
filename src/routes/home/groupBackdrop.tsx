import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import T from '../../localization/T';

interface GroupBackdropProps {
    open: boolean;
    toggle: () => void;
}

export const GroupBackdrop = ({ open, toggle }: GroupBackdropProps) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={toggle}>
            <Alert onClose={toggle} severity="info" sx={{ width: '100%' }}>
                <AlertTitle>
                    {T("group.backdrop.title")}
                </AlertTitle>
                {T("group.backdrop.text")}
                <Link style={{ textDecoration: "none", color: "white" }} to={"https://discord.gg/EzSD5sZN3M"}>Discord</Link>
            </Alert>
        </Snackbar >

    );
}