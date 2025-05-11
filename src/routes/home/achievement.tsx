import { Box, Typography } from '@mui/material'
import React from 'react'
import GradientDivider from '../../style/gradientDivider';

interface AchievementProps {
    achievement: {
        name: string;
        description: string;
        icon: JSX.Element;
    }
}

const Achievement = ({ achievement }: AchievementProps) => {
    const Component = achievement.icon.type
    return (
        <Box sx={{ margin: "30px", marginLeft: "0", padding: "10px" }}>
            <Component style={{ fontSize: "30pt" }} />
            <Typography variant="h5" sx={{ marginBottom: "5px" }}>{achievement.name}</Typography>
            <GradientDivider />
            <Typography sx={{ marginTop: "10px" }}>{achievement.description}</Typography>
        </Box>
    )
}

export default Achievement