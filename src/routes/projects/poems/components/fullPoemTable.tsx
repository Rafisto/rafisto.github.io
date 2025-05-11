import { TableContainer, Grid, Typography, TextField, Table, TableHead, TableRow, TableCell, TableBody, Divider } from "@mui/material";
import React from "react";
import T from "../../../../localization/T";
import { Link, useNavigate } from "react-router-dom";

interface PoemList {
    url: string,
    id: number,
    date: string,
    title: string,
    description: string,
}

interface TableProps {
    poems: PoemList[] | undefined,
    search: String,
    setSearch: (search: string) => void,
}


export const FullPoemTable = ({ poems, search, setSearch }: TableProps) => {
    const navigate = useNavigate();

    const poemRedirect = (url: string) => {
        navigate("/poems/" + url);
    }

    return <TableContainer sx={{ padding: "10px" }}>
        <Grid container rowSpacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" style={{ marginBlockEnd: "15px", textAlign:"center"}}>{T("poem.list")}</Typography>
                <Typography sx={{ margin: "auto" }} maxWidth="sm">{T("poem.list.greeting")}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography sx={{ textAlign: "center", transform: "translateY(30%)" }} variant="h5">{T("poems.list")}</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField className="poemlisttitle" onChange={e => setSearch(e.target.value)} value={search} sx={{
                    width: "100%"
                }} color="secondary" variant="outlined" label={T("search.poems")} />
            </Grid>
        </Grid>
        <Table sx={{
            minWidth: 650
        }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>{T("poems.title")}</TableCell>
                    <TableCell>{T("poems.date")}</TableCell>
                    <TableCell>{T("poems.description")}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {poems && poems.sort().map((poem: PoemList) => {
                    return poem.title.toLowerCase().includes(search.toLowerCase()) || poem.description.toLowerCase().includes(search.toLowerCase()) ?
                        <TableRow key={poem.id} onClick={() => poemRedirect(poem.url)} sx={{ textDecoration: "none", cursor: "pointer" }}>
                            <TableCell component="th" scope="row">{poem.id}</TableCell>
                            <TableCell>{poem.title}</TableCell>
                            <TableCell>{poem.date}</TableCell>
                            <TableCell>{poem.description}</TableCell>
                        </TableRow> : null;
                })}
            </TableBody>
        </Table>
    </TableContainer>;
}
