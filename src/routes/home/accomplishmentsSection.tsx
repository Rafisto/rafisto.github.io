import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ContactPage } from "@mui/icons-material";
import React from "react";
import WindowWrap from "../../layout/components/window/windowWrap";
import Achievement from "./achievement";

import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BalanceIcon from "@mui/icons-material/Balance";
import T from "../../localization/T";
import { useNavigate } from "react-router-dom";

const AccomplishmentsSection = () => {
    const navigate = useNavigate();
    const Achievements = [
        {
            name: T("jumbo.atitle1"),
            description: T("jumbo.adesc1"),
            icon: <MilitaryTechIcon />,
        },
        {
            name: T("jumbo.atitle2"),
            description: T("jumbo.adesc2"),
            icon: <MilitaryTechIcon />,
        },
        {
            name: T("jumbo.atitle3"),
            description: T("jumbo.adesc3"),
            icon: <DeveloperBoardIcon />,
        },
        {
            name: T("jumbo.atitle4"),
            description: T("jumbo.adesc4"),
            icon: <BalanceIcon />,
        },
        {
            name: T("jumbo.atitle5"),
            description: T("jumbo.adesc5"),
            icon: <BalanceIcon />,
        },
        {
            name: T("jumbo.atitle6"),
            description: T("jumbo.adesc6"),
            icon: <BalanceIcon />,
        },
    ];
    return (
        <Box className="bmain">
            <WindowWrap name={T("jumbo.successes.and.achievements")} noPadding>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img
                            className="brimg"
                            src="banner.successes.png"
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: "cover",
                                objectPosition: "0px 0px",
                            }}
                        ></img>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        marginTop: "30px",
                                        textAlign: "center",
                                    }}
                                >
                                    {T("jumbo.achievements")}
                                </Typography>
                            </Grid>

                            {Achievements.map((achievement, index) => {
                                return (
                                    <Grid key={index} item xs={12} md={6}>
                                        <Achievement
                                            achievement={achievement}
                                        />
                                    </Grid>
                                );
                            })}
                            <Grid item xs={12}>
                                <IconButton sx={{float:"right", margin:"10px", padding:"10px"}} onClick={()=>navigate('/cv')}>
                                    <ContactPage />
                                    <Typography>Curiculum Vitae</Typography>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </WindowWrap>
        </Box>
    );
};

export default AccomplishmentsSection;
