import { Box, Grid, Typography } from "@mui/material";
import Summary from "./components/summary";
import information from "./data/information.json";
import Photo from "./components/photo";
import Skills from "./components/skills";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { KeyboardReturn } from "@mui/icons-material";

type Information = { title: string; content: string };

const divStyle: CSSProperties = {
    backgroundColor: "#121212",
    marginInline: "auto",
    minHeight: "100vh",
};

const CurriculumVitae = () => {
    return (
        <div style={divStyle}>
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    position: "absolute",
                    zIndex: "2",
                    padding: "10px",
                }}
            >
                <KeyboardReturn />
            </Link>
            <Box maxWidth="lg" margin="auto" sx={{ textAlign: "left" }}>
                <Grid container>
                    <Grid item lg={4} md={6} xs={12}>
                        <Photo />
                        <Skills />
                    </Grid>
                    <Grid item lg={8} md={6} xs={12}>
                        {information.map((item, i) => (
                            <div key={`${item.title}_${i}`}>
                                {Array.isArray(item.description) ? (
                                    <>
                                        <Summary
                                            title={item.title}
                                            description={
                                                item.description as Information[]
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Summary
                                            title={item.title}
                                            description={[
                                                item.description as Information,
                                            ]}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "10px",
                            }}
                        >
                            <img
                                style={{ overflow: "hidden" }}
                                src="./stack.svg"
                            />
                        </div>
                    </Grid>
                </Grid>
                <Typography
                    sx={{
                        padding: "10px",
                        fontSize: "10px",
                        textAlign: "right",
                    }}
                >
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                    ___ w celu prowadzenia rekrutacji na aplikowane przeze mnie
                    stanowisko.
                </Typography>
            </Box>
        </div>
    );
};

export default CurriculumVitae;
