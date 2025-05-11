import React, { useEffect } from 'react'
import Data from '../../../api/data/Data';
import { QueryJSON, QueryMarkdownText } from '../../../api/data/queryJSONServer';
import ForeignLanguageAlert from '../../../style/foreignLanguageAlert';
import { Typography, Box, Divider } from '@mui/material';
import Markdown from '../../../api/functions/text/Markdown';
import WindowWrap from '../../../layout/components/window/windowWrap';
import T, { Polish } from '../../../localization/T';
import LoadingBackdrop from '../../../style/loadingBackdrop';

type Props = {
    url: string;
}

const Article = ({ url }: Props) => {
    const { isLoading, data } = QueryMarkdownText({ queryUrl: Data.fetchArticle + url });

    return (
        <div>
            {!Polish() && <ForeignLanguageAlert TKey="alert.translationpending" />}
            <LoadingBackdrop open={isLoading} />
            {data && (
                <WindowWrap name={T("toolbar.articles")} maxWidth="lg">
                    <Box sx={{ padding: "10px", background: "rgba(0,0,0,0.7)" }}>
                        <div style={{ textAlign: "justify" }}>
                            <Markdown className="markdown" key={data.substring(0, 40)}>
                                {data}
                            </Markdown>
                        </div>
                    </Box>
                </WindowWrap>
            )
            }
        </div >
    )
}

export default Article