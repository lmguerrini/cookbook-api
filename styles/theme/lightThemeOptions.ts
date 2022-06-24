import { createTheme } from "@mui/material/styles";

const lightThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#3F51B5",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.844)",
            secondary: "rgba(0, 0, 0, 0.6)",
        },
    },
    components: {
        MuiSelect: {
            defaultProps: {
                displayEmpty: true,
                variant: "outlined",
            },
        },
    },
});

export default lightThemeOptions;
