import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Theme {}
    // allow configuration using `createTheme`
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ThemeOptions {}
}

declare module '@mui/material/styles' {
    interface Palette {
        customColors: {
            [key: string]: string;
        };
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        customColors?: {
            [key: string]: string;
        };
    }
}

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
            xl: 1536,
        },
    },
    palette: {
        customColors: {
            white: '#FFF',
            gray: '#99a1a6',
            blue: '#00537a',
            red: '#e31837',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f7fcff',
                    '& *': {
                        margin: '0',
                        padding: '0',
                        listStyleType: 'none',
                        textDecoration: 'none',
                    },
                },
            },
        },
    },
});
