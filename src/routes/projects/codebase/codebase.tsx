import GlitchText from "../../../style/glitchedText/glitchText";
import {
    QueryJSON,
    QueryMarkdownText,
} from "../../../api/data/queryJSONServer";
import Data from "../../../api/data/Data";
import {
    Grid,
    List,
    ListItemButton,
    TextField,
    Typography,
} from "@mui/material";
import { CSSProperties, useState } from "react";
import { InsertDriveFile } from "@mui/icons-material";
import RandomizeGlitchText from "../../../style/glitchedText/randomizeGlitchText";
import Markdown from "../../../api/functions/text/Markdown";

const divStyle: CSSProperties = {
    backgroundColor: "#060606",
    position: "absolute",
    width: "100%",
    top: "0",
    bottom: "0",
    padding: "20px",
    overflowY: "auto",
};

const Codebase = () => {
    const { isLoading, data } = QueryJSON({
        queryName: "JSONGitLabTree",
        queryUrl: Data.gitlabCodebaseTree,
    });

    const [search, setSearch] = useState("");
    const [path, setPath] = useState("README.md");

    const { isLoading: isMarkdownLoading, data: markdownData } = QueryJSON({
        queryName: ["JSONGitLabFile", path],
        queryUrl: Data.gitlabCodebaseFile + path + Data.gitlabRef,
    });

    const reloadFile = (file: string) => {
        file = file.replace("/", "%2F");
        setPath(file);
    };

    if (isLoading) {
        return (
            <div style={divStyle}>
                <div style={{ height: "40px" }} />
                <GlitchText text="Loading..." />
            </div>
        );
    } else {
        return (
            <div style={divStyle}>
                <div style={{ height: "40px" }} />
                <Grid container>
                    <Grid item xs={3}>
                        <RandomizeGlitchText ms={500}>
                            Codebase of Rafist0
                        </RandomizeGlitchText>
                        <Typography
                            sx={{ padding: "3px", fontFamily: "monospace" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignSelf: "flex-start",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    [$] find ~/cbase | grep
                                </Typography>
                                <TextField
                                    size="small"
                                    sx={{
                                        marginLeft: "5px",
                                    }}
                                    onChange={(e) =>
                                        setSearch(e.currentTarget.value)
                                    }
                                ></TextField>
                            </div>
                        </Typography>
                        <List>
                            {data.map(
                                (item: any) =>
                                    item.type === "blob" &&
                                    (item.path as string)
                                        .toLowerCase()
                                        .includes(search.toLowerCase()) && (
                                        <ListItemButton
                                            key={item.path}
                                            onClick={() =>
                                                reloadFile(item.path)
                                            }
                                        >
                                            <InsertDriveFile />
                                            <Typography
                                                sx={{
                                                    padding: "3px",
                                                    fontFamily: "monospace",
                                                }}
                                            >
                                                {item.path}
                                            </Typography>
                                        </ListItemButton>
                                    )
                            )}
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        {!isMarkdownLoading && markdownData.content && (
                            <Markdown
                                className="markdown"
                                key={markdownData.content.substring(0, 40)}
                            >
                                {atob(markdownData.content)}
                            </Markdown>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }
};
export default Codebase;
