import { createTheme } from "@mui/material"

const Theme = createTheme({
    palette: {
      primary: {
        main: '#2062a4',
        contrastText: "#fff" 
      },
        secondary: {
            main: '#f0f0f0',
            contrastText: "#000"
        },
    },
  });

export default Theme;