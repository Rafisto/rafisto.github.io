import { useState } from 'react'
import { QueryJSON } from '../../../api/data/queryJSONServer'
import Data from '../../../api/data/Data'
import { useNavigate } from 'react-router-dom';
import WindowWrap from '../../../layout/components/window/windowWrap';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import T from '../../../localization/T';

interface ArticleList {
    id: number;
    title: string;
    date: string;
    description: string;
    url: string;
}

const ArticleList = () => {
    const navigate = useNavigate();
    const { isLoading, isError, data } = QueryJSON({ queryUrl: Data.fetchArticles });
    const [search, setSearch] = useState<String>("");

    const resetSearch = () => {
        setSearch("");
    }

    const articleRedirect = (url: string) => {
        navigate("/articles/" + url);
    }


    return (
        <Box margin="auto" maxWidth="lg">
            <WindowWrap>
                <TableContainer sx={{ padding: "10px" }}>
                    <Grid container rowSpacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{ marginBlockEnd: "15px", textAlign: "center" }}>{T("article.list")}</Typography>
                            <Typography sx={{ margin: "auto" }} maxWidth="sm">{T("article.list.greeting")}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{ textAlign: "center", transform: "translateY(30%)" }} variant="h5">{T("article.list")}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField className="poemlisttitle" onChange={e => setSearch(e.target.value)} value={search} sx={{
                                width: "100%"
                            }} color="secondary" variant="outlined" label={T("article.search")} />
                        </Grid>
                    </Grid>
                    <Table sx={{
                        minWidth: 650
                    }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>{T("article.title")}</TableCell>
                                <TableCell>{T("article.date")}</TableCell>
                                <TableCell>{T("article.description")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading ? <div>Loading...</div> : 
                            ((typeof data[Symbol.iterator] === 'function') && (data.sort().map((data: ArticleList) => {
                                return data.title.toLowerCase().includes(search.toLowerCase()) || data.description.toLowerCase().includes(search.toLowerCase()) ?
                                    <TableRow key={data.id} onClick={() => articleRedirect(data.url)} sx={{ textDecoration: "none", cursor: "pointer" }}>
                                        <TableCell component="th" scope="row">{data.id}</TableCell>
                                        <TableCell>{data.title}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.description}</TableCell>
                                    </TableRow> : null;
                            }
                            )))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </WindowWrap>
        </Box>
    )

}

export default ArticleList
