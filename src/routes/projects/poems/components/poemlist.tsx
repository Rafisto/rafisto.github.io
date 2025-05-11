import { MobilePoemTable } from './mobilePoemTable';
import { FullPoemTable } from './fullPoemTable';
import { Divider, Grid, List, ListItemButton, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import T from '../../../../localization/T';
import './../poem.css';

const poemurl = "https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/__list__.json";

interface PoemList {
    url: string,
    id: number,
    date: string,
    title: string,
    description: string,
}

interface Props {
    full?: boolean
}

const ListSkeleton = () => <Skeleton width="100%" variant="rectangular" height="40px" />;

const PoemList = ({ full }: Props) => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [poems, setPoems] = useState<PoemList[]>();
    const [search, setSearch] = useState<String>("");

    const resetSearch = () => {
        setSearch("");
    }

    useEffect(() => {
        fetch(poemurl)
            .then((response) => response.json())
            .then((data) => {
                setPoems(data);
                setLoading(false);
            });
    }, []);

    return (
        <React.Fragment>
            {(loading)
                ?
                (
                    <React.Fragment>
                        <Skeleton width="50%" variant="text" sx={{ margin: "auto" }} />
                        <ListSkeleton /><ListSkeleton /><ListSkeleton />
                    </React.Fragment>
                )
                :
                (
                    <React.Fragment>
                        {(full) ?
                            (
                                <FullPoemTable setSearch={setSearch} search={search} poems={poems} />
                            )
                            :
                            (
                                <MobilePoemTable setSearch={setSearch} search={search} resetSearch={resetSearch} poems={poems} />
                            )}
                    </React.Fragment>
                )
            }
        </React.Fragment >
    )
}

export default PoemList