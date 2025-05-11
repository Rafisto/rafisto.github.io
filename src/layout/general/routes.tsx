import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PersonIcon from '@mui/icons-material/Person';

export const Routes = [
    {
        name: 'toolbar.home',
        link: '/',
        icon: <HomeIcon />
    },
    {
        name: 'toolbar.projects',
        link: '/projects',
        icon: <AccountTreeIcon />
    },
    {
        name: 'toolbar.accomplishments',
        link: '/accomplishments',
        icon: <WorkspacePremiumIcon />
    },
    // {
    //     name: 'toolbar.electronics',
    //     link: '/electronics',
    //     icon: <ElectricBoltIcon />
    // },
    {
        name: 'toolbar.contact',
        link: '/contact',
        icon: <PersonIcon />
    },
]