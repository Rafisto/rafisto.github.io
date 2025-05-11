import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Divider, Grid, ListItemButton, Typography } from '@mui/material';
import T from '../../localization/T';
import WindowWrap from '../../layout/components/window/windowWrap';
import PanelStyledLink from '../../style/panelStyledLink';
import Availability from './availability';

const contact = [
  {
    name: 'GitHub Rafisto',
    link: 'https://github.com/Rafisto',
    icon: <GitHubIcon />
  },
  {
    name: 'LinkedIn Rafał Włodarczyk',
    link: 'https://www.linkedin.com/in/rafal-wlodarczyk/',
    icon: <LinkedInIcon />
  },
  {
    name: 'Youtube Admin1',
    link: 'https://www.youtube.com/channel/UCKfsZesQpYanHjMU5yNcDNA',
    icon: <YouTubeIcon />
  },
  {
    name: 'Instagram @rafist0',
    link: 'https://www.instagram.com/rafist0/',
    icon: <InstagramIcon />
  },
  {
    name: 'Facebook Rafał Włodarczyk',
    link: 'https://www.facebook.com/Rafist0',
    icon: <FacebookIcon />
  },
  {
    name: 'Email',
    link: 'mailto:1.rafal.wlodarczyk@gmail.com',
    icon: <EmailIcon />
  }
]

interface ContactItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const Contact = () => {
  return (
    <Box className="bmain">
      <WindowWrap name={T("toolbar.contact")}>
        <Box sx={{ padding: "20px" }}>
          <Typography style={{ textAlign: "center" }} variant="h4">{T("toolbar.contact")}</Typography>
          <Divider sx={{ marginBlock: "20px" }} />
          <Grid container spacing={1}>
            {contact.map((item: ContactItem, index: number) => (
            <PanelStyledLink key={index} name={item.name} link={item.link} icon={item.icon} />
            ))}
          </Grid>
          <Availability/>
        </Box>
      </WindowWrap>
    </Box>
  )
}

export default Contact