import React from 'react'
import { Box, Grid } from '@mui/material'
import PoemList from './components/poemlist'
import { useParams } from 'react-router-dom'
import PoemDisplay from './components/poemdisplay'
import WindowWrap from '../../../layout/components/window/windowWrap'

const Poems = () => {
  const { url } = useParams();
  return (
    (url) ? (
      <Grid container spacing={1}>
        <Grid item xs={12} md={9}>
          <WindowWrap name="./poems">
            <PoemDisplay url={(url) ? (url) : undefined} />
          </WindowWrap>
        </Grid>
        <Grid item xs={12} md={3}>
          <WindowWrap name="./list">
            <PoemList />
          </WindowWrap>
        </Grid>
      </Grid>
    ) :
      (
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box maxWidth="lg" sx={{ margin: "auto" }}>
              <WindowWrap name="./poems">
                <PoemList full />
              </WindowWrap>
            </Box>
          </Grid>
        </Grid>
      )

  )
}

export default Poems