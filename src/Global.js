import { createTheme } from "@mui/material";

export const globalTheme =  createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2A7AE4'
        },
        secondary: {
            main: '#191919'
        },
        error: {
            main: '#C62828'
        },
        white: {
            main : '#F5F5F5'
        }
    }
})