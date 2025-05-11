import { useScrollTrigger, Slide } from "@mui/material";

interface ScrollProps {
    children: React.ReactElement;
    window?: () => Window;
}

export const HideOnScroll = (props: ScrollProps) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
