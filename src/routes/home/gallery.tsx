import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import WindowWrap from '../../layout/components/window/windowWrap'
import T from '../../localization/T'

const Gallery = () => {
    return (
        <Box className="bmain">
            <WindowWrap name={T("toolbar.gallery")} noPadding>
                <Grid container spacing={1}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography variant="h3" sx={{ textAlign: "center", marginTop: "20px" }}>{T("toolbar.gallery")}</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <WindowWrap>
                            <img src="g1.png" width="100%" height="400px" style={{ objectFit: "cover" }} />
                        </WindowWrap>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <WindowWrap>
                            <img src="g2.png" width="100%" height="400px" style={{ objectFit: "cover" }} />
                        </WindowWrap>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <WindowWrap>
                            <img src="g3.png" width="100%" height="400px" style={{ objectFit: "cover" }} />
                        </WindowWrap>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <WindowWrap>
                            <img src="g4.png" width="100%" height="400px" style={{ objectFit: "cover" }} />
                        </WindowWrap>
                    </Grid>
                </Grid>

            </WindowWrap>
        </Box >
    )
}

export default Gallery