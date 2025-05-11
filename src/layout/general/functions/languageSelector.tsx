import { Autocomplete, IconButton, Menu, MenuItem, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useGlobalState, GlobalStateInterface } from '../../../hooks/GlobalStateProvider';
import { LanguageSave } from '../../../localization/LanguageSave';
import TranslateIcon from '@mui/icons-material/Translate';

const options = [
    {
        text: "🇵🇱 Polski",
        value: "PL",
    },
    {
        text: "🇺🇸 English",
        value: "EN",
    },
    {
        text: "🇪🇸 Español",
        value: "ES",
    },
]

const LanguageSelector = () => {
    const { setState } = useGlobalState();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const changeLang = (data: Partial<GlobalStateInterface>) => {
        LanguageSave(data.lang as string)
        setState((prev) => ({ ...prev, ...data }));
    };

    return (
        <>
            <IconButton onClick={(e) => { setAnchorEl(e.currentTarget); setOpen(!open) }}>
                <TranslateIcon />
            </IconButton>
            <Menu MenuListProps={{ 'aria-labelledby': 'basic-button'}} PaperProps={{ sx: { background: "#000000" } }} open={open} anchorEl={anchorEl} onClose={() => setOpen(false)}>
                {options.map((option) => (
                    <MenuItem key={option.value} onClick={() => { changeLang({ lang: option.value }); setOpen(!open) }}>
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default LanguageSelector