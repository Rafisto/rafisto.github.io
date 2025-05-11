import { TextField, List, ListItemButton, Typography } from "@mui/material";
import React from "react";
import T from "../../../../localization/T";
import { Link } from "react-router-dom";

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
    resetSearch: () => void,
}


export const MobilePoemTable = ({ poems, search, setSearch, resetSearch }: TableProps) => {
    return <>
        <TextField onChange={e => setSearch(e.target.value)} value={search} sx={{
            width: "100%"
        }} color="secondary" variant="outlined" label={T("search.poems")} />
        <List>
            {poems!.map((poem, index) => {
                return poem.title.toLowerCase().includes(search.toLowerCase()) || poem.description.toLowerCase().includes(search.toLowerCase()) ? <ListItemButton key={index} onClick={resetSearch} component={Link} to={`/poems/${poem.url}`}>
                    <Typography variant="h6">{poem.title}</Typography>
                </ListItemButton> : null;
            })}
        </List>
    </>;
}
