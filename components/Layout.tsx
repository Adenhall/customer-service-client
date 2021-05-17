import React, { ReactNode, useState } from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  TextField,
} from "@material-ui/core";
import HamburgerIcon from "assets/icons/hamburger.svg";
import SearchIcon from "assets/icons/search.svg";
import PlumeLogo from "assets/plume-logo.svg";

type Props = {
  children?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navBar: {
      background: theme.palette.common.plumeBrown,
    },
    navContainer: {
      justifyContent: "space-between",
    },
    inputContainer: {
      background: "#fff",
      "& svg": {
        fill: theme.palette.common.plumeBrown,
      },
    },
    searchField: {
      background: "#fff",
      width: "100%",
    },
  })
);

/**
 * Layout component that wraps around the whole app
 */

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div>
      <AppBar position="static" className={classes.navBar}>
        {isSearch ? (
          <Toolbar className={classes.inputContainer}>
            <SearchIcon className={classes.menuButton} />
            <TextField className={classes.searchField} />
          </Toolbar>
        ) : (
          <Toolbar className={classes.navContainer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HamburgerIcon />
            </IconButton>
            <PlumeLogo />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="search"
              onClick={() => setIsSearch(!isSearch)}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
