import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import './footer.css';

const Footer = () => {
    const githubRoute = () => {
        window.location.href = "https://github.com/Rafisto";
    }
    return (
        <div className="footer">
            <Typography onClick={githubRoute} sx={{cursor:"pointer"}}>Rafisto <GitHubIcon sx={{ fontSize: "12pt" }} /> 2023</Typography>
        </div>
    )
}

export default Footer