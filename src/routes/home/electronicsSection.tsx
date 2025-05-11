import { Box, Button, ButtonGroup, Grid, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import WindowWrap from '../../layout/components/window/windowWrap'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import T from '../../localization/T';
import TypeText from '../../layout/components/window/typeText';
import { GroupBackdrop } from './groupBackdrop';

const ElectronicsSection = () => {
  const [openGroup, setOpenGroup] = React.useState(false);
  const toggleOpenGroup = () => {
    setOpenGroup(!openGroup);
  }

  return (
    <Box className="bmain">
      <GroupBackdrop open={openGroup} toggle={toggleOpenGroup}></GroupBackdrop>
      <WindowWrap name={T("jumbo.electronics.classes")} noPadding>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box margin="auto" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <Box className="bmsg" maxWidth="sm" margin="auto">
                <Typography variant="h4" sx={{ paddingBlock: "80px", textTransform:"uppercase" }}><TypeText>{T("jumbo.electronics.classes")}</TypeText></Typography>
                <Typography align="justify">{T("jumbo.electronics.desc1")} <br /><br /> {T("jumbo.electronics.desc2")}</Typography>
              </Box>
              <Box style={{ display: "flex", width: "100%", height: "100%" }}>
                <ListItemButton sx={{ width: "100%", height: "100%", alignSelf: "flex-end" }} onClick={() => toggleOpenGroup()}>
                  <Box maxWidth="sm" margin="auto" className="bmsg">
                    <GroupsIcon style={{ fontSize: "50pt", margin: "auto" }} />
                    <Typography sx={{ margin: "auto" }} variant="h5">{T("jumbo.group")}</Typography>
                  </Box>
                </ListItemButton>
                <ListItemButton sx={{ width: "100%", height: "100%", alignSelf: "flex-end" }} href={"https://github.com/ALO-PWr-Elektronika/Classes"}>
                  <Box maxWidth="sm" margin="auto" className="bmsg">
                    <AccountTreeIcon style={{ fontSize: "50pt", margin: "auto" }} />
                    <Typography sx={{ margin: "auto" }} variant="h5">{T("jumbo.materials")}</Typography>
                  </Box>
                </ListItemButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img className="bimg" src="banner.electronics.png" width="100%" height="100%" style={{ objectFit: "cover" }} />
          </Grid>
        </Grid>
      </WindowWrap>
    </Box>
  )
}

export default ElectronicsSection