import { Box, Grid, Link, Slider, Typography } from "@mui/material";

type SkillProp = {
    skill:
        | string[]
        | {
              type: string;
              name: string;
              href: string;
          }[]
        | {
              type: string;
              name: string;
              level: number;
          }[]
        | {
              type: string;
              name: string;
              level: string;
          }[];
};

type LinkType = { type: string; name: string; href: string };
type SkillType = { type: string; name: string; level: string };
type LanguageType = { type: string; name: string; level: string };

const TextStyle = {
    marginInline: "10px",
    marginBlock: "5px",
};

const LinkStyle = {
    textAlign: "center",
    textDecoration: "none",
    margin: "15px",
};

const Skill = ({ skill }: SkillProp) => {
    const render = skill.map((item,i) => {
        if (typeof item == "string") {
            return (
                <Typography key={`${item}_${i}`} sx={TextStyle}>
                    {item}
                </Typography>
            );
        } else if (item.type == "Link") {
            return (
                <Link
                    key={`${item.name}_${i}`}
                    href={(item as unknown as LinkType).href}
                    sx={LinkStyle}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white",
                            textShadow: "2px 2px 10px rgba(255, 255, 255, 1);",
                        }}
                    >
                        {item.name}
                    </Typography>
                </Link>
            );
        } else if (item.type == "Skill") {
            return (
                <Box key={`${item.name}_${i}`} sx={{ marginRight: "30pt" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Typography
                                sx={{
                                    textAlign: "right",
                                    transform: "translateY(25%)",
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                sx={{ transform: "translateY(2px)" }}
                                aria-label="Temperature"
                                defaultValue={parseInt(
                                    (item as unknown as SkillType).level
                                )}
                                min={10}
                                max={100}
                                disabled
                            />
                        </Grid>
                    </Grid>
                </Box>
            );
        } else {
            return <>Skill type unsupported</>;
        }
    });
    return <>{render}</>;
};

export default Skill;
