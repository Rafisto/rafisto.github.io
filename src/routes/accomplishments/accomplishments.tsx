import React from 'react'
import { QueryMarkdownText } from '../../api/data/queryJSONServer';
import Data from '../../api/data/Data';
import Markdown from '../../api/functions/text/Markdown';
import WindowWrap from '../../layout/components/window/windowWrap';
import { Box, Typography } from '@mui/material';
import { T, Polish } from '../../localization/T';
import ForeignLanguageAlert from '../../style/foreignLanguageAlert';

const Accomplishments = () => {
  const { isLoading, isError, data, error, refetch } = QueryMarkdownText({ queryUrl: Data.fetchAccopmlishments });
  return (
    <div>
      {!Polish() && <ForeignLanguageAlert TKey="alert.translationpending" />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <WindowWrap name={T("accomplishments")} maxWidth="lg">
        <Typography sx={{ textAlign: "center", padding: "20px" }} variant="h3">{T("accomplishments")}</Typography>
        <Box sx={{ padding: "10px" }}>
          <Markdown>{data}</Markdown>
        </Box>
      </WindowWrap>
    </div>
  )

}

export default Accomplishments