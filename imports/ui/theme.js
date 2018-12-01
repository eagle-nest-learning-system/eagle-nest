import { createMuiTheme } from '@material-ui/core';
import { pink, blue } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});
